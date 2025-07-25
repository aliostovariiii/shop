/**
 * هوک Toast - Toast Hook
 * 
 * این هوک برای نمایش پیام‌های موقت (Toast) در اپلیکیشن استفاده می‌شود
 * This hook is used to display temporary messages (Toast) in the application
 * 
 * استفاده - Usage:
 * const { toast } = useToast()
 * 
 * toast({
 *   title: "عنوان پیام",
 *   description: "توضیحات پیام",
 *   variant: "default" // یا "destructive"
 * })
 * 
 * انواع Toast:
 * - default: پیام عادی (سبز)
 * - destructive: پیام خطا (قرمز)
 * 
 * مثال‌های کاربرد:
 * - نمایش پیام موفقیت پس از ثبت نام
 * - نمایش خطا در صورت مشکل در ورود
 * - اطلاع‌رسانی افزودن محصول به سبد خرید
 */

import * as React from "react"

// تایپ‌های مربوط به Toast
type ToastProps = {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: React.ReactNode
  variant?: "default" | "destructive"
}

// تایپ‌های اکشن‌های Toast
type ToastActionElement = React.ReactElement

// حالت‌های مختلف Toast
const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const

type ActionType = typeof actionTypes

// تایپ اکشن‌ها
type Action =
  | {
      type: ActionType["ADD_TOAST"]
      toast: ToastProps
    }
  | {
      type: ActionType["UPDATE_TOAST"]
      toast: Partial<ToastProps>
    }
  | {
      type: ActionType["DISMISS_TOAST"]
      toastId?: ToastProps["id"]
    }
  | {
      type: ActionType["REMOVE_TOAST"]
      toastId?: ToastProps["id"]
    }

// وضعیت Toast
interface State {
  toasts: ToastProps[]
}

// شمارنده برای تولید ID یکتا
let count = 0

// تولید ID یکتا برای هر Toast
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

// ریدیوسر برای مدیریت وضعیت Toast‌ها
const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    })
  }, 1000000)

  toastTimeouts.set(toastId, timeout)
}

// ریدیوسر اصلی
export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, 1),
      }

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      }

    case "DISMISS_TOAST": {
      const { toastId } = action

      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id)
        })
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      }
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}

// لیسنرهای Toast
const listeners: Array<(state: State) => void> = []

let memoryState: State = { toasts: [] }

// تابع dispatch برای ارسال اکشن‌ها
function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

// تایپ تابع toast
type Toast = Omit<ToastProps, "id">

// تابع اصلی toast برای نمایش پیام
function toast({ ...props }: Toast) {
  const id = genId()

  const update = (props: ToastProps) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    })
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id })

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss()
      },
    },
  })

  return {
    id: id,
    dismiss,
    update,
  }
}

// هوک useToast برای استفاده در کامپوننت‌ها
function useToast() {
  const [state, setState] = React.useState<State>(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  }
}

export { useToast, toast }
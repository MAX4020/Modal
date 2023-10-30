import classNames from "classnames";

export const primaryColor = classNames(`bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-100 transition`)
export const primaryColorActive = classNames(
  `hover:bg-stone-200 active:bg-stone-300 focus:bg-stone-500`,`dark:hover:bg-stone-700 dark:active:bg-stone-600 dark:focus:bg-stone-500`,
  `hover:text-stone-800 active:text-stone-900 focus:text-stone-100`,`hover:text-stone-200 active:text-stone-200 focus:text-stone-100`
)
export const secondaryColor = classNames('bg-blue-100 dark:bg-blue-800 text-stone-800 dark:text-stone-100 transition')
export const secondaryColorActive = classNames(
  `hover:bg-blue-200 active:bg-blue-300 focus:bg-blue-500`,`dark:hover:bg-blue-700 dark:active:bg-blue-600 dark:focus:bg-blue-500`,
  `hover:text-stone-800 active:text-stone-900 focus:text-stone-100`,`hover:text-stone-200 active:text-stone-200 focus:text-stone-100`
)
export const successColor = classNames('bg-green-100 dark:bg-green-800 text-stone-800 dark:text-stone-100 transition')
export const successColorActive = classNames(
  `hover:bg-green-200 active:bg-green-300 focus:bg-green-500`,`dark:hover:bg-green-700 dark:active:bg-green-600 dark:focus:bg-green-500`,
  `hover:text-stone-800 active:text-stone-900 focus:text-stone-100`,`hover:text-stone-200 active:text-stone-200 focus:text-stone-100`
)
export const infoColor = classNames('bg-sky-100 dark:bg-sky-800 text-stone-800 dark:text-stone-100 transition')
export const infoColorActive = classNames(
  `hover:bg-sky-200 active:bg-sky-300 focus:bg-sky-500`,`dark:hover:bgskye-700 dark:active:bg-sky-600 dark:focus:bg-sky-500`,
  `hover:text-stone-800 active:text-stone-900 focus:text-stone-100`,`hover:text-stone-200 active:text-stone-200 focus:text-stone-100`
)
export const warningColor = classNames('bg-amber-100 dark:bg-amber-800 text-stone-800 dark:text-stone-100 transition')
export const warningColorActive = classNames(
  `hover:bg-amber-200 active:bg-amber-300 focus:bg-amber-500`,`dark:hover:bg-amber-700 dark:active:bg-amber-600 dark:focus:bg-amber-500`,
  `hover:text-stone-800 active:text-stone-900 focus:text-stone-100`,`hover:text-stone-200 active:text-stone-200 focus:text-stone-100`
)
export const dangerColor = classNames('bg-red-100 dark:bg-red-800 text-stone-800 dark:text-stone-100 transition')
export const dangerColorActive = classNames(
  `hover:bg-red-200 active:bg-red-300 focus:bg-red-500`,`dark:hover:bg-red-700 dark:active:bg-red-600 dark:focus:bg-red-500`,
  `hover:text-stone-800 active:text-stone-900 focus:text-stone-100`,`hover:text-stone-200 active:text-stone-200 focus:text-stone-100`
)
export const contrastColor = classNames('bg-stone-950 text-stone-100','dark:bg-stone-200 text-stone-950 transition')
export const contrastColorActive = classNames(
  `hover:bg-stone-900 active:bg-stone-700 focus:bg-stone-800`,`dark:hover:bg-stone-100 dark:active:bg-stone-200 dark:focus:bg-stone-300`,
  `hover:text-stone-200 active:text-stone-200 focus:text-stone-200`,`dark:hover:text-stone-950 dark:active:text-stone-950 dark:focus:text-stone-950`
)

export const button = classNames('rounded-xl shadow-lg m-2 p-2 flex justify-center text-2xl')

export const buttonPrimary = classNames(button,primaryColor,primaryColorActive)
export const buttonSecondary = classNames(button,secondaryColor,secondaryColorActive)
export const buttonSuccess = classNames(button,successColor,successColorActive)
export const buttonInfo = classNames(button,infoColor,infoColorActive)
export const buttonWarning = classNames(button,warningColor,warningColorActive)
export const buttonDanger = classNames(button,dangerColor,dangerColorActive)
export const buttonContrast = classNames(button,contrastColor,contrastColorActive)

export const containerShadowinner = classNames('shadow-inner')
export const containerShadowouter = classNames('shadow-lg')
export const container = classNames('m-auto w-[1440px]')

export const row = classNames('flex','flex-row','flex-wrap')
export const column = classNames('flex','flex-col')
export const start = classNames('flex','flex-start')
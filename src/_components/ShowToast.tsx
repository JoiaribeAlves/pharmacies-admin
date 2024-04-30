import { ReactNode } from 'react'
import { toast } from 'sonner'

interface IShowToast {
  title: string
  description?: string
  icon: ReactNode
}

function ShowToast(props: IShowToast) {
  toast(props.title, {
    description: props.description,
    icon: props.icon,
    position: 'top-right',
    duration: 4000,
  })

  return <></>
}

export { ShowToast }

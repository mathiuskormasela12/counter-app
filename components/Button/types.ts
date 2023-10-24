import { type PropsWithChildren } from 'react'

export interface IButtonProps extends PropsWithChildren {
  onPress?: () => void
}

export interface IPressableStyle {
  pressed: boolean
}

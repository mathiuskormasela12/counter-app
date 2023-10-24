import type React from 'react'
import { type PropsWithChildren } from 'react'

export interface ICounterState {
  count: number
  handleIncrement: () => void
  handleDecrement: () => void
}

export type UseCounterStore = () => {
  CounterContext: React.Context<ICounterState>
  CounterProvider: React.FC<PropsWithChildren>
}

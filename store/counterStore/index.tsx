import React, { type PropsWithChildren, createContext, useState } from 'react'
import { type UseCounterStore, type ICounterState } from './types'

const useCounterStore: UseCounterStore = () => {
  const CounterContext = createContext<ICounterState>({
    count: 0,
    handleDecrement () {
      return 0
    },
    handleIncrement () {
      return 0
    }
  })

  const CounterProvider: React. FC<PropsWithChildren> = ({ children }) => {
    const [count, setCount] = useState<number>(0)

    const handleIncrement = (): void => {
      setCount((currentCount) => currentCount + 1)
    }

    const handleDecrement = (): void => {
      setCount((currentCount) => currentCount - 1)
    }

    const state: ICounterState = {
      count,
      handleDecrement,
      handleIncrement
    }

    return (
      <CounterContext.Provider value={state}>
        {children}
      </CounterContext.Provider>
    )
  }

  return {
    CounterContext,
    CounterProvider
  }
}

export const { CounterContext, CounterProvider } = useCounterStore()

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CounterScreen } from './screens'
import { CounterProvider } from './store'

const Stack = createNativeStackNavigator()

const App: React.FC = () => {
  return (
    <CounterProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Counter'
            component={CounterScreen}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </CounterProvider>
  )
}

export default App

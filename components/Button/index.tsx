import React from 'react'
import { View, Pressable, Text, type ViewStyle } from 'react-native'
import { type IPressableStyle, type IButtonProps } from './types'
import styles from './styles'

export const Button: React.FC<IButtonProps> = ({ children, onPress }) => {
  const buttonStyle = ({ pressed }: IPressableStyle): ViewStyle[] | ViewStyle => {
    if (pressed) {
      return [
        styles.buttonContainer,
        styles.pressed
      ]
    }

    return styles.buttonContainer
  }

  console.log('Button', children, 'is rerendered')

  return (
    <View style={styles.button}>
      <Pressable
        onPress={onPress}
        style={buttonStyle}
        android_ripple={{ color: '#640233' }}
      >
        <Text style={styles.buttonText}>
          {children}
        </Text>
      </Pressable>
    </View>
  )
}

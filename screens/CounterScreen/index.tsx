import React, { Fragment, useCallback, useContext } from 'react'
import { View, ImageBackground, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import MyBackground from '../../assets/images/background.png'
import styles from './styles'
import { StatusBar } from 'expo-status-bar'
import { Button } from '../../components'
import { CounterContext } from '../../store'

const MemoizeButton = React.memo(Button)

export const CounterScreen: React.FC = () => {
  const { count, handleIncrement, handleDecrement } = useContext(CounterContext)
  const memoizeHandleIncrement = useCallback(handleIncrement, [])
  const memoizeHandleDecrement = useCallback(handleDecrement, [])

  return (
    <Fragment>
     <StatusBar style='light' />
      <View style={styles.hero}>
        <LinearGradient
          colors={['#4e0329', '#ddb52f']}
          style={styles.hero}
        >
          <ImageBackground
            source={MyBackground}
            style={[styles.hero, styles.wrapper]}
            imageStyle={styles.image}
          >
            <View style={styles.card}>
              <View style={styles.counterNumberContainer}>
                <View style={styles.counterNumberCard}>
                  <Text style={styles.counterNumber}>
                    {count}
                  </Text>
                </View>
              </View>
              <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                  <MemoizeButton onPress={memoizeHandleDecrement}>
                    Decrement
                  </MemoizeButton>
                </View>
                <View style={styles.buttonContainer}>
                  <MemoizeButton onPress={memoizeHandleIncrement}>
                    Increment
                  </MemoizeButton>
                </View>
              </View>
            </View>
          </ImageBackground>
        </LinearGradient>
      </View>
    </Fragment>
  )
}

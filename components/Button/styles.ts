import { StyleSheet } from 'react-native'
import { size } from '../../helpers'

const styles = StyleSheet.create({
  button: {
    overflow: 'hidden',
    borderRadius: size(1.2)
  },
  buttonContainer: {
    backgroundColor: '#72063c',
    paddingVertical: size(3)
  },
  buttonText: {
    color: 'white',
    fontSize: size(3.8),
    textAlign: 'center'
  },
  pressed: {
    opacity: 0.75
  }
})

export default styles

import { StyleSheet } from 'react-native'
import { size } from '../../helpers'

const styles = StyleSheet.create({
  hero: {
    flex: 1
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: size(10)
  },
  image: {
    opacity: 0.25
  },
  card: {
    backgroundColor: '#3b021f',
    paddingVertical: size(5),
    borderRadius: size(2),
    width: '100%',
    paddingHorizontal: size(5)
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: size(3)
  },
  buttonContainer: {
    flex: 1
  },
  counterNumberContainer: {
    marginBottom: size(5),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  counterNumber: {
    color: 'white',
    textAlign: 'center',
    fontSize: size(5.8)
  },
  counterNumberCard: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    paddingBottom: size(2.2),
    paddingHorizontal: 10
  }
})

export default styles

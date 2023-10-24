import { Dimensions } from 'react-native'

export const size = (value: number): number => value / 100 * Dimensions.get('screen').width

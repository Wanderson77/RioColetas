import { View, Text } from 'react-native'
import React from 'react'

import style from './styles'

export default function SignInScreen() {

  async function fetchAPI() {
    try {
      const response = ''
    } catch (error) {
      console.error(error);
    } finally {

    }
  }

  return (
    <View>
      <Text>SignInScreen</Text>
      <TouchableOpacity
        style={styles.buttonNew}
        onPress={fetchAPI}
      >Go</TouchableOpacity>
    </View>
  )
}

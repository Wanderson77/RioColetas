/** Simple comp */
import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { styles } from './style'

const index = () => {
  const [state, setSate] = useState()
  const [garbage, setGarbage] = useState([]);

  useEffects(() => {},[]);

  return (
    <View style={styles.container}>
      <Text>index</Text>
    </View>
  )
}

export default index

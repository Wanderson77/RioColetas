/** Simple comp */
import { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'

const index = () => {
  const [state, setState] = useState();
  const [garbage, setGarbage] = useState([]);

  function handleActionUser() {
    console.log("Native");
  }

  useEffect(() => {
    console.log("RN");
  },[]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>index</Text>
    </View>
  )
}

export default index

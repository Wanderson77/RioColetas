import { useEffect, useState } from 'react'
import { SafeAreaView, View, Text } from 'react-native'

export default function ProfileScreen() {
  const [error, setError] = useState({});

  if (!error) {
    alert('Error: ' + error)
  }

  useEffect(() => {},[]);
  
  return (
    <SafeAreaView>
      <View>
        <Text>index</Text>
      </View>
    </SafeAreaView>
  )
}

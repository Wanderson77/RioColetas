import {
  useState,
  useEffect
} from 'react'
import {
  ActivityIndicator,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity
} from 'react-native'
import { styles } from './styles';

const SignUpScreen = () => {
  const [user, setUser] = useState([]);

  const greeting = 'Hello RN';

  async function fetchAPI(){
    try {
      console.log('My data' + greeting);
    } catch (error) {

    }
    finally {
      console.log('Fetched');
    }
  }

  useEffect(() => {

  }, [])

  if (loading) {
    return <View>Loading</View>
  }

  return (
    <SafeAreaView>
      <View>
        <Text>teste</Text>
        <ActivityIndicator />
        <TouchableOpacity
          style={styles.button}
          onPress={fetchAPI}
        >
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default SignUpScreen

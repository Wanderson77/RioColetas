import {
  useState,
  useEffect
} from 'react'
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity
} from 'react-native'

const HomeScreen = () => {
  const [error, setError] = useState(false);

  async function fetchAPI(){
    try {

    } catch (error) {
      console.log('Failed to fetch API', error);
    }
  }

  useEffect(() => {
    console.log('Mounting Component');
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Text>RN</Text>
        <TouchableOpacity
          onPress={fetchAPI}
        >Go</TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

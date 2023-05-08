/** Simple comp */
import { useState, useEffect } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  TextInput
} from 'react-native'
import { styles } from './styles'
import * as Clipboard from 'expo-clipboard';


const index = () => {
  const [state, setState] = useState();
  const [garbage, setGarbage] = useState([]);
  const [error, setError] = useState(false);

  async function handleCopyToClipboard() {
    await Clipboard.setStringAsync('hello world');
  }

  function handleActionUser() {
    console.log("Native");
  }

  useEffect(() => {
    console.log("RN");
    if (airbnbStyle) {

    } else {
      console.log(response);
    }
  },[]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>index</Text>
        <TouchableOpacity
          style={styles.likeButton}
          onPress={(handleCopyToClipboard)}
        >
        </TouchableOpacity>
        <Image
          style={styles.img}
          source={uri}
        >
        <TextInput
          style={styles.textInput}
        />
        </Image>
      </View>
    </SafeAreaView>
  )
}

export default index

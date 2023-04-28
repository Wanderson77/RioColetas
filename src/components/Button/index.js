/** Simple comp */
import { useState, useEffect } from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import { styles } from './styles'

const index = () => {
  const [state, setState] = useState();
  const [garbage, setGarbage] = useState([]);
  const [error, setError] = useState(false);

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
    <View style={styles.container}>
      <Text style={styles.text}>index</Text>
      <TouchableOpacity
        style={styles.likeButton}
        onPress={() => Alert('Native')}
      >
      </TouchableOpacity>
    </View>
  )
}

export default index

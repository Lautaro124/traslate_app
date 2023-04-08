import { StyleSheet, View, TouchableOpacity, ToastAndroid } from 'react-native'
import IoIcon from 'react-native-vector-icons/Ionicons'
import * as Clipboard from 'expo-clipboard'

const ShareText = ({ text }: { text: string }) => {
  const copyToClipboard = async () => {
    try {
      await Clipboard.setStringAsync(text)
      ToastAndroid.show('Copied to clipboard', ToastAndroid.SHORT)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => { void copyToClipboard() }}>
        <IoIcon name="copy-outline" size={22}></IoIcon>
      </TouchableOpacity>
    </View>
  )
}

export default ShareText

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 10,
    justifyContent: 'center'
  }
})

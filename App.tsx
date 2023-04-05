import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

export default function App () {
  const [text, setText] = useState<string>('')
  const [translatedText, setTranslatedText] = useState<string>('')

  return (
    <View style={styles.container}>
      <StatusBar style='auto'/>
      <Text>Write your text</Text>
      <TextInput style={styles.input} onChangeText={setText} />
      <Button title='Traslate' />
      <View>
        <Text>Translated text</Text>
        <View>
          <Text>{translatedText}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    height: 40,
    width: 200,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5
  }
})

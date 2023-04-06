import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import service from './service/service'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import type { Translate } from './interfaces/traslate'

export default function App () {
  const [text, setText] = useState<string>('')
  const [translatedText, setTranslatedText] = useState<string>('')

  const translate = async () => {
    const { data } = await service<Translate>(text)
    setTranslatedText(data[0])
  }

  return (
    <View style={styles.container}>
      <StatusBar style='auto'/>
      <Text>Write your text</Text>
      <TextInput style={styles.input} onChangeText={setText} />
      <Button title='Traslate' onPress={() => { void translate() }} />
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

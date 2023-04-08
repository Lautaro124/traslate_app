import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import service from './service/service'
import { StyleSheet, View } from 'react-native'
import type { Translate } from './interfaces/traslate'
import InputTraslate from './components/inputTraslate'
import TextTraslate from './components/textTraslate'

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
      <InputTraslate setText={setText} translate={translate} />
      <TextTraslate traslateText={translatedText} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

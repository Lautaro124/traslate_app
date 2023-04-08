import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import service from './service/service'
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import type { Translate } from './interfaces/traslate'
import InputTraslate from './components/inputTraslate'
import TextTraslate from './components/textTraslate'

export default function App () {
  const [text, setText] = useState<string>('')
  const [translatedText, setTranslatedText] = useState<string>('')

  const translate = async () => {
    const { data } = await service<Translate>(text)
    const textTraslated = data[0].split('--')[0]
    setTranslatedText(textTraslated)
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <InputTraslate setText={setText} translate={translate} />
          <TextTraslate traslateText={translatedText} />
        </View>
      </ScrollView>
      <StatusBar style='auto'/>
    </SafeAreaView>
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

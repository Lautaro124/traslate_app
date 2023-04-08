import { StyleSheet, Text, View } from 'react-native'
import ShareText from './shareText'

const TextTraslate = ({ traslateText }: { traslateText: string }) => {
  return (
    <View style={styles.contaner}>
        <Text style={styles.title}>Translated text</Text>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{traslateText}</Text>
          <ShareText text={traslateText}/>
        </View>
      </View>
  )
}

export default TextTraslate

const styles = StyleSheet.create({
  contaner: {
    flex: 2,
    width: '100%',
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'flex-start'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  textContainer: {
    width: '100%',
    height: 400,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
    padding: 10
  },
  text: {
    flex: 7,
    width: '100%',
    fontSize: 15,
    fontWeight: 'normal',
    textAlign: 'left'
  }
})

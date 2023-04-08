import { StyleSheet, Text, View } from 'react-native'

const TextTraslate = ({ traslateText }: { traslateText: string }) => {
  return (
    <View style={styles.contaner}>
        <Text style={styles.title}>Translated text</Text>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{traslateText}</Text>
        </View>
      </View>
  )
}

export default TextTraslate

const styles = StyleSheet.create({
  contaner: {
    flex: 3,
    width: '100%',
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'flex-start'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  textContainer: {
    width: '100%',
    height: 400,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
    padding: 5
  },
  text: {
    fontSize: 16,
    fontWeight: 'normal'
  }
})

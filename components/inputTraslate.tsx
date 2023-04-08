import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

interface Props {
  setText: (text: string) => void
  translate: () => Promise<void>
}

const InputTraslate = ({ setText, translate }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title} >Write your text</Text>
      <TextInput
        multiline
        placeholder='Write your text here...'
        style={styles.input}
        onChangeText={setText}
      />
      <View style={styles.button}>
        <Button
          title='Traslate'
          onPress={() => { void translate() }}
        />
      </View>
    </View>
  )
}

export default InputTraslate

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 40,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    width: '100%',
    fontSize: 18,
    fontWeight: 'bold'
  },
  input: {
    marginVertical: 10,
    height: 100,
    width: '100%',
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    textAlign: 'left',
    textAlignVertical: 'top',
    padding: 5,
    fontSize: 15,
    fontWeight: 'normal'
  },
  button: {
    width: 300,
    height: 50
  }
})

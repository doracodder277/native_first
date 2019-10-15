import React, {useState} from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';

export default function App() {
  const[outputText, setOuputText]= useState('open up app.js to start window !!');
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title="change text" onPress={() => setOutputText('THE TEXT CHANGED !!')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

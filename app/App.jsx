import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TextInput, SafeAreaView } from 'react-native';

export default function App() {

  const [counter, setCounter] = useState(1);
  const [b1, setB1] = useState(false);
  const [text, setText] = useState("Useless Text");
  

  const increment = () => {
    setCounter(c => c + 1);
  }

  const increment10 = () => {
    setCounter(c => c + 10);
  }

  const b1Press = () => {
    setB1(true);
  }

  const onChangeText = (text) => {
    setText(text);
  }


  return (

<SafeAreaView style={styles.c}>
    
    <ScrollView style={styles.scrollView}>
    
    <View style={styles.container}>

      <View style={styles.container1}>
        <Text style={styles.kaTu}>Kitas tekstas 2</Text>
        <Button
          title="Press me"
          disabled={b1}
          onPress={b1Press}
        />
        <Button
          title="Nice"
          onPress={b1Press}
        />
      </View>
      <View style={styles.container2}>
        <View style={styles.container21}>
          <Text>Labas, ką tu?</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />
        </View>
        <View style={styles.container22}>
          <Text onPress={increment} onLongPress={increment10} style={styles.kaTu2} >+{counter}</Text>
        </View>
      </View>



    </View>

    <View style={styles.container}>
    <Text style={styles.kaTu}>Kitas tekstas 5</Text>
    </View>

    </ScrollView>
  </SafeAreaView>

  );
}

const styles = StyleSheet.create({

  kaTu: {
    fontSize: 40,
    color: 'crimson',
  },

  c: {
    flex: 1,
    paddingTop: 10,
  },

  scrollView: {
    // marginHorizontal: 20,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200,
  },

  kaTu2: {
    fontSize: 40,
    color: 'skyblue',
  },

  container: {
    height: 600,
    flexDirection: 'row',

  },

  container1: {
    flex: 1,
    backgroundColor: '#fff000',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },

  container2: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  container21: {
    flex: 1,
    backgroundColor: '#fff333',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  container22: {
    flex: 1,
    backgroundColor: '#fff999',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});

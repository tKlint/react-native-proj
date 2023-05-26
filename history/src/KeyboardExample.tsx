
import React, { useEffect, useState } from "react";
import { Keyboard, TextInput, StyleSheet, View, Text } from "react-native";

const Example = () => {
  const [ keyboardSutatus, setKeyboardSutatus ] = useState("hidden")
  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    const hiddenSubscription = Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

    // cleanup function
    return () => {
      showSubscription.remove()
      hiddenSubscription.remove()
    };
  }, []);

  const _keyboardDidShow = () => {
    console.log('show')
    setKeyboardSutatus("show")
  };

  const _keyboardDidHide = () => {
    console.log('hidden')
    // alert("Keyboard Hidden");
    setKeyboardSutatus("hidden")
  };

  return (
    <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
    <Text>{keyboardSutatus}</Text>
    <View>
      <TextInput style={s.input} placeholder='Click here ...' onSubmitEditing={Keyboard.dismiss} />
    </View>
  </View>
  )
}

const s = StyleSheet.create({
   input:{
    margin:60,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 4,
    backgroundColor: "#fff"
   }
})

export default Example;
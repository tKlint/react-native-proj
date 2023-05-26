import React, { useRef, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  UIManager,
  LayoutAnimation,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import LanguageScreen from "./LanguageScreen";
import { TextArea, HStack, Button, Divider } from 'native-base';
import { Dimensions } from "react-native";
import translateFunc from '../api/translate';
import { useAppSelector, useAppDispatch } from '../hooks/store';
import { addHistory } from "../store/usersReducer";
const TopTab = createMaterialTopTabNavigator();

const { width } = Dimensions.get('window')
if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}
export default function HomeScreen() {
  const {
    curIndex,
    languages,
  } = useAppSelector((state) => state.users)
  const dispatch = useAppDispatch()
  const curLanguage = languages[curIndex];
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false)
  const textAreaRef = useRef(null)
  const textValue = useRef('')
  const feedbackPressHandle = () => {
    Keyboard.dismiss();
  };
  const pressTranslateHandle = async () => {
    if (!textValue.current) {
      return
    }
    LayoutAnimation.configureNext({
      duration: 300,
      update: {
        type: LayoutAnimation.Types.linear,
        property: LayoutAnimation.Properties.scaleX,
        springDamping: .5
      }
    })
    setLoading(true)
    const result = await translateFunc(textValue.current, {from : "auto", to : curLanguage.lang}).finally(() => {
      LayoutAnimation.configureNext({
        duration: 200,
        update: {
          type: LayoutAnimation.Types.spring,
          property: LayoutAnimation.Properties.scaleX,
          springDamping: .8
        }
      })
      setLoading(false)
    })
    dispatch(addHistory({
      txt: textValue.current, res: result, to: curLanguage.lang
    }))
    setContent(result as string);
  }
  return (
    <TouchableWithoutFeedback onPress={feedbackPressHandle}>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={{paddingLeft: 10, margin: 10}}>翻译为
          <Text style={{ fontWeight: '500' }}>{curLanguage.chs}</Text>
        </Text>
        <View style={{ alignItems: 'center' }}>
          <TextArea
            ref={textAreaRef}
            placeholder="请输入要翻译的内容"
            autoCompleteType
            w={width - 20}
            h={100}
            style={{
              height: 80
            }}
            onSubmitEditing={Keyboard.dismiss}
            onChangeText={(text) => textValue.current = text}
          />
        </View>
        <HStack justifyContent="flex-end" style={{ padding: 10 }}>
          <Button onPress={pressTranslateHandle} isLoading={loading} isLoadingText="翻译中">翻译</Button>
        </HStack>
        <Text style={{paddingLeft: 10, margin: 10}}>
          译文:
        </Text>
        <Divider />
        <Text style={{ margin: 10, padding: 5 }}>{content}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
  },
});

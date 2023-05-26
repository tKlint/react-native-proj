import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Divider, FlatList, HStack, Input, ScrollView } from "native-base";
import React, { useMemo } from "react";
import {
  ListRenderItem,
  StyleSheet,
  View,
  Text,
  Pressable,
} from "react-native";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from '../hooks/store';
import { changeLan } from "../store/usersReducer";

export default function LanguageScreen() {
  const { languages, curIndex } = useAppSelector((state) => state.users)
  const dispatch = useAppDispatch()
  const curLanguage = languages[curIndex];

  const [searhWord, setSearchWord] = useState("");
  
  const textChangeHandle = (text: string) => {
    setSearchWord(text)
  }
  const pressChangeLanHandle = (lang: typeof languages[number]) => {
    dispatch(changeLan(lang.chs))
  }
  const renderItem: ListRenderItem<typeof languages[number]> = (item) => {
    return (
      <Pressable onPress={() => pressChangeLanHandle(item.item)}
        style={(press) => ({
          backgroundColor: press.pressed ? '#cffafe' : '#ebebeb'
        })}
      >
        <HStack justifyContent="space-between" alignItems="center">
          <Text key={item.index} style={{ margin: 10 }}>
            {item.item.chs}
          </Text>
          {item.item.lang === curLanguage.lang && (
            <FontAwesome name="check-square-o" size={24} color="pink" />
          )}
        </HStack>
        <Divider />
      </Pressable>
    );
  };
  const filterLanguages = useMemo(() => {
    if (!searhWord){
      return languages;
    }
    return languages.filter((lang) => lang.chs.includes(searhWord))
  }, [searhWord])
  return (
    <View style={styles.container}>
      <View style={{ padding: 10, alignItems: "center" }}>
        <Input
          width={300}
          variant="rounded"
          onChangeText={textChangeHandle}
          style={{ backgroundColor: "#fff" }}
          InputRightElement={
            <Ionicons
              style={{ backgroundColor: "#fff", borderWidth: 0 }}
              name="search-circle-outline"
              size={27}
              color="skyblue"
            />
          }
        />
      </View>
      <FlatList data={filterLanguages} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

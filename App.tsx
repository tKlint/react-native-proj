/*
 * @Author: tKlint kuicode0066@163.com
 * @Date: 2023-05-23 23:08:09
 * @LastEditors: tKlint kuicode0066@163.com
 * @LastEditTime: 2023-05-23 23:17:31
 * @FilePath: \react-native-proj\App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState } from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import FreeModalExample from "./src/FreeModalExample";
import BaseApiExample from "./src/BaseApiExample";
import Example from "./src/KeyboardExample";
import { Button, TextInput, View, Dimensions, Platform } from 'react-native';
import { PixelRatio } from "react-native";
import LayoutAnimateExp from "./src/LayoutAnimateExp";
import AnimatedExp from "./src/AnimatedExp";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <NativeBaseProvider>
      {/* <FreeModalExample /> */}
      {/* <BaseApiExample /> */}
      {/* <Example /> */}
      {/* <LayoutAnimateExp /> */}
      <AnimatedExp />
    </NativeBaseProvider>
  );
}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}

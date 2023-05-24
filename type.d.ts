import theme from './App'
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type MyThemeType = typeof theme;
declare module "native-base" {
  interface ICustomTheme extends MyThemeType {}
}


declare global {
  type RootStackParamList = {
    [key: string]: any
  };
  type StackProps<T = string> = NativeStackScreenProps<RootStackParamList, T>;
}

// declare type RootStackParamList = {
//   [key: string]: any
// };

// declare type StackProps<T = string> = NativeStackScreenProps<RootStackParamList, T>;
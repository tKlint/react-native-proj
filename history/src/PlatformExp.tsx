import React from 'react'
import { View, Text, Dimensions, PixelRatio, Platform } from 'react-native'

export default function PlatformExp() {
  const { width, height } = Dimensions.get('window');
  const { width: sw, height: sh } = Dimensions.get('screen');
  const px = PixelRatio.get()
  const rPX = PixelRatio.getPixelSizeForLayoutSize(1)
  return (
    <View>
      <Text>
        宽: {width}, 高: {height}
      </Text>
      <Text>
        s宽: {sw}, s高: {sh}
      </Text>
      <Text>DPR: {px }</Text>
      <Text>1dp = {rPX}px</Text>
      <Text>
        {JSON.stringify(Platform.constants)} 
      </Text>
    </View>
  )
}

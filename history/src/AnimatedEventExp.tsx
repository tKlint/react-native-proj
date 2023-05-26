import React from "react";
import { Dimensions, Animated } from "react-native";
import { ScrollView, StyleSheet, View, Text, Image } from "react-native";
import { useRef } from "react";

const { width } = Dimensions.get("window");

export default function AnimatedEventExp() {
  const offsetX = useRef(new Animated.Value(0)).current;
  const imgUris = [
    'http://doc.zwwill.com/yanxuan/imgs/banner-1.jpg',
    'http://doc.zwwill.com/yanxuan/imgs/banner-2.jpg',
    'http://doc.zwwill.com/yanxuan/imgs/banner-1.jpg',
    'http://doc.zwwill.com/yanxuan/imgs/banner-2.jpg',
    'http://doc.zwwill.com/yanxuan/imgs/banner-1.jpg',

  ]
  return (
    <View style={{ position: 'relative' }}>
      <ScrollView
        horizontal
        style={styles.imgStyle}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={10}
        pagingEnabled
        onScroll={Animated.event(
          [{ 
            nativeEvent: {
              contentOffset: {
                x: offsetX,
              },
            }
          }],
          {
            useNativeDriver: false,
          }
        )}
      >
        {imgUris.map((img, idx) => (
          <Animated.Image
            key={idx}
            style={[
              styles.imgStyle,
              {
                opacity: offsetX.interpolate({
                  inputRange: [width * (idx - 1), width * idx, width * idx + width],
                  outputRange: [0, 1, 0],
                }),
                transform: [
                  {
                    rotate: offsetX.interpolate({
                      inputRange: [width * (idx - 1), width * idx, width * idx + width],
                      outputRange: ['-180deg',  '0deg', '180deg']
                    }),
                  }, {
                    scale: offsetX.interpolate({
                      inputRange: [width * (idx - 1), width * idx, width * idx + width],
                      outputRange: [0, 1, 0]
                    }),
                  }
                ]
              },
            ]}
            source={{ uri: img }}
          />
        ))}
        {/* <Animated.Image
          style={[
            styles.imgStyle,
            {
              opacity: offsetX.interpolate({
                inputRange: [0, width],
                outputRange: [1, 0],
              }),
            },
          ]}
          source={{ uri: "http://doc.zwwill.com/yanxuan/imgs/banner-1.jpg" }}
        />
        <Animated.Image
          style={[
            styles.imgStyle,
            {
              opacity: offsetX.interpolate({
                inputRange: [0, width],
                outputRange: [0, 1],
              }),
            },
          ]}
          source={{ uri: "http://doc.zwwill.com/yanxuan/imgs/banner-2.jpg" }}
        /> */}
      </ScrollView>
      <View style={styles.dotContainer}>
        {imgUris.map((img, idx) => (
          <Animated.View style={[styles.dotStyle, {
            width: offsetX.interpolate({
              inputRange: [
                width * (idx - 1),
                width * idx,
                width * (idx + 1),
              ],
              outputRange: [8, 16, 8],
              extrapolateRight: 'clamp',
              extrapolateLeft: 'clamp'
            }),
            opacity: offsetX.interpolate({
              inputRange: [
                width * (idx - 1),
                width * idx,
                width * (idx + 1),
              ],
              outputRange: [0.3, 1, 0.3],
              extrapolateRight: 'clamp',
              extrapolateLeft: 'clamp'
            }),
          }]} key={idx} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imgStyle: {
    height: 200,
    width,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10,
    width: '100%'
  },
  dotStyle: {
    backgroundColor: '#fff',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  }
});

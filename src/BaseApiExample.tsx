import React from 'react'
import { Alert } from 'react-native'
import { Button, View } from 'react-native'

export default function BaseApiExample() {
  function btnHandle1() {
    Alert.alert('提示', '删除后无法恢复', [{
      text: '稍后询问',
      style: "destructive"
    },
      {
        text: '取消',
        onPress(value) {
          console.log('取消成功', value)
        },
        style: "cancel"
      }, {
        text: '确定',
        onPress(value) {
          console.log('删除成功', value)
        },
        style: "default"
      }
    ], {
      
    })
  }
  function btnHandle2() {
    
  }
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Button title='alert 1' onPress={btnHandle1}/>
    </View>
  )
}

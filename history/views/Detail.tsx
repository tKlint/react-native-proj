import React from 'react'
import { Button, Text, View } from 'react-native'

const Detail = (props: StackProps<'Detail'>) =>{
  const { navigation, route } = props;
  const pressHandle = () => {
    navigation.navigate('Home', {
      message: 'ok'
    })
  }
  const setParamsHanle = () => {
    navigation.setParams({
      name: '哥哥真好看'
    })
  }
  return (
    <View>
      <Text>
        this is detail page
      </Text>
      <Text>id: {route.params?.id}</Text>
      <Text>name: {route.params?.name}</Text>
      <Button  title="修改路由参数" onPress={setParamsHanle}/>
      <Button  title="go home" onPress={pressHandle}/>
    </View>
  )
}

export default Detail;
// Detail.displayName = 'detail'

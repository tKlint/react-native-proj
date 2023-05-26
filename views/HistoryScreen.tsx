import { Divider, FlatList, HStack, VStack } from 'native-base';
import React, { useMemo } from 'react'
import { StyleSheet, View, SafeAreaView, Text, FlatListProps } from 'react-native';
import { useAppSelector } from '../hooks/store';

export default function HistoryScreen() {
  const { history, languages } = useAppSelector((state) => state.users)
  const sortHistory = useMemo(() => [...history].reverse(), [history])
  const getLanZN = (to: string) => {
    return languages.find((item) => item.lang === to)
  }
  const renderItem: FlatListProps<typeof history[number]>['renderItem'] = (item) => {
    return (
     <View>
       <HStack style={{ padding: 10 }} key={item.index} justifyContent="space-between">
        <VStack flex={1}>
          <View style={{ flexDirection: 'row' }}>
            <Text>
              原文: 
            </Text>
            <Text>
              <Text>{item.item.txt}</Text>
            </Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
           <Text>
              译文: 
            </Text>
            <Text>
              <Text>{item.item.res}</Text>
            </Text>
          </View>
        </VStack>
        <Text style={{ width: 80, textAlign: 'right' }}>{getLanZN(item.item.to)?.chs}</Text>
      </HStack>
      <Divider />
     </View>
    )
  }
  return (
    <View style={styles.container}>
      <FlatList data={sortHistory} renderItem={renderItem} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
})
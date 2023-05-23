import { Button } from 'native-base';
import React, { useState } from 'react'
import { Pressable, StyleSheet, View, Text, Image } from 'react-native'
import FreeDialog from '../components/FreeDialog';

export default function FreeModalExample() {
  const [isShowModal, setIsShowModal] = useState(false);
  const showModal = () => {
    setIsShowModal(true)
  }
  const closeDialogHandle = () => {
    setIsShowModal(false)
  }
  return (
    <View style={styles.container}>
      <Pressable
        onPress={showModal}
        style={({ pressed }) => {
          return pressed ? [styles.btn, styles.pressBtn] : [styles.btn]
        }}
      >
        <Text style={{ color: '#fff' }}>open Modal</Text>
      </Pressable>
      <FreeDialog isShow={isShowModal} onClose={closeDialogHandle}>
        <View>
          <Image style={styles.banner} source={require('../assets/dialog_bg.png')} resizeMode="cover" />
          <View style={styles.content}>
            <Text style={styles.contentTxt}>这个弹窗好看吗</Text>
            <Text style={styles.p}>听党指挥能打胜仗</Text>
            <Text style={styles.p}>为人民服务</Text>
            <Text style={styles.p}>全世界无产阶级都站了起来!!!</Text>
          </View>
          <Button>GET It</Button>
        </View>
      </FreeDialog>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    padding: 12,
    borderRadius: 12,
    backgroundColor: '#1677ff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: '#0591ff',
    shadowOpacity: 0.3
  },
  pressBtn: {
    backgroundColor: '#0958d9'
  },
  banner: {
    width: '100%',
    height: 155
  },
  content: {
    padding: 10,
    // textAlign: 'center'
    alignItems: 'center'
  },
  contentTxt: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  p: {
    marginTop: 10
  }
})
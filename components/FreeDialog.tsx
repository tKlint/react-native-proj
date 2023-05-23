import { CloseIcon } from "native-base";
import { Dimensions, Pressable, StyleSheet, View } from "react-native"
const { width } = Dimensions.get("window");
const FreeDialog: React.FC<FreeDialogPropsType> = (props) => {
  const { isShow, onClose, children } = props;
  if (!isShow) {
    return null
  }
  const closeModalHandle = () => {
    onClose?.()
  }
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {children}
      </View>
      <Pressable style={styles.closeBtn} onPress={closeModalHandle}>
        <CloseIcon />
      </Pressable>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: width - 100,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden'
  },
  closeBtn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginTop: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default FreeDialog;
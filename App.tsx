import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import Detail from './views/Detail';
import Home, { MyTabs } from './views/Home';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <NavigationContainer>
       {/* <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Detail" component={Detail} />
      </Drawer.Navigator> */}
      <MyTabs />
    </NavigationContainer>
   
  );
}

export default MyDrawer
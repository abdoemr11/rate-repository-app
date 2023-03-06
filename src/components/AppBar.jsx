import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import  theme  from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: Constants.statusBarHeight,
    paddingLeft: 20
    // ...
  },
  color: {
    backgroundColor: theme.colors.appBarBackColor,
    
  },
  text: {
    color: 'white'
  }
  // ...
});
const AppBar = () => {
    const appBarStyle = [
        styles.container,
        styles.color 
        
    ]
  return <View style={appBarStyle}>
    <Pressable ><Text style={styles.text} fontWeight="bold" fontSize="subheading">Repositories</Text></Pressable>
    </View>;
};

export default AppBar;

import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import  theme  from '../theme';
import Text from './Text';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: Constants.statusBarHeight,
    paddingLeft: 20,
  },
  color: {
    backgroundColor: theme.colors.appBarBackColor,
    
  },
  text: {
    color: 'white',
    padding: 10
  },
  scroll: {
  }
  // ...
});
const AppBar = () => {
    const appBarStyle = [
        styles.container,
        styles.color 
        
    ]
  return <View style={appBarStyle}>
    <ScrollView style={styles.scroll} horizontal>
      <Link to={'/'}><Text style={styles.text} fontWeight="bold" fontSize="subheading">Repositories</Text></Link>
      <Link to={'signin'}><Text style={styles.text} fontWeight="bold" fontSize="subheading">Sign In</Text></Link>

    </ScrollView>

    </View>;
};

export default AppBar;

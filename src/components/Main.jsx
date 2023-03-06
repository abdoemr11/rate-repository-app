import Constants from 'expo-constants';
import { Text, StyleSheet, View } from 'react-native';
import theme from '../theme';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: "#e1e4e8"
  },
  background: {
    backgroundColor: "#e1e4e8"
  }
});

const Main = () => {
  const mainStyle = [
    styles.container
  ]
  return (
    <View style={styles.container}>
      <AppBar/>
      <RepositoryList/>
    </View>
  );
};

export default Main;

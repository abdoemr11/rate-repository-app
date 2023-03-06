import Constants from 'expo-constants';
import { Text, StyleSheet, View } from 'react-native';
import { Navigate, Route, Routes } from 'react-router-native';
import theme from './theme';
import AppBar from './components/AppBar';
import RepositoryList from './components/RepositoryList';
import SignIn from './components/SignIn';

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
      <Routes>
        <Route path='/' element={<RepositoryList/>} exact/>
        <Route path='signin' element={<SignIn/>}/>
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
      
    </View>
  );
};

export default Main;

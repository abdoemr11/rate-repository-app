import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import  theme  from '../theme';
import Text from './Text';
import { Link } from 'react-router-native';
import { useEffect, useState } from 'react';
import { useAuthStorage } from '../hooks/useAuthStorage';
import { useApolloClient, useQuery } from '@apollo/client';
import { GET_USER } from '../graphql/queries';

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
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();
    const { loading, error, data } = useQuery(GET_USER);

    const isLoggedIn = loading || !data.me? true: false 
    
    const handleLogout = async ()=> {
      await authStorage.removeAccessToken();
      apolloClient.resetStore()
    }
    return <View style={appBarStyle}>
    <ScrollView style={styles.scroll} horizontal>
      <Link to={'/'}><Text style={styles.text} fontWeight="bold" fontSize="subheading">Repositories</Text></Link>
      {isLoggedIn? 
      <Link to={'signin'}><Text style={styles.text} fontWeight="bold" fontSize="subheading">Sign In</Text></Link>
      :
      <Pressable onPress={handleLogout}><Text style={styles.text} fontWeight="bold" fontSize="subheading">Sign Out</Text></Pressable>

    }
      

    </ScrollView>

    </View>;
};

export default AppBar;

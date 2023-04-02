import { Formik } from 'formik';
import { ActivityIndicator, Pressable, StyleSheet, View } from 'react-native';
import theme from '../theme';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import TextInput from './TextInput';
import * as yup from 'yup'
import useSignIn from '../hooks/useSignIn';
import AuthStorage from '../utils/authStorage';
import { useState } from 'react';
import { useApolloClient } from '@apollo/client';
import { redirect, useNavigate } from 'react-router-native';
import { changeOpacity } from '../utils/styleHelper';

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "username is too short")
    .required("You must provide a valid username"),
  password: yup
    .string()
    .required("You must provide a password to login")
})
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    display: 'flex',
    padding: 10,
    justifyContent: "flex-end"
  },
  button :{
    backgroundColor: theme.colors.primary,
    color: 'white',
    padding: 10,
    textAlign: 'center',
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold
  },
  disabledButton: {
    backgroundColor: changeOpacity(theme.colors.primary, .7)
  },
  errorText: {
    color: theme.colors.error
  }
})
const SignIn = () => {
  const [signIn, logging] = useSignIn();
  const [error, setError] = useState('');
  const navigate = useNavigate()
  const handleLogIn = async(values) => {
    // console.log(values);
    const { username, password } = values;
    try {
      const { data } = await signIn({ username, password });
      console.log(data);
      if (data) {
        const authStorage = new AuthStorage();
        await authStorage.setAccessToken( data.authenticate.accessToken)
        console.log("auth token" , await authStorage.getAccessToken());
        return navigate('/')
      
      }
    } catch (e) {
      console.log(e);
      setError('Invalid username or password');
    } 
  }
  return (
      <Formik 
        initialValues={{username: "", password: ""}}
        onSubmit={handleLogIn}
        validationSchema = {validationSchema}
      >
       {(props)=> {
        return(
          <View style={styles.container}>
            <FormikTextInput name="username" placeholder="Username" />
            <FormikTextInput secureTextEntry name="password" placeholder="Password" />
            <Pressable onPress={props.handleSubmit} 
              disabled={logging}
              style={[
                styles.button,
                logging && styles.disabledButton,
              ]}
            >
              <Text style={styles.button}>
              {logging? "Signing...": "Sign In"}
              </Text>
              </Pressable>
            {error&&<Text style={styles.errorText}>{error}</Text> }

          </View>
        )
       }}
      </Formik>
  );
};

export default SignIn;
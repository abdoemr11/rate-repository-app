import { Formik } from 'formik';
import { Pressable, StyleSheet, View } from 'react-native';
import theme from '../theme';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import TextInput from './TextInput';
import * as yup from 'yup'

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
  }
})
const SignIn = () => {

  const handleLogIn = (values) => {
    console.log(values);
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
          <FormikTextInput name="username" placeholder="Username"/>
          <FormikTextInput secureTextEntry name="password" placeholder="Password"/>
          <Pressable onPress={props.handleSubmit}><Text style={styles.button}>Sign In</Text></Pressable>
        </View>
        )
       }}
      </Formik>
  );
};

export default SignIn;
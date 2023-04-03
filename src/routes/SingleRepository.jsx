import { View, ActivityIndicator, Pressable, Text, StyleSheet, Linking } from "react-native"
import RepositoryItem from "../components/RepositoryItem"
import {useParams} from 'react-router-native'
import { useQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../graphql/queries";
import theme from "../theme";
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
    // disabledButton: {
    //   backgroundColor: changeOpacity(theme.colors.primary, .7)
    // },
    errorText: {
      color: theme.colors.error
    }, 
    text: {
        color: 'white'
    }
  })
const SingleRepository = () => {
    const {repoId} = useParams();
    const {loading, error, data} = useQuery(GET_REPOSITORY, {
        variables: { repositoryId: repoId}
    })
    console.log('result : ', data, loading, error);
    const openUrl = ()=> {
        Linking.openURL(data.repository.url)
    }
    return(
        <View>
        {
        loading?
        <ActivityIndicator size="large" color="#0000ff" />:
        <View>
            <RepositoryItem repository={data.repository}/>
            <Pressable style={styles.button} onPress={openUrl}>
                <Text style={styles.text}>Open In Github</Text>
            </Pressable>
        </View>
        }
        </View>
    )
}

export default SingleRepository;
import { View, ActivityIndicator, Pressable, Text, StyleSheet, Linking, FlatList } from "react-native"
import RepositoryItem from "../components/RepositoryItem"
import {useParams} from 'react-router-native'
import { useQuery } from "@apollo/client";
import { GET_REPOSITORY, GET_REVIEWS } from "../graphql/queries";
import theme from "../theme";
import ReviewItem from "../components/ReviewItem";
import ItemSeparator from "../components/ItemSeprator";
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
      fontWeight: theme.fontWeights.bold,
      justifyContent: 'center',
      alignItems: 'center'
    },
    // disabledButton: {
    //   backgroundColor: changeOpacity(theme.colors.primary, .7)
    // },
    errorText: {
      color: theme.colors.error
    }, 
    text: {
        color: 'white',
        fontWeight: theme.fontWeights.bold
    }
  })
const ReviewsHeader = ({repoData}) => {
  const openUrl = ()=> {
    Linking.openURL(repoData.repository.url)
}
  return (
    <View>
    <RepositoryItem repository={repoData.repository}/>
    <Pressable style={styles.button} onPress={openUrl}>
        <Text style={styles.text}>Open In Github</Text>
    </Pressable>
    </View>
  )
}

const SingleRepository = () => {
    const {repoId} = useParams();
    const {loading, error, data: repoData} = useQuery(GET_REPOSITORY, {
        variables: { repositoryId: repoId}
    })
    const {loading: reviewLoading, error: reviewError, data: reviewsData} = useQuery(GET_REVIEWS, {
      variables: {repositoryId: repoId}
    });
    console.log('review ',reviewsData?.repository.reviews, reviewLoading, reviewError);
    const reviews = !reviewLoading?
      reviewsData?.repository.reviews.edges.map(edge=> edge.node): 
      []


    return(
        <View>
        {
        loading?
        <ActivityIndicator size="large" color={theme.colors.primary} />:

        <FlatList
          data={reviews}
          ListHeaderComponent={()=> <ReviewsHeader repoData={repoData}/>}
          renderItem={(item) => <ReviewItem review={item}/>}
          ItemSeparatorComponent={()=> <ItemSeparator/>}
        />
        }
        </View>
    )
}

export default SingleRepository;
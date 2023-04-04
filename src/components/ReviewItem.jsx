import { View,  Text, StyleSheet } from "react-native"
import theme from "../theme";
import {format} from 'date-fns'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between',
        backgroundColor: 'white'
    },
    circle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 3,
        borderColor:  theme.colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ratingText : {
        color:  theme.colors.primary,
        fontSize: theme.fontSizes.subheading

    },
    infoContainer: {
        marginLeft: 10,
    },
    reviewAuthor: {
        fontSize: theme.fontSizes.subheading,
        fontWeight: theme.fontWeights.bold
    },
    reviewDate: {
        color: theme.colors.textSecondary,
        marginBottom: 10
    }
})
const ReviewItem = ({ review }) => {
    console.log('this is review', review);
    return (
      <View style={styles.container}>
        {/* rating */}
        <View style={styles.circle}>
          <Text style={styles.ratingText}>{review.item.rating}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.reviewAuthor}>{review.item.user.username}</Text>
          <Text style={styles.reviewDate}>{format(new Date(review.item.createdAt), 'dd-MM-yyyy')}</Text>
          <Text>{review.item.text}</Text>
        </View>
      </View>
    )
  };

export default ReviewItem;
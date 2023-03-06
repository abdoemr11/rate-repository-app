import { View, Image, StyleSheet } from "react-native"
import theme from "../theme";
import StatItem from "./StatIemt";
import Text from "./Text";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        backgroundColor: 'white',
        padding: 5

    },
    headerContainer: {
        padding: 10,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap"
    },
    headerImage: {
        margin:0,
        width: 50, height: 50
    },
    headerInfo : {
        marginLeft: 10,
        display: "flex",
        alignItems: 'flex-start',
        padding: 4
        
    },
    headerText: {
        marginBottom: 5
    },
    headerLanguage: {
        backgroundColor: theme.colors.primary,
        color:"white",
        padding: 5

    },
    statsContainer: {
        padding: 10,
        display : "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    }
})
const RepositoryItem = ({repository}) => {
    console.log("here is an item");
    return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Image style={styles.headerImage} source={{ uri: repository.ownerAvatarUrl }}  />
            <View style={styles.headerInfo}>
                <Text style={styles.headerText} fontWeight={"bold"} fontSize="subheading">{repository.fullName}</Text>
                <Text style={styles.headerText} color={"textSecondary"} fontSize="body">{repository.description}</Text>
                <Text  style={styles.headerLanguage}>{repository.language}</Text>
            </View>
        </View>
        <View style={styles.statsContainer}> 

            <StatItem label={"Forks"} value={repository.forksCount}/>
            <StatItem label={"Stars"} value={repository.stargazersCount}/>
            <StatItem label={"Rating"} value={repository.ratingAverage}/>
            <StatItem label={"Reviews"} value={repository.reviewCount}/>


        </View>

    </View>
    )
}

export default RepositoryItem;
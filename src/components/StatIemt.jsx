import { StyleSheet, View } from "react-native"
import Text from "./Text"
import { formatNumber } from "./utlis"

const styles = StyleSheet.create({
    container: {
        display: "flex",
    },
    text: {
        alignSelf: "center"
    }
})
const StatItem = ({label, value}) => {

    return(
        <View style={styles.container}>
            <Text style={styles.text}color="textPrimary" fontWeight={"bold"}>{formatNumber(value)}</Text> 
            <Text color="textSecondary">{label}</Text>
        </View>
    )
}

export default StatItem
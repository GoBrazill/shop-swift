import { Text, View } from "react-native"
import { styles } from "./style"
import { CardCategory } from "../CardCategory"

export const Card = () => {
    return(
        <View>
            <Text style={styles.TextColor}>Esse é o nosso card</Text>

            <View>
                <CardCategory></CardCategory>
            </View>
        </View>
    )
}
import { Image, Text, TextInput, View } from "react-native"
import logotype from '../../assets/icons/logotype.png'
import { styles } from "./style"

export const Login = () => {
    return(
        <View style={styles.view}>
            <Image source={logotype} />

            <Text style={styles.titulo} >faça login e se <Text style={styles.highlight} >surpreenda</Text></Text>

            <TextInput placeholder="com um placeholder"/>
        </View>
        
    )
}
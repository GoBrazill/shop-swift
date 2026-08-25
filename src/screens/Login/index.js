import { Image, Pressable, Text, TextInput, View } from "react-native"
import logotype from '../../assets/icons/logotype.png'
import { styles } from "./style"

export const Login = () => {
    return (
        <View style={styles.containerHome}>
            <Image source={logotype} />

            <View style={styles.contentHome}>
                <Text style={styles.title}>faça login e se <Text style={styles.highlight} >surpreenda</Text></Text>

                <View style={styles.btnWrapper}>
                    <View style={styles.btnWrapper}>
                        <View>
                            <Text style={styles.label}>E-mail: </Text>
                            <TextInput keyboardType="email-address" secureTextEntry={true} style={styles.input} />
                        </View>

                        <View>
                            <Text style={styles.label}>Senha: </Text>
                            <TextInput secureTextEntry={true} style={styles.input} />
                        </View>
                    </View>

                    <Pressable style={styles.btn}><Text style={styles.txtBtn}>Entrar</Text></Pressable>
                </View>

                <Text style={styles.createAccountText}>Não tem uma conta? <Text style={styles.highlightLink}>Criar conta</Text></Text>
            </View>

        </View>

    )
}
import { View, Image, Text, TextInput, Pressable } from "react-native"
import logoType from '../../assets/icons/logotype.png'
import styles, { Title } from "./style"
import { Container } from "./style"

export const SignUp = () => {

    return (
        // <View style={styles.container}>
        //     <Image source={logoType} />

        //     <View>
        //         <Text style={styles.title}>Crie uma conta <Text style={styles.highlight}>e se surpreenda</Text></Text>

        //         <View style={styles.formWrapper}>
        //             <View>
        //                 <Text style={styles.label}>E-mail:</Text>
        //                 <TextInput keyboardType="email-address" style={styles.input}></TextInput>
        //             </View>
        //             <View>
        //                 <Text style={styles.label}>Senha:</Text>
        //                 <TextInput keyboardType="decimal-pad" style={styles.input}></TextInput>
        //             </View>

        //             <View style={styles.btnWrapper}>
        //                 <Pressable style={styles.btn}><Text style={styles.textBtn}>Cadastrar</Text></Pressable>
        //                 <Text style={styles.loginText}>Já tem uma conta? <Text style={styles.highlightLink}>Fazer login</Text></Text>
        //             </View>
        //         </View>

        //     </View>
        // </View>
        <Container>
            <Title>Crie uma conta e se surpreenda</Title>
        </Container>       
    )
}
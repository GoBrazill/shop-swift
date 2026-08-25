import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerHome: {
        paddingHorizontal: 20,
        gap: 50
    },
    contentHome: {
        gap: 40
    },
    btnWrapper: {
        gap: 25
    },
    title: {
        color: '#2D3133',
        fontSize: 40,
        fontWeight: 'bold',
    },
    highlight: {
        color: '#375EE7'
    },
    highlightLink: {
        color: '#375EE7',
        textDecorationLine: 'underline'
    },
    label: {
        fontSize: 16
    },
    input: {
        borderWidth: 1,
        borderRadius: 10
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',

        width: '100%',
        height: 66,

        borderRadius: 10,
        backgroundColor: '#375EE7'
    },
    txtBtn: {
        fontSize: 20,
        fontWeight: 'bold',

        color: '#fff'
    },
    createAccountText: {
        textAlign: 'center',
    }
})
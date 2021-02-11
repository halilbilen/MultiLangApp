import {
    StyleSheet
} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        fontSize: 50,
        marginBottom: 50
    },
    textInputContainer: {
        width: 300,
        height: 50,
        borderWidth: 1,
        marginBottom: 30
    },
    textInput: {
        width: "90%",
        height: "100%",
        marginLeft: 15
    },
    button: {
        width: 300,
        height: 50,
        borderWidth: 1,
        marginBottom: 30,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    changeButton: {
        width: 300,
        height: 50,
        borderWidth: 1,
        marginTop: 100,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    langButton: {
        width: 250,
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 25
    }

});
export default styles;
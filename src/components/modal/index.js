import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native'

export function ModalPassword({ password, handleClose }) {
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Senha gerada</Text>

            <Pressable style={styles.innerPassword}>
                <Text style={styles.text}>{password}</Text>
            </Pressable>

            <View style={styles.buttonArea}>
                <TouchableOpacity style={styles.button} onPress={handleClose}>
                    <Text style={styles.buttonBackText}>Voltar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, styles.buttonSave]}>
                    <Text style={styles.buttonSaveText}>Salvar senha</Text>
                </TouchableOpacity>
            </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "rgba(24, 24, 24, 0.6)",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    content:{
        backgroundColor: "#FFF",
        width: "85%",
        paddingBottom: 24,
        paddingTop: 24,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20
    },
    title:{
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 24
    },
    innerPassword:{
        backgroundColor: "#0e0e0e",
        padding: 15,
        width: "85%",
        borderRadius: 12
    },
    text:{
        color: "#FFF",
        textAlign: "center"
    },
    buttonArea:{
        flexDirection: "row",
        width: "85%",
        marginTop: 8,
        justifyContent: "space-between",
        alignItems: "center"
    },
    button:{
        flex: 1,
        alignItems: "center",
        marginTop: 14,
        marginBottom: 4,
        paddingTop: 12,
        paddingBottom: 12,
    },
    buttonSave:{
        backgroundColor: "#392de9",
        borderRadius: 10
    },
    buttonSaveText:{
        color: "#FFF",
        fontWeight: "bold"
    }
})
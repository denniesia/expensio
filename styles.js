import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FAFB',
        justifyContent: 'space-between',
      
    },
    section: {
        paddingTop: 70,
        flexDirection: 'row',
        padding:30,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    heading: {
        fontSize:28,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    text: {
        fontSize:18,
    },
    endSection: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#edf2f7',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingVertical: 20,
    },
    modal: {
        paddingTop: 70,

        justifyContent: 'center',
        alignItems: 'center'
    },
    
});
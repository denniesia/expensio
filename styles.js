import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e7eaec',
    },
    section: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingHorizontal: 30,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    wrapper: {
        backgroundColor: '#ffff', 
        width: '90%', 
        alignSelf: 'center', 
        borderRadius: 10 
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
        // justifyContent: 'space-evenly',
    },
    modal: {
        paddingTop: 70,
        justifyContent: 'center',
        alignItems: 'center'
    },
    
});
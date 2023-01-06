import { StyleSheet } from 'react-native';
const primaryColorGreen = '#8BC43F';
const secondaryColorGreen = '#1c763b';
const primaryColorOrange = '#f6931e';


export const styles = StyleSheet.create({
    cenetredContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingVertical: 120
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 20
    },
    centeredButton: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },  
    logo : {
        width: 100,
        height: 110,
    },
    logoTitle: {
        marginTop: 1,
        color: '#000',
        fontSize: 30,
        fontWeight: 'bold',
    },
    title: {
        marginTop: 50,
        color: '#000',
        fontSize: 27,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    primaryButton: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 50,
        elevation: 3,
        backgroundColor: primaryColorGreen,
        color: 'white',
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 17,
        width: 170,
        textAlign: 'center',
        marginHorizontal: 'auto',
        marginBottom: 50,
    },
    secondaryButton: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 50,
        elevation: 3,
        backgroundColor: primaryColorOrange,
        color: 'white',
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 17,
        width: 170,
        textAlign: 'center',
        marginHorizontal: 'auto',
        marginBottom: 50,
    },
    bottomWelcome: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        position: 'absolute',
        bottom: 50

    },
    text: {
        color: '#000',
        fontSize: 14,
        marginTop: 4,
    },
    bottomWelcomImage: {
        width: '70%',
        height: 120,
    },
    heading: {
        color: primaryColorGreen,
        fontSize: 24,
        fontWeight: 'bold',
    },
    normalText: {
        color: '#000',
        fontSize: 15,
        marginVertical: 5,
    },
    label: {
        color: '#000',
        fontSize: 16,
        marginVertical: 5,
        fontWeight: 'bold',
    },
    value: {
        color: '#ccc',
        fontSize: 14,
        marginTop: 4,
    },
    buttonTypeValue: {
        paddingHorizontal: 6,
        paddingVertical: 6,
        borderRadius: 50,
        color: primaryColorOrange,
        borderColor: primaryColorOrange,
        borderWidth: 1,
        fontSize: 12.5, 
        marginVertical: 5,
        width: 110,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    textInput: {
        marginTop: 5,
        marginBottom: 10,
        borderRadius: 5,
        color: 'black',
        paddingVertical: 8,
        width: '100%',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        borderStyle: 'solid',
        paddingHorizontal: 15,
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.6)'
    },
    modalView: {
        margin: 20,
        width: 250,
        backgroundColor: "white",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    calendar: {
        backgroundColor: '#fff',
        textHeaderColor: primaryColorGreen,
        textDefaultColor: '#aaa',
        selectedTextColor: '#fff',
        mainColor: primaryColorGreen,
        textSecondaryColor: '#fff',
    }
});

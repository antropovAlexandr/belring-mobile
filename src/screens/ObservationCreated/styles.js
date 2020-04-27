import { StyleSheet } from 'react-native'
import {black02, black087, black06, greenLight, whiteGray} from '../../consts/colors'

export default StyleSheet.create({
    scrollContainer: {
        marginHorizontal: 20,
    },
    container: {
        flex: 1,
        paddingTop: 10,
        paddingBottom: 20,
    },
    titleBlock: {
        paddingVertical: 10,
    },
    title: {
        fontSize: 25,
        lineHeight: 30,
        color: black087,
        fontFamily: 'Lato-Semibold',
        paddingBottom: 7,
    },
    description: {
        color: black06,
        fontFamily: "Roboto",
        fontSize: 14,
        letterSpacing: 0.25,
        lineHeight: 20
    },
    btnContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 10,
    },
    button: {
        width: '100%',
        marginBottom: 17,
    }
});


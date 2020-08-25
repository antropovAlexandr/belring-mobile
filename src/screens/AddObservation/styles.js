import { StyleSheet } from 'react-native'
import {black087, black06, grayMedium} from '../../consts/colors'

export default StyleSheet.create({
    scrollContainer: {
        width: '100%',
    },
    header: {
        paddingVertical: 10,
        paddingLeft: 20,
        borderBottomWidth: 1,
        borderBottomColor: black06,
    },
    headerText: {
        color: black087,
        fontFamily: "Roboto",
        fontSize: 16,
        letterSpacing: 0.5,
        lineHeight: 28,
    },
    container: {
        flex: 1,
        marginLeft: 20,
        marginRight: 15,
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
    dropdown: {
        paddingLeft: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: grayMedium,
    }
});


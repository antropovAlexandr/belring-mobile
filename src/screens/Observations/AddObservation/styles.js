import { StyleSheet } from 'react-native'
import {black02, black087, black06, greenLight, whiteGray} from '../../../consts/colors'

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
    uploadPhoto: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 122,
        width: 122,
        borderColor: black02,
        borderWidth: 1,
        borderRadius: 4,
        borderStyle: 'dashed',
        backgroundColor: whiteGray,
    },
    photo: {
        height: 122,
        width: 122,
    },
    closeBtn: {
        position: 'absolute',
        right:     0,
        top:      0,
        zIndex: 100,
    },
    deleteBtn: {
        alignItems: "flex-end",
    },
    oneMoreRingBtn: {
        marginTop: 5,
    },
    mobileAppText: {
        color: greenLight,
    }
});


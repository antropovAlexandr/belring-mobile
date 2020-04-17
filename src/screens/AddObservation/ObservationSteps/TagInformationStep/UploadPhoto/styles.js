import { StyleSheet } from 'react-native'
import {black02, whiteGray} from '../../../../../consts/colors'

export default StyleSheet.create({
    container: {
        marginHorizontal: 5
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
    }
});


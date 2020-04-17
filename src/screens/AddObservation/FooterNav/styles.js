import { StyleSheet } from 'react-native'
import {blueMediumSecond} from '../../../consts/colors'

export default StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: blueMediumSecond,
        height: 56,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btnContainer: {
        justifyContent: 'center',
    },
    btnLabel: {
        color: 'white',
    }
});


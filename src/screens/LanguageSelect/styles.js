import {StyleSheet} from 'react-native';
import { grayMedium } from '../../consts/colors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        minHeight: '10%',
    },
    buttonsContainer: {
        alignItems: 'center',
        flex: 1,
        paddingTop: 30,
    },
    buttonStyle: {
        marginTop: 20,
        marginBottom: 20,
        width: 250,
        borderWidth: 1,
        borderColor: grayMedium,
    },
});

export {styles};

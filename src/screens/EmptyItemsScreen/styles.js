import {StyleSheet} from "react-native";
import {blue, black06} from '../../consts/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        justifyContent: "flex-end",
        alignContent: "stretch",
        paddingHorizontal: 20,
        minHeight: '15%',
    },
    footer: {
        alignItems: "flex-end",
        flex: 1,
        paddingVertical: 40,
        paddingRight: 35,
    },
    title: {
        color: blue,
        fontFamily: "Lato",
        fontSize: 32,
        fontWeight: "600",
        letterSpacing: 0.24,
        lineHeight: 39,
        marginBottom: 40
    },
    description: {
        color: black06,
        fontFamily: "Roboto",
        fontSize: 14,
        letterSpacing: 0.25,
        lineHeight: 20
    },
    image: {
        height: "100%",
        borderWidth: 1,
        resizeMode: "contain",
    }
});

export default styles;

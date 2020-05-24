import React from 'react'
import {Image, View, TouchableOpacity} from "react-native";
import styles from "../../../styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {grayMedium} from "../../../../../../consts/colors";

const ImagePreview = ({source, onPress, onPressDelete}) => (
    <TouchableOpacity onPress={onPress} style={styles.uploadPhoto}>
        <TouchableOpacity onPress={onPressDelete} style={styles.closeBtn}>
            <Icon name="close-circle" size={20} color={grayMedium} />
        </TouchableOpacity>
        <Image style={styles.photo} source={source} />
    </TouchableOpacity>
);

export default ImagePreview;

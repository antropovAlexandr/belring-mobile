import React from 'react'
import {TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {grayMedium} from "../../../../../consts/colors";
import styles from "../../../styles";

const ImageUploader = ({onPress}) => (
    <TouchableOpacity onPress={onPress} style={styles.uploadPhoto}>
        <Icon name="camera" size={44} color={grayMedium}/>
    </TouchableOpacity>
);

export default ImageUploader;

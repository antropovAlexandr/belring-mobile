import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

import { images } from 'Consts';
import styles, { hitSlop } from './styles';

export default function PasswordIcon({ secureTextEntry, handleShowHidePassword }) {
  return (
    <TouchableOpacity
      onPress={handleShowHidePassword}
      style={styles.showHidePassIcon}
      hitSlop={hitSlop}
      activeOpacity={0.8}
    >
      <Image
        style={styles.inputIcon}
        source={secureTextEntry ? images.login.icEyeShow : images.login.icEyeHide}
      />
    </TouchableOpacity>
  );
}

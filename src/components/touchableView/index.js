import React from 'react';
import {
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
  View,
} from 'react-native';

const defaultProps = {
  borderless: false,
  withRipple: true,
  rippleColor: 'rgba(0, 0, 0, .32)',
  onPress: () => {
  },
};

const TouchableView = (props) => {
  const {
    borderless, rippleColor, onPress,
    children, style, disabled,
  } = { ...defaultProps, ...props };

  if (Platform.OS === 'android') {
    return (
      <TouchableNativeFeedback
        style={ null }
        onPress={ onPress }
        disabled={ disabled }
        background={
          Platform.Version >= 21
            ? TouchableNativeFeedback.Ripple(rippleColor, borderless)
            : TouchableNativeFeedback.SelectableBackground()
        }
      >
        <View style={ style }>
          { props.children }
        </View>
      </TouchableNativeFeedback>
    );
  }

  return (
    <TouchableOpacity
      { ...props }
      onPress={ onPress }
    >
      { children }
    </TouchableOpacity>
  );

};

export default TouchableView;

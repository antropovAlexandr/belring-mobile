import React from 'react';
import { Modal, View, TouchableWithoutFeedback } from 'react-native';
import styles from './style';
import TouchableView from 'Components/touchableView';

const defaultProps = {
  isVisible: false,
  onRequestClose: () => {},
  contentType: 'SMALL_MODAL_VIEW',
  isCloseAnywhere: true,
  closeModal: () => {},
  showClose: true,
  sizeClose: 24,
  colorClose: '#000',
};

const ModalView = (props) => {
  const {
    isVisible, onRequestClose, children, contentType,
    isCloseAnywhere, closeModal, showClose, sizeClose,
    colorClose, modalStyle,
  } = { ...defaultProps, ...props };

  return (
    <Modal
      transparent={true}
      visible={isVisible}
      onRequestClose={onRequestClose}
    >
      <TouchableWithoutFeedback
        disabled={!isCloseAnywhere}
        onPress={() => closeModal()}
      >
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={() => console.log('tap inside modal')}>
            <View
              style={[
                contentType === 'SMALL_MODAL_VIEW' ? styles.smallContainer : styles.bigContainer,
                modalStyle,
              ]}
            >
              {children}
              <CloseButton
                closeModal={closeModal}
                showClose={showClose}
                size={sizeClose}
                color={colorClose}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const CloseButton = (props) => {
  const {
    closeModal, showClose
  } = props;

  if (!showClose) {
    return null;
  }

  return (
    <TouchableView
      onPress={() => closeModal()}
      style={styles.closeButton}
    >
    </TouchableView>
  );
};


export default ModalView;

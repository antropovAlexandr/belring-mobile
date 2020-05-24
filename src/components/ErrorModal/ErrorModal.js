import React, { useState, useCallback, useEffect } from 'react';
import {Dialog, Paragraph, Text, Button, Portal} from 'react-native-paper';
import {useSelector} from "react-redux";
import styles from './styles';
import {appErrorSelector} from "../../selector";

let currentErrorId = null;

const ErrorModal = () => {
    const error = useSelector(appErrorSelector);
   const [visible, setVisible] = useState(false);

   useEffect(() => {
       setVisible(error?.id !== currentErrorId);
   }, [error]);

   const onPressOk = useCallback(() => {
       currentErrorId = error?.id;
       setVisible(false);
   }, []);

   if(!error || !error.message) return null;
  const { message, code } = error;

  return (
      <Portal>
        <Dialog visible={visible} dismissable={false}>
          <Dialog.Title>Error: { code }</Dialog.Title>
          <Dialog.Content>
            <Paragraph>
              <Text style={styles.message}>{message}</Text>
            </Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button mode="text" onPress={onPressOk}>
                OK
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
  );
};

export default ErrorModal;

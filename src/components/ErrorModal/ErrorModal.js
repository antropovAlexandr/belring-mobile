import React, { useState, useCallback, useEffect } from 'react';
import { Dialog, Paragraph, Text, Button } from 'react-native-paper';

import styles from './styles';


const ErrorModal = ({ error, action = () => {} }) => {
   const [visible, setVisible] = useState(false);

   useEffect(() => {
       setVisible(!!error);
   }, [error]);

   const onPressOk = useCallback(() => {
       setVisible(false);
       action();
   }, []);

   if(!error || !error.message) return null;
  const { message, code } = error;

  return (
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
  );
};

export default ErrorModal;

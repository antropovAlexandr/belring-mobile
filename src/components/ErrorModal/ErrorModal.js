import React, { useState } from 'react';
import { Dialog, Paragraph, Text, Button } from 'react-native-paper';

import styles from './styles';


const ErrorModal = ({ error, action = () => {} }) => {
  if (!error) return null;
  const { message, code } = error;
  return (
    <Dialog visible dismissable={false}>
      <Dialog.Title>Error: { code }</Dialog.Title>
      <Dialog.Content>
        <Paragraph>
          <Text style={styles.message}>{message}</Text>
        </Paragraph>
      </Dialog.Content>
      <Dialog.Actions>
        <Button mode="text" onPress={action}>
            OK
        </Button>
      </Dialog.Actions>
    </Dialog>
  );
};

export default ErrorModal;

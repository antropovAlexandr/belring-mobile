import React, { useState } from "react";
import { FAB } from 'react-native-paper';
import { translate } from "../../../i18n";

const Fab = ({ pressAddNewPlace }) => {
  const [isOpen, setIsOpen] = useState(false);

  const actions: Array<ActionType> = [
    { icon: 'map-marker', label: translate("places.addNewPlace"), onPress: pressAddNewPlace},
    { icon: 'binoculars', label: translate("addEditObservation.navHeaderTitleAdd"), onPress: () => console.log('Добавить наблюдение') },
  ];

  return (
      <FAB.Group
        visible
        open={isOpen}
        icon={isOpen ? 'pencil-outline' : 'plus'}
        actions={actions}
        onStateChange={({ open }) => setIsOpen( open )}
      />
  );
};

export default Fab;

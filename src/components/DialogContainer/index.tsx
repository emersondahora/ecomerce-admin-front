import React from 'react';
import { useTransition } from 'react-spring';

import { DialogMessage } from '../../hooks/dialog';
import Dialog from './Dialog';

interface DialogContainerProps {
  messages: DialogMessage[];
}

const DialogContainer: React.FC<DialogContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    (message: DialogMessage) => message.id,
    {
      from: { top: '-120%', opacity: 0 },
      enter: { top: '50%', opacity: 1 },
      leave: { top: '-120%', opacity: 0 },
    },
  );
  return (
    <>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <Dialog message={item} key={key} style={props} />
      ))}
    </>
  );
};

export default DialogContainer;

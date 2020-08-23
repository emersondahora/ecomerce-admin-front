import React, { useCallback } from 'react';
import { FiCheck, FiXCircle, FiX } from 'react-icons/fi';

import { DialogMessage, useDialog } from '../../../hooks/dialog';
import {
  Container,
  Title,
  Message,
  ButtonGroup,
  FixedBackground,
} from './styles';

import Button from '../../Form/Button';

interface DialogProps {
  message: DialogMessage;
  style: Record<string, unknown>;
}

const Dialog: React.FC<DialogProps> = ({ message, style }) => {
  const { removeDialog } = useDialog();

  const confirmHandle = useCallback(() => {
    removeDialog(message.id);
    message.onConfirm();
  }, []);
  return (
    <div>
      <FixedBackground />
      <Container
        type={message.type}
        key={message.id}
        hasdescription={Number(!!message.description)}
        style={style}
      >
        <Title>
          <button type="button" onClick={() => removeDialog(message.id)}>
            <FiXCircle />
          </button>
          <span>{message.title}</span>
        </Title>
        <Message>{message.description && <p>{message.description}</p>}</Message>
        <ButtonGroup>
          <Button
            variant="red"
            onClick={() => removeDialog(message.id)}
            icon={FiX}
          >
            Não
          </Button>
          <Button variant="green" icon={FiCheck} onClick={confirmHandle}>
            Sim
          </Button>
        </ButtonGroup>
      </Container>
    </div>
  );
};

export default Dialog;

import { ReactElement, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface IModal {
  openModal: boolean;
  title: string;
  content: string;
  // buttonText: ReactElement | string;
  handleCloseModal: () => void;
  // children?: JSX.Element;
}

const Modal = (props: IModal) => {
  const { openModal, handleCloseModal, title, content } = props;
  //   visible = false,
  //   title = '',
  //   content = '',
  //   buttonText = '',
  //   children = <div></div>,
  //   onClose,
  // }: IModal) => {
  //   const EscapeDown = ({ key }: KeyboardEvent) => {
  //     if (key === 'Escape') {
  //       onClose();
  //     }
  //   };

  // useEffect(() => {
  //   document.addEventListener('keydown', EscapeDown);
  //   return () => document.removeEventListener('keydown', EscapeDown);
  // });

  // if (!visible) return null;
  // const handleCloseModal(): void {
  // console.log('fsmgvno');
  // }

  return (
    <>
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{content}</DialogContentText>
          <TextField
            autoFocus
            margin='dense'
            id='title'
            label='Title'
            type='text'
            fullWidth
            variant='standard'
          />
          <TextField
            margin='dense'
            id='description'
            label='Description'
            type='text'
            fullWidth
            variant='standard'
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>Cancel</Button>
          <Button onClick={handleCloseModal}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Modal;

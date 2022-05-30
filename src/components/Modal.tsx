import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

interface IModal {
  openModal: boolean;
  title: string;
  content: string;
  isDescr: boolean;
  // requestBody: {
  //   title: string;
  //   description?: string;
  // };

  handleCloseModal: () => void;
  getRequestBody: () => void;
}

const Modal = (props: IModal) => {
  // const [requestBody, setRequestBody] = useState(null);

  const { openModal, handleCloseModal, title, content, isDescr, getRequestBody } = props;
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
            onChange={(event) => console.log(event)}
          />
          <TextField
            margin='dense'
            id='description'
            label='Description'
            type='text'
            fullWidth
            hiddenLabel={isDescr}
            variant='standard'
            onChange={(event) => console.log(event)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>Cancel</Button>
          <Button onClick={getRequestBody}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Modal;

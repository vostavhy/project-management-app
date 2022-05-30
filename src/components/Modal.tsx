import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { getAppiResource } from '../utils/network';
import { getCreds } from '../helpers/auth';

interface IModal {
  openModal: boolean;
  title: string;
  content: string;
  isDescr: boolean;
  isUserId: boolean;
  path: string;
  handleCloseModal: () => void;
}

interface IrequestBody {
  title: string | null;
  description?: string | null;
  userId?: string | null;
}

const Modal = (props: IModal) => {
  const { openModal, handleCloseModal, title, content, isDescr, path, isUserId } = props;

  const [requestBody, setRequestBody] = useState<IrequestBody>({
    title: null,
    description: null,
  });

  if (isDescr) {
    delete requestBody.description;
  }

  const handleСreate = async () => {
    const { id } = getCreds();
    if (isUserId) {
      requestBody.userId = id;
    }
    await addResource();
    setRequestBody({ title: null, description: null });
    handleCloseModal();
  };

  const addResource = async () => {
    await getAppiResource(path, 'POST', requestBody);
  };

  const handleClose = () => {
    setRequestBody({ title: null, description: null });
    handleCloseModal();
  };

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
            required
            variant='standard'
            onChange={(event) =>
              setRequestBody((requestBody) => ({ ...requestBody, title: event.target.value }))
            }
          />
          <TextField
            margin='dense'
            id='description'
            label='Description'
            type='text'
            fullWidth
            required={true}
            disabled={isDescr}
            variant='standard'
            onChange={(event) =>
              setRequestBody((requestBody) => ({ ...requestBody, description: event.target.value }))
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleСreate}>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Modal;

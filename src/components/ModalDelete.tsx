import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface IModal {
  openModal: boolean;
  handleCloseModal: () => void;
  handleAgreeModal: () => void;
}

const ModalDelete = (props: IModal) => {
  const { openModal, handleCloseModal, handleAgreeModal } = props;

  return (
    <>
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Please confirm</DialogTitle>
        <DialogContent>
          <DialogContentText>Do you really want to delete?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>No</Button>
          <Button onClick={handleAgreeModal}>Yes</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ModalDelete;

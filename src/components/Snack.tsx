import { Alert, Snackbar } from '@mui/material';

interface SnackProps {
  isOpen: boolean;
  handleClose: () => void;
  msg: string;
  isError: boolean;
}

export function Snack(props: SnackProps) {
  const { isOpen, handleClose, msg, isError } = props;
  const severity = isError ? 'error' : 'success';
  return (
    <Snackbar open={isOpen} onClose={handleClose} autoHideDuration={5000} message='Note archived'>
      <Alert severity={severity} sx={{ width: '100%' }}>
        {msg}
      </Alert>
    </Snackbar>
  );
}

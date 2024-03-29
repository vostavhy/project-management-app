import { Box, Paper, Typography } from '@mui/material';

export default function WelcomeDescription() {
  return (
    <Box>
      <Paper elevation={2}>
        <Typography variant='h3' p={5} py={2}>
          Simple app to manage your tasks & time.
        </Typography>
        <Typography component='p' variant='h5' p={3} pt={0}>
          This application was developed by RS School students as a part of the final task.
        </Typography>
      </Paper>
    </Box>
  );
}

import { Box, Link, Paper, Typography } from '@mui/material';
import logo from '../static/styles/images/rs_school.svg';

function Footer() {
  return (
    <Paper elevation={12}>
      <Box
        component='footer'
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexWrap: 'wrap',
          minHeight: 60,
        }}
      >
        <Typography>© 2022</Typography>
        <Box sx={{ display: 'flex', gap: 5 }}>
          {['vostavhy', 'RimidalU'].map((name, index) => (
            <Link
              key={index}
              href={`https://github.com/${name}`}
              color='inherit'
              sx={{
                transition: 'all .3s ease-out',
                ':hover': {
                  color: 'primary.main',
                },
              }}
            >
              @{name}
            </Link>
          ))}
        </Box>
        <Typography
          component='a'
          href='https://rs.school/react/'
          sx={{
            height: 60,
            width: 140,
            backgroundImage: `url(${logo})`,
            backgroundRepeat: 'no-repeat',
            transition: 'all .3s ease-out',
            ':hover': {
              filter:
                'brightness(0) saturate(100%) invert(33%) sepia(96%) saturate(1105%) hue-rotate(187deg) brightness(92%) contrast(91%)',
            },
          }}
        ></Typography>
      </Box>
    </Paper>
  );
}

export default Footer;

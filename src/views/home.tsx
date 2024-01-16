import { Box, Typography } from '@mui/material';
import { useUsers } from '../hooks/users';

export function HomeView() {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <h1>Hi!</h1>
      <Typography sx={{ textDecoration: 'green wavy underline overline' }}>
        Do your thing! Remember to ask questions!
      </Typography>
    </Box>
  );
}

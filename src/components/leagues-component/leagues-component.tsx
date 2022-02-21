import { Container, TextField } from '@mui/material';

export function LeaguesComponent() {
  const PLACEHOLDER = 'Поиск';
  return (
    <Container
      sx={{
        backgroundColor: 'aliceblue',
        height: '100vh',
      }}
    >
      <TextField
        id="standard-basic"
        placeholder={PLACEHOLDER}
        variant="standard"
      />
    </Container>
  );
}

import { useState } from 'react';
import { Container, TextField } from '@mui/material';

export function LeaguesComponent() {
  const [search, setSearch] = useState('');
  const PLACEHOLDER = 'Поиск';
  return (
    <Container
      sx={{
        backgroundColor: 'aliceblue',
      }}
    >
      <TextField
        id="outlined-basic"
        placeholder={PLACEHOLDER}
        variant="outlined"
        value={search}
        size="small"
        onChange={event => setSearch(event.target.value)}
        sx={{
          paddingTop: '20px',
        }}
      />
    </Container>
  );
}

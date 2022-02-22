import { useState } from 'react';
import { TextField } from '@mui/material';
import { useGetLeaguesList } from '../../shared/custom-hooks';
import styles from './leagues-component.module.css';
import { LeagueElement } from '../../shared/ui';

export function LeaguesComponent() {
  const [search, setSearch] = useState('');
  const { data, isError } = useGetLeaguesList();
  const PLACEHOLDER = 'Поиск';

  console.log(data, isError);

  return (
    <div className={styles.container}>
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
      <div>
        {data?.competitions.map(item => (
          <LeagueElement countryName={item.area.name} leagueName={item.name} />
        ))}
      </div>
    </div>
  );
}

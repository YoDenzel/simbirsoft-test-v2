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
        size="medium"
        onChange={event => setSearch(event.target.value)}
        sx={{
          margin: '20px 16px',
        }}
      />
      <div className={styles.list_block}>
        {data?.competitions.map(item => (
          <LeagueElement
            key={item.id}
            countryName={item.area.name}
            leagueName={item.name}
          />
        ))}
      </div>
    </div>
  );
}

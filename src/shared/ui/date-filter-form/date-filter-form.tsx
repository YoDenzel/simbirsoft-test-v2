import { DatePicker, LocalizationProvider } from '@mui/lab';
import { TextField, Typography } from '@mui/material';

import DateAdapter from '@mui/lab/AdapterDateFns';
import styles from './date-filter-form.module.css';

type TProps = {
  firstValue: Date | null;
  setFirstValue: (v1: Date | null) => void;
  secondValue: Date | null;
  setSecondValue: (v1: Date | null) => void;
};

export function DateFilterForm({
  firstValue,
  setFirstValue,
  secondValue,
  setSecondValue,
}: TProps) {
  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <div>
        <form className={styles.filterForm}>
          <Typography
            variant="h6"
            sx={{
              paddingTop: '10px',
              paddingRight: '10px',
            }}
          >
            С
          </Typography>
          <DatePicker
            toolbarPlaceholder="дд/мм/гггг"
            value={firstValue}
            onChange={newValue => {
              setFirstValue(newValue);
            }}
            inputFormat="dd/MM/yyyy"
            renderInput={params => (
              <TextField
                {...params}
                sx={{
                  marginBottom: '10px',
                  paddingRight: '10px',
                  paddingTop: '10px',
                }}
              />
            )}
          />
          <Typography
            variant="h6"
            sx={{
              paddingTop: '10px',
              paddingRight: '10px',
            }}
          >
            По
          </Typography>
          <DatePicker
            value={secondValue}
            onChange={newValue => {
              setSecondValue(newValue);
            }}
            inputFormat="dd/MM/yyyy"
            renderInput={params => (
              <TextField {...params} sx={{ paddingTop: '10px' }} />
            )}
          />
        </form>
      </div>
    </LocalizationProvider>
  );
}

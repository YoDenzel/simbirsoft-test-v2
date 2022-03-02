import { DatePicker } from '@mui/lab';
import { TextField, Typography } from '@mui/material';
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
          value={firstValue}
          onChange={newValue => {
            setFirstValue(newValue);
          }}
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
          renderInput={params => (
            <TextField {...params} sx={{ paddingTop: '10px' }} />
          )}
        />
      </form>
    </div>
  );
}

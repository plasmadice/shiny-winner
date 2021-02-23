import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    width: '35ch',
    '& :focus': {
      transition: 'all 1s ease',
      transform: 'scale(1.5)',
      opacity: 0.7,
    },

    '& :hover': {
      transition: 'all 1s ease',
      transform: 'scale(1.5)',
      opacity: 0.7,
    },
  },
}));

const Form = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form>
      <TextField
        className={classes.root}
        id="input-with-icon-textfield"
        placeholder="Enter location..."
        value={value}
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
          autoFocus: true,
        }}
      />
    </form>
  );
};

export default Form;

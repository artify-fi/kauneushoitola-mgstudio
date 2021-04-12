import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import Icon from '@material-ui/core/Icon';
import PhoneIcon from '@material-ui/icons/Phone';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function IconLabelButtons() {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="#000"
        size="small"
        className={classes.button}
        startIcon={<PhoneIcon />}
      >
        (+358) 0400 9790 51
      </Button>
    </div>
  );
}

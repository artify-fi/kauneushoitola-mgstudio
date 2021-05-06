import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import PhoneIcon from '@material-ui/icons/Phone';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function PhoneButton() {
  const classes = useStyles();

  return (
    <div>
      <Fab
        style={{
          backgroundColor: '#ff3f66',
        }}
        color="#ff3f66"
        className={classes.margin}
        aria-label="Client can make an easy call from here just clicking"
      >
        <PhoneIcon style={{ fontSize: '2.4em' }} />
      </Fab>
    </div>
  );
}

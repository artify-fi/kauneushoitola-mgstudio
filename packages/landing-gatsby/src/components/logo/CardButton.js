import React from 'react';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import MapIcon from '@material-ui/icons/Map';

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
      >
        <MapIcon style={{ fontSize: '2.4em' }} />
      </Fab>
    </div>
  );
}

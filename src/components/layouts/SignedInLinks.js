import React, { Fragment } from 'react';
import { Button } from '@material-ui/core';

const SignedInLinks = props => {
  const { profile, signOut } = props;
  const username = profile.username || '';
  return (
    <Fragment>
      <Button onClick={signOut} color="inherit">
        Log out
      </Button>
      <Button color="inherit">{username}</Button>
    </Fragment>
  );
};

export default SignedInLinks;

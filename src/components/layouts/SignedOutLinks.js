import React, { Fragment } from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const SignedOutLinks = () => {
  return (
    <Fragment>
      <Button component={Link} to="/login" color="inherit">
        Login
      </Button>
    </Fragment>
  );
};

export default SignedOutLinks;

import React from 'react';

import { Button, TextField, Paper, Typography, FormHelperText } from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';
import styles from './styles';

import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';

class LoginForm extends React.Component {
  state = { email: '', password: '' };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = () => {
    this.props.signIn(this.state);
  };

  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div style={styles.flexContainer}>
        <Paper style={styles.loginForm}>
          <Typography variant="h5" color="primary">
            Login
          </Typography>
          <TextField
            onChange={this.handleChange}
            id="email"
            label="Email"
            type="text"
            margin="normal"
            autoFocus
            fullWidth
          />
          <br />
          <TextField
            onChange={this.handleChange}
            id="password"
            label="Password"
            type="password"
            margin="normal"
            fullWidth
          />
          <br />
          <Button
            style={styles.loginButton}
            onClick={this.handleSubmit}
            variant="contained"
            color="primary"
            margin="normal"
          >
            Login
          </Button>
          <FormHelperText error>{authError ? authError : null}</FormHelperText>
          <FormHelperText>
            Don't have an accout? Please <Link to="/register">register</Link>.
          </FormHelperText>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};
const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

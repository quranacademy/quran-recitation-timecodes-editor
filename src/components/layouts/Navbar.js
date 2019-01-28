import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

const Navbar = props => {
  const { classes, auth, profile } = props;
  const links = auth.uid ? (
    <SignedInLinks profile={profile} email={auth.email} signOut={props.signOut} />
  ) : (
    <SignedOutLinks />
  );
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow} />
          <Button component={Link} to="/blog" color="inherit">
            Blog
          </Button>
          <Button component={Link} to="/about" color="inherit">
            About
          </Button>
          {links}
        </Toolbar>
      </AppBar>
    </div>
  );
};

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

const NavbarWithStyles = withStyles(styles)(Navbar);

const mapStateToProps = state => {
  return { auth: state.firebase.auth, profile: state.firebase.profile };
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarWithStyles);

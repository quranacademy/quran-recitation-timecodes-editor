import React, { Fragment, Component } from "react";
import { ListItem, ListItemSecondaryAction, ListItemText, IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

import Form from "./Form";

export class PostListItem extends Component {
  state = { editMode: false };

  toggleEditMode = () => {
    this.setState({ editMode: !this.state.editMode });
  };

  render() {
    return (
      <Fragment>
        {!this.state.editMode ? (
          <ListItem divider>
            <ListItemText primary={this.props.post.title} />
            <ListItemSecondaryAction>
              <IconButton aria-label="Edit" onClick={this.toggleEditMode}>
                <EditIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ) : (
          <Form
            onCancel={this.toggleEditMode}
            data={{
              id: this.props.post.id,
              title: this.props.post.title,
              text: this.props.post.text
            }}
          />
        )}
      </Fragment>
    );
  }
}

export default PostListItem;

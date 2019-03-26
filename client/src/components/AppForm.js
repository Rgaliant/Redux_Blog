import React from 'react';
import { connect, } from 'react-redux'
import { updateApp, addApp, } from '../reducers/apps'
import { Form, } from 'semantic-ui-react';

class AppForm extends React.Component {
  initialState = {
    title: '',
    body: '',
    category: '',
    author: '',
  };

  state = { ...this.initialState };

  componentDidMount() {
    if (this.props.id)
      this.setState({ ...this.props, });
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const app = { ...this.state, };
    const { closeForm, dispatch, } = this.props;
    const func = this.props.id ? updateApp : addApp;
    dispatch(func(app));
    closeForm();
  }

  render() {
    const { title, body, category, author, } = this.props;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name="title"
          required
          defaultValue={title}
          onChange={this.handleChange}
          label="Title"
        />
        <Form.Input
          name="category"
          defaultValue={category}
          onChange={this.handleChange}
          label="Category"
        />
        <Form.Input
          name="author"
          defaultValue={author}
          onChange={this.handleChange}
          label="Author"
        />
        <Form.Input
          name="body"
          defaultValue={body}
          onChange={this.handleChange}
          label="Body"
        />
        <Form.Button>Save</Form.Button>
      </Form>
    )
  }
}

export default connect()(AppForm);
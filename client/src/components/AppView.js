import React from 'react';
import { connect } from 'react-redux';
import { Header, Image, Container, Table, Button, Tab, } from 'semantic-ui-react';
import { Link, } from 'react-router-dom';
import AppForm from './AppForm';
import { deleteApp, } from "../reducers/apps";

class AppView extends React.Component {
  state = { showForm: false, };

  toggleForm = () => {
    this.setState(state => {
      return { showForm: !state.showForm, };
    })
  }

  handleDelete = () => {
    const { app, dispatch, history: { push, }, } = this.props;
    dispatch(deleteApp(app.id));
    push("/apps");
  }

  render() {
    const { showForm, } = this.state;
    const { app = {}, } = this.props;

    return (
      <Container>
        <Link to="/apps">View All Blogs</Link>
        <Button onClick={this.toggleForm}>
          { showForm ? 'Cancel' : 'Edit' }
        </Button>
        <Button onClick={this.handleDelete}>
          Delete
        </Button>
        { showForm ?
          <AppForm {...app} closeForm={this.toggleForm} />
          :
          <div>
            <Header as="h3" textAlign="center">{app.name}</Header>
            <Table definition>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell />
                  <Table.HeaderCell />
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>Title</Table.Cell>
                  <Table.Cell>{app.title}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Author</Table.Cell>
                  <Table.Cell>{app.author}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Post</Table.Cell>
                  <Table.Cell>{app.body}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Category</Table.Cell>
                  <Table.Cell>{app.category}</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
        }
      </Container>
    )
  }
}

const mapStateToProps = (state, props) => {
  return { app: state.apps.find(a => a.id === parseInt(props.match.params.id)) };
}

export default connect(mapStateToProps)(AppView);
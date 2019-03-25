import React from 'react';
import AppForm from "./AppForm";
import { connect, } from "react-redux";
import { getApps, } from "../reducers/apps";
import { Link, } from "react-router-dom";
import { Container, Header, Card, Image, Button, } from "semantic-ui-react";

class Apps extends React.Component {
  state = { showForm: false, };

  componentDidMount() {
    this.props.dispatch(getApps());
  }

  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm, };
    });
  }

  apps = () => {
    return this.props.apps.map( app => 
      <Card key={app.id}>
        <Image src={app.logo} />
        <Card.Content>
          <Card.Header>
            { app.name }
          </Card.Header>
          <Card.Meta>
            <span>
              { app.author }
            </span>
          </Card.Meta>
          <Card.Description>
            { app.category }
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Link to={`/apps/${app.id}`}>
            View App
          </Link>
        </Card.Content>
      </Card>
    )
  }

  render() {
    const { showForm, } = this.state;

    return (
      <Container>
        <Header as="h3" textAlign="center">Apps</Header>
        <Button onClick={this.toggleForm}>
          { showForm ? "Hide Form" : "Show Form" }    
        </Button>
        { showForm ? 
          <AppForm closeForm={this.toggleForm} />
            :
          <Card.Group itemsPerRow={4}>
            { this.apps() }
          </Card.Group> 
        }
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    apps: state.apps,
  }
}

export default connect(mapStateToProps)(Apps);

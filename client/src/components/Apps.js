import React from 'react';
import AppForm from "./AppForm";
import SidebarNav from './Sidebar'
import { connect, } from "react-redux";
import { getApps, } from "../reducers/apps";
import { Link, } from "react-router-dom";
import { Container, Header, Card, Image, Button, Sidebar } from "semantic-ui-react";

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
      <Card raised key={app.id} style={{fontFamily: "Charter"}}>
        <Image src={app.logo} />
        <Card.Content>
          <Card.Description>
          <img src='https://picsum.photos/700/200/?random' alt='' style={{width: '100%'}} />
          </Card.Description>
          <br />
          <Card.Header style={{textAlign: "left", fontSize: "30px", fontFamily: "kievit"}}>
            { app.title }
          </Card.Header>
          <Card.Description>
            { app.body }
          </Card.Description>
          <span>
            <Card.Meta style={{textAlign: "right"}}> 
             { app.category }
            </Card.Meta>
          </span>
          <Card.Meta>
            <span>
              By: { app.author }
            </span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Link to={`/apps/${app.id}`}>
            View Post
          </Link>
        </Card.Content>
      </Card>
    )
  }

  render() {
    const { showForm, } = this.state;

    return (
      <div>
      <SidebarNav />
        <Container>
          
          {/* <Button onClick={this.toggleForm}>
            { showForm ? "Hide Form" : "Show Form" }    
          </Button>
          { showForm ? 
            <AppForm closeForm={this.toggleForm} />
              : */}
            <Card.Group itemsPerRow={1}>
              { this.apps() }
            </Card.Group> 
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    apps: state.apps,
  }
}

export default connect(mapStateToProps)(Apps);

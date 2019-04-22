import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { Button, Table } from 'semantic-ui-react';

import { getUsersSaga } from '../../actions/gitHubUsers';

import styles from './styles';

class Home extends Component {
  constructor() {
    super();
    this.handleBtnOnClick = this.handleBtnOnClick.bind(this);
  }

  handleBtnOnClick() {
    this.props.getUsersSaga();
  }

  render() {
    const { users } = this.props;
    return (
      <div style={styles.container}>
        {users.length > 0
          && (
          <Table
            striped
          >
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Id</Table.HeaderCell>
                <Table.HeaderCell>Employee Name</Table.HeaderCell>
                <Table.HeaderCell>Detail</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {users.map(({
                id,
                employee_name
              }, i) => (
                <Table.Row key={i}>
                  <Table.Cell>{id}</Table.Cell>
                  <Table.Cell>{employee_name}</Table.Cell>
                  <Table.Cell> <Link to={"github-users-detail/"+id}>Modus Create</Link></Table.Cell>
                </Table.Row>))}
            </Table.Body>
          </Table>
          )
        }
        <Button
          color="teal"
          onClick={this.handleBtnOnClick}
        >
          Load Github users
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.gitHubUserReducer.users
});

const mapDispatchToProps = dispatch => ({
  getUsersSaga: () => dispatch(getUsersSaga())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

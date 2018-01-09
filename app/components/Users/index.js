import React from 'react';
import UsersList from 'components/UsersList';
import AddUser from 'components/AddUser';

export default class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          name: 'Pasha',
          id: 1,
        },
        {
          name: 'Sasha',
          id: 2,
        },
      ]
    };

    this.addUser = this.addUser.bind(this);
  }

  addUser(userName) {
    this.setState((state) => {
      const newUsers = state.users.concat([{
        name: userName,
        id: Math.random(),
      }]);

      return {
        users: newUsers,
      }
    })
  }

  render() {
    return (
      <div>
        <AddUser addUser={this.addUser} />
        <UsersList users={this.state.users} />
      </div>
    );
  }
}

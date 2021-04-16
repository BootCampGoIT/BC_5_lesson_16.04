import React, { Component } from "react";
import { addGroup, deleteGroup } from "../../redux/groups/groupsActions";
import { connect } from "react-redux";

class GroupsForm extends Component {
  state = {
    groupName: "BootCamp 5",
    courses: [],
    tutors: [],
  };

  addTutorInGroup = (tutor) => {
    this.setState((prev) => ({ tutors: [...prev.tutors, tutor] }));
  };

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    if (
      this.props.groups.find((item) =>
        item.groupName.includes(this.state.groupName)
      )
    ) {
      alert(`${this.state.groupName} already exist!`);
      return;
    }
    this.props.addGroup(this.state);
  };

  render() {
    const { groupName } = this.state;
    return (
      <>
        <h2>GroupForm</h2>
        <form onSubmit={this.onHandleSubmit}>
          <label>
            Name:
            <input
              type='text'
              name='groupName'
              value={groupName}
              onChange={this.onHandleChange}
            />
          </label>
          <ul>
            {this.props.tutors.map((item) => (
              <li>
                {item.name}
                <button onClick={() => this.addTutorInGroup(item.name)}>
                  Add
                </button>
              </li>
            ))}
          </ul>
          <button type='submit'>Save group</button>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { groups: state.groups, tutors: state.tutors.items };
};

const mapDispatchToProps = { addGroup, deleteGroup };

export default connect(mapStateToProps, mapDispatchToProps)(GroupsForm);

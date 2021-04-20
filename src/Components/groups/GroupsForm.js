import React, { Component } from "react";
import { connect } from "react-redux";
import { resetError } from "../../redux/groups/groupsActions";
import { addGroupOperation } from "../../redux/groups/groupsOperations";

class GroupsForm extends Component {
  state = {
    groupName: "",
  };

  componentDidUpdate(prevProps, prevState) {
    // if (prevProps.error !== this.props.error) {
    //   setTimeout(()=>{
    //     this.props.resetError();
    //   }, 3000)
    // }
  }

  onHandleChange = (e) => {
    // this.props.error && this.props.resetError();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    this.props.addGroup(this.state);
    this.setState({ groupName: "" });
  };

  render() {
    const { groupName } = this.state;
    return (
      <>
        <h2>GroupForm</h2>
        <p>
          {this.props.error ||
            (this.props.isLoading && "...loading") ||
            "No problem"}
        </p>
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
          {/* <ul>
            {this.props.tutors.map((item) => (
              <li>
                {item.name}
                <button onClick={() => this.addTutorInGroup(item.name)}>
                  Add
                </button>
              </li>
            ))}
          </ul> */}
          <button type='submit'>Save group</button>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    error: state.groups.error,
    isLoading: state.groups.isLoading,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addGroup: (group) => {
      dispatch(addGroupOperation(group));
    },
    resetError: () => {
      dispatch(resetError());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupsForm);

import React, { Component } from "react";
import { connect } from "react-redux";
import { addTutor } from "../../redux/tutors/tutorsActions";

const initialState = { name: "", position: "" };

class TutorForm extends Component {
  state = { ...initialState };

  onHandleSubmit = (e) => {
    e.preventDefault();
    this.props.addTutor(this.state);
    this.setState({ ...initialState });
  };

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { name, position } = this.state;
    return (
      <>
        <h2>TutorForm</h2>
        <form onSubmit={this.onHandleSubmit}>
          <label>
            Name
            <input
              type='text'
              name='name'
              value={name}
              onChange={this.onHandleChange}
            />
          </label>
          <label>
            Position
            <input
              type='text'
              name='position'
              value={position}
              onChange={this.onHandleChange}
            />
          </label>
          <button type='submit'>Save</button>
        </form>
      </>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     prop: state.prop
//   }
// }

const mapDispatchToProps = {
  addTutor,
};

export default connect(null, mapDispatchToProps)(TutorForm);

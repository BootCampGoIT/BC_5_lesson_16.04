import React from "react";
import { connect } from "react-redux";
import { deleteTutor, setFilter } from "../../redux/tutors/tutorsActions";

const TutorsList = ({ tutors, deleteTutor, filter, setFilter }) => {
  const onHandleDelete = (e) => {
    const { id } = e.target;
    deleteTutor(id);
  };
  return (
    <>
      <h2>TutorsList</h2>
      <label>
        Filter
        <input
          type='text'
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </label>
      <ul>
        {tutors.map((tutor) => (
          <li>
            <p>{tutor.name}</p>
            <p>{tutor.position}</p>
            <button type='button' id={tutor.id} onClick={onHandleDelete}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    tutors: state.tutors.items.filter((item) =>
      item.name.toLowerCase().includes(state.tutors.filter.toLowerCase())
    ),
    filter: state.tutors.filter,
  };
};

const mapDispatchToProps = {
  deleteTutor,
  setFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(TutorsList);

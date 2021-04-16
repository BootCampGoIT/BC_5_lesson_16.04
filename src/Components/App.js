import React from "react";
import GroupsForm from "./groups/GroupsForm";
import TutorForm from "./tutors/TutorForm";
import TutorsList from "./tutors/TutorsList";

const App = () => {
  return (
    <>
      <h2>Redux</h2>
      <GroupsForm />
      <TutorForm />
      <TutorsList />
    </>
  );
};

export default App;

import { useState } from "react";

function Person() {
  const [person, setPerson] = useState({
    firstName: "Margulan",
    lastName: "Baizhakyp",
    age: 21,
  });

  const handleIncreaseAge = () => {
    console.log("in handleIncreaseAge (before setPerson call): ", person);
    setPerson({ ...person, age: person.age + 1 });
    console.log("in handleIncreaseAge (after setPerson call): ", person);
  };

  const handleFirstNameChange = (e) => {
    setPerson({ ...person, firstName: e.target.value });
  };

  const handleLastNameChange = (e) => {
    setPerson({ ...person, lastName: e.target.value });
  };

  console.log("during render: ", person);

  return (
    <>
      <h1>
        {person.firstName} {person.lastName}
      </h1>
      <input
        type="text"
        placeholder="First name"
        value={person.firstName}
        onChange={handleFirstNameChange}
      />
      <input
        type="text"
        placeholder="Last name"
        value={person.lastName}
        onChange={handleLastNameChange}
      />
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  );
}

export default Person;

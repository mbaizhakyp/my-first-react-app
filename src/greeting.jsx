function Greeting() {
  const animals = ["Lion", "Cow", "Snake", "Lizard", "Dog", "Cat"];
  const animalsList = animals.map((animal) => <li key={animal}>{animal}</li>);

  return (
    <div>
      <h1>Animals: </h1>
      <ul>{animalsList}</ul>
    </div>
  );
}
export default Greeting;

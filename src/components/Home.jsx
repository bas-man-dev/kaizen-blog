import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("Bas");
  const [age, setAge] = useState(29);
  const handleClick = () => {
    setName("Bazza");
    setAge(30)
  };

  return (
    <div className="home">
      <h2>Home Page</h2>
      <p>{name} is { age } years old</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;

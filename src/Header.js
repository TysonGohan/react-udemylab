import reactCoreConcepts from "./assets/react-core-concepts.png";
const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  const randomNum = Math.floor(Math.random() * (max + 1));
  console.log(randomNum);
  return randomNum;
}

const Header = () => {
  return (
    <header>
      <img src={reactCoreConcepts} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[genRandomInt(3) - 1]} React concepts you will need
        for almost any app you are going to build!
      </p>
    </header>
  );
};

export { Header };

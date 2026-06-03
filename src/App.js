import Header from "./components/Header";
import Banner from "./components/Banner";

function App() {

  const navLinks = [
    { index: 0, name: "Home", url: "#" },
    { index: 1, name: "About", url: "#" },
    { index: 2, name: "Gallery", url: "#" },
    { index: 3, name: "Contact", url: "#" }
  ];

  return (
    <>
      <Header navLinks={navLinks} />

      <Banner 
        title="Be creative"
        text="Hi My name is Harman and i am making this assignment for my react coures by using the react setup skills. here i attached some photos of famouse cars which i really like."
        primaryText="Primary"
        secondaryText="Secondary"
      />
    </>
  );
}

export default App;
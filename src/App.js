import Header from "./components/Header";


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
    </>
  );
}

export default App;
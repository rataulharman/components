import Header from "./components/Header";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {

  const navLinks = [
    { index: 0, name: "Home", url: "#" },
    { index: 1, name: "About", url: "#" },
    { index: 2, name: "Gallery", url: "#" },
    { index: 3, name: "Contact", url: "#" }
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Lamborghini",
      poster: "https://images.unsplash.com/photo-1630312465536-5c6b1f76dc3f?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      title: "Porsche",
      poster: "https://images.unsplash.com/photo-1614162698829-831e2a7ca28c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvcmNoZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      id: 3,
      title: "Audi",
      poster: "https://images.unsplash.com/photo-1540066019607-e5f69323a8dc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGF1ZGl8ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 4,
      title: "BMW",
      poster: "https://images.unsplash.com/photo-1607853554439-0069ec0f29b6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym13fGVufDB8fDB8fHww"
    }
  ];

  return (
    <>
      <Header navLinks={navLinks} />

      <Banner 
        title="Be creative"
        text="Hi my name is Harman and I am making this assignment for my React course. Here I have added some pictures of famous cars that I really like and want to by in future."
        primaryText="Primary"
        secondaryText="Secondary"
      />

      <Gallery items={galleryItems} />

      <Footer />
    </>
  );
}

export default App;
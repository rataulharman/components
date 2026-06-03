function Gallery(props) {
  return (
    <section className="gallery">
      <div className="container gallery-row">

        {props.items.map(item => (
          <div key={item.id} className="card">
            <img src={item.poster} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Gallery;
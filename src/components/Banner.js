
import Button from "./Button";

function Banner(props) {
  return (
    <section className="banner">
      <div className="container">

        <h2>{props.title}</h2>
        <p>{props.text}</p>

        <div className="banner-buttons">
          <Button text={props.secondaryText} type="secondary" />
          <Button text={props.primaryText} type="primary" />
        </div>

      </div>
    </section>
  );
}

export default Banner;

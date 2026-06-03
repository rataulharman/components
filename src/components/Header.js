function Header(props) {
  return (
    <header>
      <div className="container flex">
        <h1>React</h1>

        <nav>
          {props.navLinks.map(link => (
            <a key={link.index} href={link.url}>
              {link.name}
            </a>
          ))}
        </nav>

      </div>
    </header>
  );
}

export default Header;
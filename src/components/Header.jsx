function Header({ name, themeColor }) {
  return (
    <header className="hero" id="top">
      <p className="hero__eyebrow">
        <span className="hero__eyebrow-token">const</span> role ={' '}
        <span className="hero__eyebrow-string">'B.Tech CE Student'</span>;
      </p>
      <h1 className="hero__name" style={{ color: themeColor }}>
        {name}
      </h1>
      <p className="hero__tagline">
        Building interfaces, one component at a time.
      </p>
      <div className="hero__meta">
        <span className="chip">React</span>
        <span className="chip">Vite</span>
        <span className="chip">JavaScript</span>
      </div>
    </header>
  );
}

export default Header;

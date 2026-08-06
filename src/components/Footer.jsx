function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="statusbar">
      <div className="statusbar__side">
        <span className="statusbar__item">⎇ main</span>
        <span className="statusbar__item">✓ 0 problems</span>
      </div>
      <div className="statusbar__side statusbar__side--right">
        <span className="statusbar__item">omjoshi.iimun@gmailcom</span>
       
        <span className="statusbar__item">© {year}</span>
      </div>
    </footer>
  );
}

export default Footer;

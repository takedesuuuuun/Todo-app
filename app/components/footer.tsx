import "./footer.css"

export function Footer() {

  return(
    <footer>
      <p>takedesuuuuun</p>
      
      <div className="link">
        <a
          href="https://github.com/takedesuuuuun/Todo-app"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <img src="../public/GitHub_Invertocat_Black.png" alt="GitHub" />
        </a>

        <a
          href="https://portfolio-takedesuuuuun.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Portfolio"
        >
          Portfolio
        </a>
      </div>
      
      <p><small>&copy; 2026 takedesuuuuun</small></p>
    </footer>
  );
}
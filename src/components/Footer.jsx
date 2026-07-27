import "../styles/Footer.css"; // or whatever your CSS file is named

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} CareerPilot AI. All rights reserved.</p>
    </footer>
  );
}

// MAKE SURE THIS LINE IS AT THE BOTTOM:
export default Footer;
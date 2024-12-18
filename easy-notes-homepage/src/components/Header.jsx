function Header() {
    return (
      <header style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px", background: "#eaeaea" }}>
        <div>Easy Notes</div>
        <nav>
          <a href="#">About us</a>
          <a href="#">Contact</a>
          <a href="#">Help</a>
          <a href="#">Support</a>
        </nav>
        <div>
          <button>Log in</button>
          <button>Sign up</button>
        </div>
      </header>
    );
  }
  
  export default Header;
  



      function Header() {
    return (
        <header style={{
            backgroundColor: "#e6e6e6",
            padding: "1rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            <h1>Easy Notes</h1>
            <nav>
                <ul style={{
                    display: "flex",
                    listStyleType: "none",
                    gap: "1rem"
                }}>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#help">Help</a></li>
                    <li><a href="#support">Support</a></li>
                    <li><button style={{marginRight: "0.5rem"}}>Log In</button></li>
                    <li><button>Sign Up</button></li>
                </ul>
            </nav>
        </header>
    );
}



export default Header;


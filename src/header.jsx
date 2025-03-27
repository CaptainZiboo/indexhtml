import "./style/header.css"


function Header() {
    return (
        <div className="header">
            <li>
                <a href="../index.html">
                    <h2>Home</h2>
                </a>
            </li>
            <li>
                <a href="../pants.html">
                    <h2>Pantalon</h2>
                </a>
            </li>
            <li>
                <a href="../t_shirt.html">
                    <h2>T-shirt</h2>
                </a>
            </li>

        </div>
    )
}

export default Header

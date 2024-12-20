import GlobePng from "/earth.png"

function Header() {
    return (
        <header>
           <img src= { GlobePng } alt="Globe Icon" />
           <span>my trevel jurnal</span>
        </header>
    )
}

export default Header;
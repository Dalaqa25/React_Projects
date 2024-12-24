import earthImg from '/earth.png'

function Header() {
  return (
    <div className="headerContainer">
        <header>
            <img src={ earthImg } alt="" />
            <span>My trevel jurnal</span>
        </header>
    </div>
  );
}

export default Header;
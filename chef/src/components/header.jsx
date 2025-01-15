import chef from '../assets/chef.png';

function Header() {
  return (
    <header>
      <img src={ chef } alt="chef img" />
      <span>Chef Claude</span>
    </header>
  );
}

export default Header;
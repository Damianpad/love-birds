import logo from '../assets/love_birds.png'

const Navigation = () => {
  return (
    <>
      <img src={logo} />

      <ul>
        <li>
          <a href="#">Planning Tools</a>
        </li>
        <li>
          <a href="#">Vendors</a>
        </li>
        <li>
          <a href="#">Registry</a>
        </li>
      </ul>

      <button>Login</button>
      <button>Sign up</button>
    </>
  );
};

export default Navigation;

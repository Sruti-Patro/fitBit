const Nav = () => {
    return (
      <nav className=" bg-orange-700 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">Community Name</h1>
          <ul className="flex space-x-4">
            <li><a href="#about" className="text-white">About</a></li>
            <li><a href="#events" className="text-white">Events</a></li>
            <li><a href="#join" className="text-white">Join Us</a></li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Nav;
  
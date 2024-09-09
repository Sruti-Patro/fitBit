const ComNavbar = () => {
    return (
      <nav className=" bg-orange-700 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">Fitness Dashboard</h1>
          <ul className="flex space-x-4">
            <li><a href="#overview" className="text-white">Overview</a></li>
            <li><a href="#progress" className="text-white">Progress</a></li>
            <li><a href="#workouts" className="text-white">Workouts</a></li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default ComNavbar;
  
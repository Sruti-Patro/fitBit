const Workouts = () => {
    return (
      <section id="workouts" className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Recent Workouts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-semibold">Morning Run</h3>
              <p className="text-gray-700">Distance: 5km</p>
              <p className="text-gray-700">Time: 30 mins</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-semibold">Yoga Session</h3>
              <p className="text-gray-700">Duration: 45 mins</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-semibold">Cycling</h3>
              <p className="text-gray-700">Distance: 15km</p>
              <p className="text-gray-700">Time: 50 mins</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Workouts;
  
const Overview = () => {
    return (
      <section id="overview" className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Fitness Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-semibold">Steps</h3>
              <p className="text-gray-700">10,500</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-semibold">Calories Burned</h3>
              <p className="text-gray-700">650 kcal</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-semibold">Active Minutes</h3>
              <p className="text-gray-700">45 mins</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Overview;
  
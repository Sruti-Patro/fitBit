const Progress = () => {
  return (
    <section id="progress" className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Progress Tracking
        </h2>
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Weekly Goal</h3>
          <div className="bg-gray-200 rounded-full h-4 mb-4">
            <div className="bg-green-600 h-4 rounded-full w-3/4"></div>
          </div>
          <p className="text-gray-700">
            You have completed 75% of your weekly goal!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Progress;

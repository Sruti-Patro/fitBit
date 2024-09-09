import femaleUser from "../../Assets/femaleUser.png"
import maleUser from "../../Assets/maleUser.png"

export default function About() {

    const contributors = [
        {
            name: "Chinmoy Srichandan",
            role: "CSE",
            image : maleUser,
            },
        {
            name: "Smita Rani Sahoo",
            role: "CSE",
            image: femaleUser,
        },
        {
            name: "Prajwal Archarya",
            role: "ECE",
            image: maleUser,
        },
        {
            name: "Pragnyant Bandan",
            role: "CEN",
            image: maleUser,
        },
        {
            name: "Asis Swain",
            role: "CEN",
            image: maleUser,
        },
        {
            name: "Sruti Patro",
            role: "CST",
            image: femaleUser,
        },
    ];

    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="Fitness Image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Boost Your Fitness with Innovative Solutions
                        </h2>
                        <p className="mt-6 text-gray-600">
                            Our fitness platform is designed to help you stay active, track your progress, and achieve your fitness goals efficiently. Whether you're a beginner or an experienced athlete, our solution caters to all fitness levels.
                        </p>
                        <p className="mt-4 text-gray-600">
                            With real-time data tracking, personalized workout plans, and a supportive community, we make fitness engaging and accessible. Join us in our mission to promote a healthier lifestyle and inspire others to stay fit.
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-12">
                    <h3 className="text-2xl text-gray-900 font-bold mb-8 text-center">Meet the Team</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {contributors.map((contributor, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                                <img
                                    className="w-24 h-24 rounded-full mx-auto mb-4"
                                    src={contributor.image}
                                    alt={contributor.name}
                                />
                                <h4 className="text-xl font-bold text-gray-900">{contributor.name}</h4>
                                <p className="text-gray-600">{contributor.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
        </div>
    );
}

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
              Project Management Made Easy
            </span>

            <h1 className="text-5xl md:text-6xl font-bold mt-6 leading-tight">
              Manage Your Projects
              <span className="text-blue-600"> Smarter</span>
            </h1>

            <p className="text-gray-600 mt-6 text-lg">
              Plan, organize, track progress, and collaborate with your team
              efficiently using our modern project management platform.
            </p>

            <div className="flex gap-4 mt-8">
              <Link
                to="/projects"
                className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
              >
                View Projects
              </Link>

              <Link
                to="/about"
                className="border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-100 transition"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800"
              alt="Project Management"
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-3xl font-bold text-blue-600">100+</h2>
            <p className="text-gray-600">Projects Completed</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-3xl font-bold text-green-600">50+</h2>
            <p className="text-gray-600">Active Teams</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-3xl font-bold text-purple-600">1000+</h2>
            <p className="text-gray-600">Tasks Managed</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-3xl font-bold text-red-600">99%</h2>
            <p className="text-gray-600">Client Satisfaction</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Powerful Features
          </h2>

          <p className="text-gray-600 mt-4">
            Everything you need to manage projects efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
            <div className="text-4xl">📋</div>
            <h3 className="text-2xl font-semibold mt-4">
              Project Tracking
            </h3>
            <p className="text-gray-600 mt-3">
              Track project progress and stay updated in real time.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
            <div className="text-4xl">👥</div>
            <h3 className="text-2xl font-semibold mt-4">
              Team Collaboration
            </h3>
            <p className="text-gray-600 mt-3">
              Collaborate seamlessly with your teammates.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
            <div className="text-4xl">📊</div>
            <h3 className="text-2xl font-semibold mt-4">
              Analytics
            </h3>
            <p className="text-gray-600 mt-3">
              Get detailed insights and performance reports.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20 text-center text-white">
        <h2 className="text-4xl font-bold">
          Ready to Boost Productivity?
        </h2>

        <p className="mt-4 text-lg">
          Start managing your projects smarter today.
        </p>

        <Link
          to="/projects"
          className="inline-block mt-8 bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
};

export default Home;
import { FaUsers, FaTasks, FaChartLine } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            About ProjectHub
          </h1>

          <p className="text-xl max-w-3xl mx-auto">
            ProjectHub is a modern project management platform designed
            to help teams organize tasks, manage projects, and improve
            collaboration efficiently.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Our Mission
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Our mission is to simplify project management for students,
              developers, startups, and businesses. We provide tools that
              help teams stay organized, track progress, and achieve goals
              efficiently.
            </p>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"
              alt="Team Collaboration"
              className="rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold">
              Why Choose Us?
            </h2>

            <p className="text-gray-600 mt-4">
              Everything you need to manage projects successfully.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-50 p-8 rounded-2xl shadow">
              <FaTasks className="text-4xl text-blue-600 mb-4" />

              <h3 className="text-2xl font-semibold">
                Task Management
              </h3>

              <p className="text-gray-600 mt-3">
                Create, assign, and monitor tasks with ease.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl shadow">
              <FaUsers className="text-4xl text-green-600 mb-4" />

              <h3 className="text-2xl font-semibold">
                Team Collaboration
              </h3>

              <p className="text-gray-600 mt-3">
                Work together efficiently and stay connected.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl shadow">
              <FaChartLine className="text-4xl text-purple-600 mb-4" />

              <h3 className="text-2xl font-semibold">
                Progress Tracking
              </h3>

              <p className="text-gray-600 mt-3">
                Monitor performance and project growth in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Meet the Developer
          </h2>

          <p className="text-gray-600 mt-4">
            Built with passion and dedication.
          </p>
        </div>

        <div className="flex justify-center mt-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center w-80">
            <img
              src="https://ui-avatars.com/api/?name=Vishal+Gorai&size=200"
              alt="Developer"
              className="w-32 h-32 rounded-full mx-auto"
            />

            <h3 className="text-2xl font-bold mt-4">
              Vishal Gorai
            </h3>

            <p className="text-blue-600">
              Full Stack Developer
            </p>

            <p className="text-gray-600 mt-3">
              B.Tech CSE Student passionate about web development,
              MERN stack, and building modern applications.
            </p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-blue-600 text-white py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Let's Build Something Amazing
          </h2>

          <p className="mt-4 text-lg">
            Manage your projects smarter and faster with ProjectHub.
          </p>

          <button className="mt-8 bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
export default function About() {
  const stats = [
    { number: '500+', label: 'Attendees' },
    { number: '50+', label: 'Speakers' },
    { number: '30+', label: 'Sessions' },
    { number: '40+', label: 'Countries' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            About the Conference
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-xl text-text-gray max-w-3xl mx-auto">
            Join us for an extraordinary gathering of minds, ideas, and innovation
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-6">Our Mission</h3>
              <p className="text-lg text-text-gray mb-4 leading-relaxed">
                We are dedicated to fostering meaningful connections and facilitating knowledge
                exchange among professionals, researchers, and thought leaders from around the globe.
              </p>
              <p className="text-lg text-text-gray mb-4 leading-relaxed">
                Our conference provides a platform for groundbreaking research presentations,
                collaborative discussions, and networking opportunities that drive innovation
                and positive change in our field.
              </p>
              <p className="text-lg text-text-gray leading-relaxed">
                Whether you attend in person or virtually, you will gain valuable insights,
                expand your professional network, and contribute to shaping the future of
                our industry.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-lg p-8 text-white">
              <h4 className="text-2xl font-bold mb-6">Why Attend?</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-secondary mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Network with industry leaders and peers</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-secondary mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Access cutting-edge research and insights</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-secondary mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Participate in interactive workshops</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-secondary mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Earn professional development credits</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-text-gray font-semibold text-lg">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

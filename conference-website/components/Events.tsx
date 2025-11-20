import Link from 'next/link';
import { eventsData } from '@/lib/eventsData';

export default function Events() {
  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Events & Programs
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-xl text-text-gray max-w-3xl mx-auto">
            Three days packed with inspiring sessions, workshops, and networking opportunities
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsData.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border-t-4 border-secondary"
            >
              <div className={`bg-gradient-to-r ${event.color} p-6 text-center`}>
                <div className="text-6xl mb-3">{event.icon}</div>
                <h3 className="text-2xl font-bold text-white">{event.title}</h3>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <div className="flex items-center text-primary mb-2">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold">{event.date}</span>
                  </div>
                  <div className="flex items-center text-text-gray">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold">{event.time}</span>
                  </div>
                </div>
                <p className="text-text-gray leading-relaxed mb-4">
                  {event.description}
                </p>
                <Link
                  href={`/${event.slug}`}
                  className="inline-block w-full text-center bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-lg transition-all transform hover:scale-105"
                >
                  Know More
                </Link>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
}
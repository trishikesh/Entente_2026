import { notFound } from 'next/navigation';
import Link from 'next/link';
import { eventsData } from '@/lib/eventsData';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export async function generateStaticParams() {
  return eventsData.map((event) => ({
    slug: event.slug,
  }));
}

export default function EventPage({ params }: { params: { slug: string } }) {
  const event = eventsData.find((e) => e.slug === params.slug);

  if (!event) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            href="/#events"
            className="inline-flex items-center text-primary hover:text-primary-dark mb-8 font-semibold"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Events
          </Link>

          {/* Event Header */}
          <div className={`bg-gradient-to-r ${event.color} rounded-lg p-12 text-center mb-8`}>
            <div className="text-8xl mb-4">{event.icon}</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {event.title}
            </h1>
          </div>

          {/* Event Details */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center text-primary">
                <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-sm text-gray-600">Date</p>
                  <p className="text-xl font-semibold">{event.date}</p>
                </div>
              </div>
              <div className="flex items-center text-primary">
                <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-sm text-gray-600">Time</p>
                  <p className="text-xl font-semibold">{event.time}</p>
                </div>
              </div>
            </div>

            <div className="border-t pt-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Overview</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {event.description}
              </p>
              
              <h2 className="text-2xl font-bold text-primary mb-4">Details</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {event.detailedDescription}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
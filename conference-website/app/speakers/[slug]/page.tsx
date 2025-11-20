import { notFound } from 'next/navigation';
import Link from 'next/link';
import { speakersData } from '@/lib/speakersData';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export async function generateStaticParams() {
  return speakersData.map((speaker) => ({
    slug: speaker.slug,
  }));
}

export default function SpeakerPage({ params }: { params: { slug: string } }) {
  const speaker = speakersData.find((s) => s.slug === params.slug);

  if (!speaker) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            href="/#speakers"
            className="inline-flex items-center text-primary hover:text-primary-dark mb-8 font-semibold"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Speakers
          </Link>

          {/* Speaker Profile */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="md:flex">
              {/* Left Side - Speaker Image */}
              <div className="md:w-1/3 bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center p-12">
                {/* Placeholder - replace with actual image */}
                <div className="text-9xl">👤</div>
                {/* When you have actual images, replace the above div with:
                <img 
                  src={speaker.image} 
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                /> */}
              </div>

              {/* Right Side - Speaker Info */}
              <div className="md:w-2/3 p-8 md:p-12">
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-3">
                  {speaker.name}
                </h1>
                <p className="text-2xl font-semibold text-gray-700 mb-2">
                  {speaker.title}
                </p>
                <p className="text-xl text-gray-600 mb-6">
                  {speaker.organization}
                </p>

                <div className="mb-6 pb-6 border-b border-gray-200">
                  <p className="text-sm font-semibold text-primary uppercase mb-2">
                    Area of Expertise
                  </p>
                  <p className="text-lg text-gray-800">{speaker.expertise}</p>
                </div>

                <div className="mb-6 pb-6 border-b border-gray-200">
                  <p className="text-sm font-semibold text-primary uppercase mb-2">
                    Session
                  </p>
                  <p className="text-lg font-semibold text-gray-800 mb-1">
                    {speaker.sessionTitle}
                  </p>
                  <p className="text-gray-600">{speaker.sessionTime}</p>
                </div>

                {/* Social Links */}
                <div className="flex gap-4">
                  {speaker.socialLinks.linkedin && (
                    <a
                      href={speaker.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-dark transition-colors"
                    >
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  )}
                  {speaker.socialLinks.twitter && (
                    <a
                      href={speaker.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-dark transition-colors"
                    >
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                      </svg>
                    </a>
                  )}
                  {speaker.socialLinks.website && (
                    <a
                      href={speaker.socialLinks.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-dark transition-colors"
                    >
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Biography Section - Full Width */}
            <div className="p-8 md:p-12 border-t border-gray-200 bg-gray-50">
              <h2 className="text-3xl font-bold text-primary mb-4">Biography</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {speaker.longBio}
              </p>

              <h3 className="text-2xl font-bold text-primary mb-4">Key Achievements</h3>
              <ul className="space-y-3">
                {speaker.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-secondary mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-lg text-gray-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
import Link from 'next/link';
import { speakersData } from '@/lib/speakersData';

export default function Speakers() {
  // Display only 3 speakers in a single row
  const displaySpeakers = speakersData.slice(0, 3);

  return (
    <section id="speakers" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Featured Speakers
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-xl text-text-gray max-w-3xl mx-auto">
            Learn from industry leaders and experts in their fields
          </p>
        </div>

        {/* Speakers Grid - Single Row */}
        <div className="grid md:grid-cols-3 gap-8">
          {displaySpeakers.map((speaker, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Speaker Image */}
              <div className="relative h-64 bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                {/* Placeholder for speaker image - replace with actual image */}
                <div className="text-8xl">👤</div>
                {/* When you have actual images, replace the above div with:
                <img 
                  src={speaker.image} 
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                /> */}
              </div>
              
              {/* Speaker Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-2">{speaker.name}</h3>
                <p className="text-lg font-semibold text-gray-700 mb-1">{speaker.title}</p>
                <p className="text-md text-gray-600 mb-3">{speaker.organization}</p>
                
                <div className="mb-4 pt-3 border-t border-gray-200">
                  <p className="text-sm font-semibold text-primary mb-1">Expertise:</p>
                  <p className="text-gray-700">{speaker.expertise}</p>
                </div>
                
                <p className="text-text-gray leading-relaxed mb-4">
                  {speaker.bio}
                </p>
                
                <Link
                  href={`/speakers/${speaker.slug}`}
                  className="inline-block w-full text-center bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-lg transition-all transform hover:scale-105"
                >
                  Know More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg">
            More speakers to be announced soon!
          </p>
        </div>
      </div>
    </section>
  );
}
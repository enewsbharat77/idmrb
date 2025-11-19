'use client';
import Image from 'next/image';
import Link from 'next/link';

const TopStories = () => {
  const stories = [
    {
      id: 1,
      title: "Government Stands Ready to Support India's Digital Shift – Shri Rajeev Chandrasekhar at IDMRB Digital Media Conclave 2025",
      image: "/stories/story1.jpg",
      slug: "government-supports-digital-shift-rajeev-chandrasekhar"
    },
    {
      id: 2,
      title: "Mukesh Dadhich Appointed as the New Chairman of IDMRB — A Transformative Leader for India's Digital Media Future",
      image: "/stories/story2.jpg",
      slug: "mukesh-dadhich-new-chairman-idmrb"
    },
    {
      id: 3,
      title: "IDMRB to Bring Major Reforms in India's Digital Media Landscape – Says Chairman Mukesh Dadhich",
      image: "/stories/story3.jpg",
      slug: "idmrb-major-reforms-digital-media-mukesh-dadhich"
    },
    {
      id: 4,
      title: "IDMRB: A Self-Regulatory Body Under MIB, Strengthening India's Digital Media Framework",
      image: "/stories/storys4.jpg",
      slug: "idmrb-self-regulatory-body-mib-digital-media"
    },
    {
      id: 5,
      title: "IDMRB Sets New Benchmarks for Responsible Digital Journalism in India",
      image: "/stories/story5.jpg",
      slug: "idmrb-new-benchmarks-responsible-digital-journalism"
    },
    {
      id: 6,
      title: "IDMRB to Open Doors for Rural Digital News Portals and Local OTT Platforms, Empowering Them Through Membership and Innovation Support",
      image: "/stories/storys6.jpg",
      slug: "idmrb-rural-digital-news-portals-membership"
    },
    {
      id: 7,
      title: "A New Wave of Energy Under Chairman Mukesh Dadhich: A Visionary Leader Redefining India's Digital Media Ecosystem",
      image: "/stories/story7.jpeg",
      slug: "mukesh-dadhich-visionary-leader-digital-media"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Top Stories
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <Link 
              href={`/stories/${story.slug}`} 
              key={story.id}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <div className="relative h-96 w-full">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-3">
                    {story.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopStories;


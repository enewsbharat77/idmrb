"use client";
import Image from "next/image";
import Link from "next/link";

const TopStories = () => {
  const stories = [
    {
      id: 1,
      title: "Government Stands Ready to Support India's Digital Shift – Shri Rajeev Chandrasekhar at IDMRB Digital Media Conclave 2025",
      image: "/stories/story0.jpg",
      slug: "government-supports-digital-shift-rajeev-chandrasekhar"
    },
    {
      id: 2,
      title: "Mukesh Dadhich Appointed as the New Chairman of IDMRB — A Transformative Leader for India's Digital Media Future",
      image: "/stories/sto1.jpg",
      slug: "mukesh-dadhich-new-chairman-idmrb"
    },
    {
      id: 3,
      title: "IDMRB to Bring Major Reforms in India's Digital Media Landscape – Says Chairman Mukesh Dadhich",
      image: "/stories/sto3.jpg",
      slug: "idmrb-major-reforms-digital-media-mukesh-dadhich"
    },
    {
      id: 4,
      title: "IDMRB: A Self-Regulatory Body Under MIB, Strengthening India's Digital Media Framework",
      image: "/stories/sto4.jpg",
      slug: "idmrb-self-regulatory-body-mib-digital-media"
    },
    {
      id: 5,
      title: "IDMRB Sets New Benchmarks for Responsible Digital Journalism in India",
      image: "/stories/sto5.jpg",
      slug: "idmrb-new-benchmarks-responsible-digital-journalism"
    },
    {
      id: 6,
      title: "IDMRB to Open Doors for Rural Digital News Portals and Local OTT Platforms, Empowering Them Through Membership and Innovation Support",
      image: "/stories/sto6.jpg",
      slug: "idmrb-rural-digital-news-portals-membership"
    },
    {
      id: 7,
      title: "A New Wave of Energy Under Chairman Mukesh Dadhich: A Visionary Leader Redefining India's Digital Media Ecosystem",
      image: "/stories/sto7.jpg",
      slug: "mukesh-dadhich-visionary-leader-digital-media"
    }
  ];

  const mainStory = stories[0];
  const sideStories = stories.slice(1, 4);
  const bottomStories = stories.slice(4);

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Top Stories
        </h2>

        {/* Top Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

          {/* Large Story Left */}
          <Link href={`/stories/${mainStory.slug}`} className="group">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              {/* Maintain perfect 16:9 ratio */}
              <div className="relative w-full aspect-video">
                <Image
                  src={mainStory.image}
                  alt={mainStory.title}
                  fill
                  className="object-contain w-full h-full"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition">
                  {mainStory.title}
                </h3>
              </div>
            </div>
          </Link>

          {/* Right Side 2 Small Stories */}
          <div className="grid grid-cols-1 gap-6">
            {sideStories.map((story) => (
              <Link key={story.id} href={`/stories/${story.slug}`} className="group">
                <div className="flex gap-4 bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden transition">

                  {/* Perfect 4:3 Ratio */}
                  <div className="relative w-40 aspect-[4/3] flex-shrink-0">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition line-clamp-3">
                      {story.title}
                    </h4>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bottomStories.map((story) => (
            <Link key={story.id} href={`/stories/${story.slug}`} className="group">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 hover:shadow-xl transition">

                {/* Perfect Bottom Image (16:9) */}
                <div className="relative w-full aspect-video">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition line-clamp-3">
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

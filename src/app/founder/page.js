import Image from "next/image"
export default function Founder() {

    const founders = [
        {
            name: "keshav kumar",
            image: "/images/founder1.jpg",
            channel: "Chief Editor, The Daily Times"
        },
        {
            name: "Anjali Verma",
            image: "/images/founder2.jpg",
            channel: "Managing Director, MediaWorks"
        },
        {
            name: "Rohit Singh",
            image: "/images/founder3.jpg",
            channel: "Editor-in-Chief, News Today"
        },
        {
            name: "Sneha Patel",
            image: "/images/founder4.jpg",
            channel: "Head of Operations, Global News"
        },
        {
            name: "Arjun Mehta",
            image: "/images/founder5.jpg",
            channel: "CEO, Digital Media Corp"
        },
        {
            name: "Pooja Sharma",
            image: "/images/founder6.jpg",
            channel: "Editor, Voice of the Nation"
        },
        {
            name: "Vikram Joshi",
            image: "/images/founder7.jpg",
            channel: "Publisher, The Morning Herald"
        },
        {
            name: "Rina Das",
            image: "/images/founder8.jpg",
            channel: "Senior Editor, Newsline"
        },
        {
            name: "Manish Gupta",
            image: "/images/founder9.jpg",
            channel: "Director, Media Innovations"
        },
        {
            name: "Lata Iyer",
            image: "/images/founder10.jpg",
            channel: "Chief Editor, The Evening Post"
        },
        {
            name: "Sanjay Rao",
            image: "/images/founder11.jpg",
            channel: "Managing Director, News Network"
        },
        {
            name: "Kavita Nair",
            image: "/images/founder12.jpg",
            channel: "Editor-in-Chief, Global Times"
        }
    ]

    return (
        <>
            <div className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Section Heading */}
                    <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
                        Founding Members
                    </h1>
                    {/* Founders Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {founders.map((founder, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-md hover:shadow-lg rounded-xl overflow-hidden transition duration-300"
                            >
                                {/* Founder Image */}
                                <div className="w-full h-64 relative">
                                    <Image
                                        src={founder.image}
                                        alt={founder.name}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                                {/* Founder Info */}
                                <div className="p-6 text-center">
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                                        {founder.name}
                                    </h2>
                                    <p className="text-gray-600">{founder.channel}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div >
        </>
    )
}
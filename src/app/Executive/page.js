import Image from "next/image";
export default function Exectutive() {

    const Exectives = [
        {
            name: "John Doe",
            position: "CEO",
            image: "/images/john_doe.jpg"
        },
        {
            name: "Jane Smith",
            position: "CTO",
            image: "/images/jane_smith.jpg"
        },
        {
            name: "Alice Johnson",
            position: "CFO",
            image: "/images/alice_johnson.jpg"
        }
    ]


    return (
        <section className="bg-gray-100 py-16">
            <div className="max-w-7xl h-screen mx-auto px-6">
                <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
                    Executive Committee
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {Exectives.map((exec, index) => (
                        <div key={index} className="bg-white shadow-md hover:shadow-lg rounded-xl overflow-hidden transition duration-300">
                            <div className="w-full h-64 relative">
                                <Image
                                    src={exec.image}
                                    alt={exec.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-5 text-center">
                                <h3 className="text-xl font-semibold text-gray-900">
                                    {exec.name}
                                </h3>
                                <p className="text-blue-600 font-medium mt-1">
                                    {exec.position}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
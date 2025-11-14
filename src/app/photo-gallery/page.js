export default function photogallery() {
    const images = [
        '/images/photo1.png',
        '/images/photo2.png',
        '/images/photo3.png',
        '/images/photo4.png',
        '/images/photo5.png',
        '/images/photo6.png',
        '/images/photo2.png',
        '/images/photo4.png',
        '/images/photo1.png',
    ]

    return (
        <section className=" bg-gray-50 m-auto  max-w-7xl py-16 ">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-gray-900">Photo Gallery</h2>
                <p className="mt-4 text-gray-600">A collection of memorable moments</p>
            </div>
            <div className="grid grid-cols-1  gap-6 px-4">
                {images.map((src, index) => (
                    <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                        <img
                            src={src}
                            alt={`Gallery Image ${index + 1}`}
                            className="w-full object-cover transform hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}
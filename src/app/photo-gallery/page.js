export default function photogallery(){
    const images = [
        '/photos/photo1.jpg',
        '/photos/photo2.jpg',
        '/photos/photo3.jpg',
        '/photos/photo4.jpg',
        '/photos/photo5.jpg',
        '/photos/photo6.jpg',
        '/photos/photo7.jpg',
        '/photos/photo8.jpg',
        '/photos/photo9.jpg',
        '/photos/photo10.jpg',
        '/photos/photo11.jpg',
        '/photos/photo12.jpg',
    ]
    
    return (
     <section className=" bg-gray-50 m-auto  max-w-7xl py-16 ">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Photo Gallery</h2>
            <p className="mt-4 text-gray-600">A collection of memorable moments</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {images.map((src, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                    <img
                        src={src}
                        alt={`Gallery Image ${index + 1}`} 
                        className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                </div>
            ))}
        </div>
     </section>
    )
}
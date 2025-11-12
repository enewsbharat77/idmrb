import CommitteesSection from "@/components/Committees";

export default function icommite() {
    return (
        <section className="bg-gray-100 py-16">
            <div className="max-w-7xl  mx-auto px-6">
                <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
                    Committee Members
                </h1>
                <CommitteesSection/>
            </div>
        </section>
    );
}
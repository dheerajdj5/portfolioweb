// src/components/Certificates.js
export default function Certificates() {
  const certificates = [
    {
      title: "Full Stack Web Development",
      provider: "Springboard",
      year: "2024",
    },
    {
      title: "FULL STACK DEVELOPMENT USING REACT JS",
      provider: "CodeLab Systems",
      year: "2024",
    },
    {
      title: "Blockchain ",
      provider: "Springboard",
      year: "2025",
    },
  ];

  return (
    <section id="certificates" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
          My <span className="text-blue-600">Certificates</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-md border hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                {cert.title}
              </h3>
              <p className="text-gray-700 font-medium">{cert.provider}</p>
              <p className="text-sm text-gray-500 mt-2">📅 {cert.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';

const teamMembers = [
  {
    name: "AbdulRehman",
    role: "Abdul Rehman is a skilled web developer, graphic designer, and video editor, passionate about creating high-quality digital solutions.",
    image: "/C1.jpeg",
    portfolioLink: "https://abdul-rehman-portfolio-three.vercel.app/", // AbdulRehman's portfolio link
  },
  {
    name: "Muhammad Rameez",
    role: "Rameez is a talented UI/UX website developer and designer, as well as a mobile app developer and designer.",
    image: "/111.jpg",
    portfolioLink: "https://rameez-portfolio-gold.vercel.app/", // Rameez's portfolio link
  },
  {
    name: "Adnan Ali",
    role: "Adnan is a Front-end Developer who blends creativity and code to create seamless web experiences.",
    image: "/L.png",
    portfolioLink: "https://madnan-portfolio.vercel.app/", // Adnan's portfolio link (you can replace it with an actual link)
  },
];

export default function TeamSection() {
  return (
    <section className="py-12 bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Our Team Members
        </h2>
        <div className="w-80 h-1 bg-gradient-to-r from-primary to-tertiary rounded-full mx-auto mt-2 mb-10" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-700 bg-opacity-50 rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition-transform"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-white">{member.name}</h3>
              <p className="text-gray-300">{member.role}</p>
              <a
                href={member.portfolioLink} // Dynamic link based on the team member
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                  View Portfolio
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

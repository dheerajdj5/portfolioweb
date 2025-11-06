// src/components/Navbar.js
export default function Navbar() {
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
    {
      name: "Resume",
      link: "https://drive.google.com/file/d/1-o09Mh9ixq7WqVPmZjSJPuLbGEP8uxev/view?usp=drive_link",
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Name Branding */}
       <h1 className="text-3xl font-extrabold text-blue-600 drop-shadow-[0_0_10px_rgba(37,99,235,0.8)]">
  Dheeraj R
</h1>


        {/* Navigation */}
        <nav className="flex gap-6 text-gray-800 font-medium">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target={item.name === "Resume" ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

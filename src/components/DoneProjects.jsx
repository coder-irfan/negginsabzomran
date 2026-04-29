const projects = [
  {
    id: "1",
    number: "01",
    title: "Residential Building Construction",
    description:
      "Full construction of a multi-story residential building, including foundation, structure, and finishing, delivered with high-quality materials and modern standards.",
    image: "images/IMG_8771.webp",
  },
  {
    id: "2",
    number: "02",
    title: "Commercial Clinic Project",
    description:
      "Construction of a modern clinic building designed for business use, focusing on strong structure, efficient space planning, and long-term durability.",
    image: "images/IMG_8770.webp",
  },
  {
    id: "3",
    number: "03",
    title: "Architectural Design & Planning",
    description:
      "Creation of detailed building plans, layouts, and architectural designs to ensure efficient space usage and smooth construction execution.",
    image: "images/IMG_8766.webp",
  },
  {
    id: "4",
    number: "04",
    title: "Interior & Exterior Finishing",
    description:
      "Complete finishing work including interior decoration and exterior design to enhance both the aesthetics and functionality of the building.",
    image: "images/IMG_8767.webp",
  },
  {
    id: "5",
    number: "05",
    title: "Building Renovation Project",
    description:
      "Renovation and upgrading of an existing structure, improving design, strength, and usability while maintaining safety and modern standards.",
    image: "images/download (5) (1).webp",
  },
  {
    id: "6",
    number: "06",
    title: "Building Construction Projects",
    description:
      "Execution of residential and commercial building projects with strong structure, quality materials, ensuring durability and professional standards.",
    image: "images/IMG_8765.webp",
  },
];

function DoneProjects() {
  return (
    <section
      id="projects"
      className="px-6 py-16 md:px-8 lg:px-16 lg:py-24 space-y-12"
    >
      <div className="text-center space-y-3 md:space-y-4">
        <div className="inline-block tracking-wider border-l-4 border-colors-secondTextColor">
          <p className="ml-4 font-medium md:text-lg lg:text-xl font-heading">
            Projects
          </p>
        </div>

        <h2 className="text-h2 font-semibold leading-tight">
          Our Latest <span className="text-colors-secondTextColor">Works</span>
        </h2>

        <p className="text-sm md:text-base text-colors-textDarkGray max-w-2xl mx-auto">
          A curated selection of completed construction projects showcasing
          quality, precision, and engineering excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group border border-colors-textDarkGray/20 rounded-xl overflow-hidden bg-colors-bg shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="w-full h-64 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <span className="absolute top-3 left-3 bg-colors-textDarkGray/80 text-colors-textLightColor text-xs px-3 py-1 rounded-full">
                Project {project.number}
              </span>
            </div>

            <div className="p-6 space-y-3">
              <h3 className="text-lg md:text-xl font-semibold">
                {project.title}
              </h3>

              <p className="text-sm text-colors-textDarkGray line-clamp-3">
                {project.description}
              </p>

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs lg:text-sm text-colors-textDarkGray/70">
                  Completed Project
                </span>

                <a href="#contact">
                  <button className="text-sm font-medium text-colors-secondTextColor hover:underline">
                    Contact Us →
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DoneProjects;

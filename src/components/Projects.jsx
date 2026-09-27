import SectionTitle from "./SectionTitle";
import { GoProjectSymlink } from "react-icons/go";
import { FiGithub } from "react-icons/fi"; // Added GitHub icon

const projects = [
  
   {
    number: "PROJECT 01",
    title: "Shop Management Dashboard (ETL)",
    description:
      "Developed a multi-shop management dashboard with Django, MySQL, and Bootstrap 5. Integrated Google Sheets API to enable automated data synchronization of purchase and sales records. Designed real-time inventory tracking and sales analytics dashboards with user-specific access controls.",
    techStack: [
      "HTML5", "CSS", "JavaScript", "Bootstrap", "Python", 
      "Django", "Django Rest Framework", "Postman", "Git/Github"
    ],
    link: "#",
    github: "#",
  },
  {
    number: "PROJECT 02",
    title: "Full-Stack Blog Platform",
    description:
      "Developed a full-stack blogging platform with Django, DRF, PostgreSQL, and React.js. Built a scalable backend supporting users, authors, posts, comments, likes, and collections. Implemented personalized feeds, analytics dashboards, and real-time notifications to improve user engagement.",
    techStack: [
      "HTML5", "CSS", "JavaScript", "Bootstrap", "Python", 
      "Django", "Django Rest Framework", "Postman", "Git/Github", "React Js"
    ],
    link: "#",
    github: "#",
  },
  {
    number: "PROJECT 03",
    title: "Book Management System (BMS)",
    description:
      "Designed and implemented a multi-tenant library management system using FastAPI, React.js, PostgreSQL, SQLAlchemy, and Pydantic. Developed modules for book CRUD, issue/return workflows, fine calculation, and user profile management. Secure file upload APIs with RBAC-based access control.",
    techStack: [
      "HTML5", "CSS", "JavaScript", "Bootstrap", "Python", 
      "Django", "Django Rest Framework", "Postman", "Git/Github", "React Js"
    ],
    link: "#",
    github: "#",
  },
 
  {
    number: "PROJECT 04",
    title: "Real-Time Chat Application",
    description:
      "Created a WhatsApp Web–style chat system using Django Channels, PostgreSQL, and JavaScript. Implemented one-to-one and group messaging with real-time communication, unread message tracking, file sharing, profile/group images, and dynamic chat search within an interactive dashboard.",
    techStack: [
      "HTML5", "CSS", "JavaScript", "Bootstrap", "Python", 
      "Django", "Django Rest Framework"
    ],
    link: "#",
    github: "#",
  },
  {
    number: "PROJECT 05",
    title: "Image Gallery",
    description:
      "A responsive photo management platform that lets users upload, organize, and view images in albums—just like Google Photos. Includes authentication, album management, and a custom admin panel.",
    techStack: [
      "HTML5", "CSS", "JavaScript", "Bootstrap", "Python", 
      "Django", "Django Rest Framework", "Git/Github"
    ],
    link: "#",
    github: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="px-0 py-24">
      <div className="mx-auto w-[90%] max-w-[1100px]">
        <SectionTitle
          icon={<GoProjectSymlink />}
          title="Projects"
          description="Selected projects and work."
        />

        <div className="grid gap-6 md:grid-cols-1">
          {projects.map((project) => (
            <article
              key={project.number}
              className="
                flex flex-col justify-between
                rounded-[18px] border border-slate-800
                bg-gradient-to-br from-gray-900 to-[#0b1220]
                p-7 transition duration-200
                hover:-translate-y-1 hover:border-blue-600
              "
            >
              <div>
                <div className="text-[13px] font-extrabold text-blue-500">
                  {project.number}
                </div>

                <h3 className="my-2 text-2xl font-bold text-slate-50">
                  {project.title}
                </h3>

                <p className="mb-5 leading-relaxed text-slate-400">
                  {project.description}
                </p>

                {/* Tech Stack Section */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold tracking-wider text-slate-300 uppercase mb-2">
                    Tech Stack Used:
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="rounded-md bg-slate-800/80 px-2.5 py-1 text-xs font-medium text-blue-300 border border-slate-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Links with GitHub icon */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-800/60">
                <a
                  href={project.link}
                  className="font-bold text-blue-400 transition hover:text-blue-300 text-sm"
                >
                  View Project →
                </a>
                <a
                  href={project.github}
                  className="flex items-center gap-1.5 font-bold text-slate-400 transition hover:text-slate-100 text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
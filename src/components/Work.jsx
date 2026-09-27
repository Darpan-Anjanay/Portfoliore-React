import SectionTitle from "./SectionTitle";
import { MdOutlineWorkHistory  } from "react-icons/md";
const experience = [
  {
    date: "Aug 2023 - Feb 2025",
    title: "Python Developer",
    company: "NILE Hospitality (Software Division), Udaipur",

    description:
      "NILE Hospitality is a leading hotel management company in South Asia. At Nile Group, I played a key role in designing and developing a SaaS-based ERP system that streamlined hotel operations and HRM across 20+ properties with centralized access and transparency.",

    achievements: [
      "Developed a SaaS-based ERP for hotel operations and HRM to centrally manage 20+ hotel properties, enabling seamless cross-property access and reporting.",

      "Built a scalable HRM and Workforce Management System covering payroll, leave, attendance, designations, budget allocations, and vacancy tracking, reducing manual HR workload by 40%.",

      "Designed a centralized hiring and interview portal with resume parsing, automated candidate matching, and assessment workflows, cutting HR screening and scheduling efforts by 50%+.",

      "Implemented onboarding, performance, and appraisal systems with automated letters, KRA tracking, and appraisal cycles, reducing paperwork and performance tracking efforts by 45%.",

      "Created ETL pipelines and a centralized reporting system combining multi-source HR and operations data, improving transparency and reducing reporting workload by 60%.",

      "Integrated third-party attendance APIs and automated payroll workflows, reducing payroll processing time and compliance risks.",

      "Established a SaaS architecture with RBAC and dynamic workflow mapping, ensuring scalability, security, and role-based access across multiple organizations.",
    ],
  },
];

function Work() {
  return (
    <section id="work" className="py-24">
      <div className="mx-auto w-[90%] max-w-[1100px]">
        
        <SectionTitle
          icon = {<MdOutlineWorkHistory/>}
          title="Work History"
          description="Professional experience and career history."
        />

        <div className="border-l-2 border-blue-900 pl-7">

          {experience.map((job) => (
            <div
              key={`${job.company}-${job.title}`}
              className="relative"
            >

              {/* Timeline Dot */}
              <span
                className="
                  absolute -left-[37px] top-2
                  h-3 w-3 rounded-full
                  bg-blue-500
                  shadow-[0_0_15px_#3b82f6]
                "
              />

              {/* Date */}
              <div className="mb-2 text-sm font-bold text-blue-400">
                {job.date}
              </div>

              {/* Job Title */}
              <h3 className="text-2xl font-bold text-white">
                {job.title}
              </h3>

              {/* Company */}
              <h4 className="mt-1 mb-5 text-base font-medium text-slate-400">
                {job.company}
              </h4>

              {/* Introduction */}
              <p className="mb-6 max-w-4xl leading-7 text-slate-400">
                {job.description}
              </p>

              {/* Achievements */}
              <ul className="max-w-4xl space-y-4">
                {job.achievements.map((achievement, index) => (
                  <li
                    key={index}
                    className="
                      flex items-start gap-3
                      text-sm leading-7 text-slate-400
                    "
                  >
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />

                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Work;

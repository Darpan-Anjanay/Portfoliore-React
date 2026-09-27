import SectionTitle from "./SectionTitle";
import { GrOverview } from "react-icons/gr";
function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#080b12] px-0 py-24 sm:py-24"
    >
      <div className="mx-auto w-[90%] max-w-[1100px]">

        <SectionTitle
          icon={<GrOverview/>}
          title="Skills Overview"
          description="Core skills and areas of expertise."
        />

      
        <div className="mb-12 text-justify">
          <p className="text-base leading-7 text-slate-400 sm:text-lg">
            Python Developer and Full Stack Developer with expertise in
            Python, Django, Django REST Framework (DRF), FastAPI, REST APIs,
            React.js, and JavaScript. Experienced in designing and developing
            scalable SaaS and ERP platforms, multi-tenant architectures,
            RBAC-based access control, automation pipelines, ETL development,
            data integration, web scraping, and API design. Strong background
            in microservices, monolithic applications, and full-stack
            development, with a focus on performance, scalability, and
            maintainability.
          </p>
        </div>

       
      </div>
    </section>
  );
}

export default Skills;

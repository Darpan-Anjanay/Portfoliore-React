import SectionTitle from "./SectionTitle";
import { TbStack2 } from "react-icons/tb";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaAws,
} from "react-icons/fa";

import {
  SiBootstrap,
  SiDjango,
  SiFastapi,
  SiMysql,
  SiPostgresql,
  SiPostman,
  SiSwagger,
  SiLinux,
} from "react-icons/si";

import {
  Database,
  Workflow,
  Globe,
  Wrench,
  Server,
} from "lucide-react";

import {
  AwsIdentityAndAccessManagement,
  AmazonVirtualPrivateCloud,
  AmazonEc2,
  AmazonSimpleStorageService,
  AmazonRds,
  AmazonRoute53,
  AmazonCloudFront,
  AmazonEventBridge,
  AwsLambda,
  AmazonApiGateway,
} from "@nxavis/aws-icons";

const categories = [
  {
    title: "Frontend",
    icon: <Globe size={28} />,
    color: "text-cyan-400",
    technologies: [
      {
        name: "HTML5",
        icon: <FaHtml5 />,
        color: "text-orange-500",
      },
      {
        name: "CSS",
        icon: <FaCss3Alt />,
        color: "text-blue-400",
      },
      {
        name: "JavaScript",
        icon: <FaJs />,
        color: "text-yellow-400",
      },
      {
        name: "Bootstrap",
        icon: <SiBootstrap />,
        color: "text-purple-400",
      },
      {
        name: "React.js",
        icon: <FaReact />,
        color: "text-cyan-400",
      },
    ],
  },

  {
    title: "Backend",
    icon: <Server size={28} />,
    color: "text-blue-400",
    technologies: [
      {
        name: "Python",
        icon: <FaPython />,
        color: "text-yellow-400",
      },
      {
        name: "Django",
        icon: <SiDjango />,
        color: "text-green-400",
      },
      {
        name: "Django REST Framework",
        icon: <SiDjango />,
        color: "text-red-400",
      },
      {
        name: "FastAPI",
        icon: <SiFastapi />,
        color: "text-teal-400",
      },
    ],
  },

  {
    title: "Database",
    icon: <Database size={28} />,
    color: "text-purple-400",
    technologies: [
      {
        name: "Microsoft SQL Server",
        icon: <Database />,
        color: "text-red-400",
      },
      {
        name: "MySQL",
        icon: <SiMysql />,
        color: "text-blue-400",
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql />,
        color: "text-blue-300",
      },
    ],
  },

  {
    title: "Tools",
    icon: <Wrench size={28} />,
    color: "text-orange-400",
    technologies: [
      {
        name: "Postman",
        icon: <SiPostman />,
        color: "text-orange-500",
      },
      {
        name: "Git",
        icon: <FaGitAlt />,
        color: "text-orange-400",
      },
      {
        name: "GitHub",
        icon: <FaGithub />,
        color: "text-white",
      },
      {
        name: "Swagger UI",
        icon: <SiSwagger />,
        color: "text-green-400",
      },
      {
        name: "Linux",
        icon: <SiLinux />,
        color: "text-yellow-300",
      },
    ],
  },

  {
    title: "Data & Automation",
    icon: <Workflow size={28} />,
    color: "text-pink-400",
    technologies: [
      {
        name: "ETL Pipelines",
        icon: <Workflow />,
        color: "text-purple-400",
      },
      {
        name: "Web Scraping",
        icon: <Globe />,
        color: "text-cyan-400",
      },
    ],
  },

  {
    title: "AWS",
    icon: <FaAws size={28} />,
    color: "text-blue-400",
    technologies: [
      {
        name: "IAM",
        icon: <AwsIdentityAndAccessManagement />,
        color: "text-yellow-400",
      },
      {
        name: "VPC",
        icon: <AmazonVirtualPrivateCloud />,
        color: "text-yellow-400",
      },
      {
        name: "EC2",
        icon: <AmazonEc2 />,
        color: "text-yellow-400",
      },
      {
        name: "S3",
        icon: <AmazonSimpleStorageService />,
        color: "text-yellow-400",
      },
      {
        name: "RDS",
        icon: <AmazonRds />,
        color: "text-yellow-400",
      },
      {
        name: "Route 53",
        icon: <AmazonRoute53 />,
        color: "text-yellow-400",
      },
      {
        name: "CloudFront",
        icon: <AmazonCloudFront />,
        color: "text-yellow-400",
      },
      {
        name: "EventBridge",
        icon: <AmazonEventBridge />,
        color: "text-yellow-400",
      },
      {
        name: "Lambda",
        icon: <AwsLambda />,
        color: "text-yellow-400",
      },
      {
        name: "API Gateway",
        icon: <AmazonApiGateway />,
        color: "text-yellow-400",
      },
    ],
  },
];

function TechStack() {
  return (
    <section
      id="stack"
      className="bg-[#080b12] px-0 py-24 sm:py-24"
    >
      <div className="mx-auto w-[90%] max-w-[1100px]">

        <SectionTitle
          icon={<TbStack2 />}
          title="Tech Stack"
          description="Technologies and tools I use to build scalable applications."
        />

        <div className="grid gap-6 md:grid-cols-2">

          {categories.map((category) => (
            <div
              key={category.title}
              className="
                rounded-2xl
                border border-slate-800
                bg-slate-900/60
                p-6
                transition-all duration-300
                hover:border-slate-700
                hover:bg-slate-900
              "
            >

              {/* Category Header */}
              <div className="mb-6 flex items-center gap-3">

                <div
                  className={`
                    flex h-10 w-10 shrink-0
                    items-center justify-center
                    rounded-lg bg-slate-800
                    ${category.color}
                  `}
                >
                  {category.icon}
                </div>

                <h3 className="text-xl font-bold text-slate-100">
                  {category.title}
                </h3>

              </div>

              {/* Technologies - Vertical */}
              <div className="grid grid-cols-3 gap-3">
  {category.technologies.map((technology) => (
    <div
      key={technology.name}
      className="
        group
        flex
        h-12
        w-full
        items-center
        justify-left
        gap-2
        rounded-lg
        border border-slate-700
        bg-slate-950/60
        px-2
        text-sm
        text-slate-300
        transition-all
        duration-200
        hover:border-blue-500/60
        hover:bg-slate-800
        hover:text-white
      "
    >
      {/* Icon */}
      <span
        className={`
          flex
          h-7
          w-7
          shrink-0
          items-center
          justify-center
          text-[20px]
          ${technology.color}
          transition-transform
          duration-200
          group-hover:scale-110
        `}
      >
        {technology.icon}
      </span>

      {/* Name */}
      <span className="truncate font-medium">
        {technology.name}
      </span>
    </div>
  ))}
</div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default TechStack;

import ResumePdf from "../assets/DarpanAnjanay-Python_Developer-2026.pdf";

function Resume() {
  return (
    <section id="resume" className="py-20">
      <div className="mx-auto w-[90%] max-w-[1100px]">
        <div
          className="
            rounded-[20px] border border-blue-800
            bg-gradient-to-br from-blue-950 to-gray-900
            px-5 py-10 text-center sm:px-12
          "
        >
          <h2 className="mb-2 text-3xl font-bold">
            Download My Resume
          </h2>

          <p className="mb-6 text-blue-200">
            Get a complete overview of my experience, skills and projects.
          </p>

          <a
            href={ResumePdf}
            download
            className="
              inline-block rounded-lg bg-blue-600
              px-5 py-3 font-bold transition
              hover:-translate-y-0.5 hover:bg-blue-700
            "
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;
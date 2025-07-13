import {Github, Linkedin, Mail, Phone} from "lucide-react";
import {useEffect, useState} from "react";
import express from "../../assets/express-svgrepo-com.svg";
import github from "../../assets/github-142-svgrepo-com.svg";
import golang from "../../assets/golang-svgrepo-com.svg";
import js from "../../assets/js-svgrepo-com.svg";
import node from "../../assets/node-js-svgrepo-com.svg";
import reactLogo from "../../assets/react-svgrepo-com.svg";
import typescript from "../../assets/typescript-icon-svgrepo-com.svg";
import resume from "../../assets/Dhairya Resume.pdf";

const Projects = () => {
  async function getGidData() {
    await fetch("https://api.github.com/users/ImDhairya")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data, "Thegitdata");
        setGitData(data);
      });
  }

  const [gitHubData, setGitData] = useState<any>(null);

  useEffect(() => {
    getGidData();
  }, []);

  return (
    <div className="z-20 min-h-screen relative text-lg sm:text-xl lg:text-2xl xl:text-3xl overflow-x-hidden bg-transparent max-w-full flex flex-col text-white">
      {/* Hero Section */}
      <section className="px-4 sm:px-8 lg:px-20 py-8 sm:py-12 lg:py-16">
        <div className="bg-[#111827]/70 backdrop-blur-md p-6 sm:p-10 lg:p-20 rounded-2xl sm:rounded-3xl lg:rounded-4xl flex flex-col lg:flex-row gap-8 lg:gap-0 text-center lg:text-left">
          {/* Left Content */}
          <div className="flex flex-col items-center lg:items-start justify-center w-full lg:w-1/2">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              Hi I'm Dhairya Pandya
            </h3>

            <p className="text-base sm:text-lg lg:text-xl text-center lg:text-left leading-relaxed max-w-md lg:max-w-none">
              Software Engineer based in Vadodara, building high-performance web
              applications. I focus on writing clean, industry-standard code
              that is readable, maintainable, and built for collaboration.
            </p>

            {/* Contact Info */}
            <div className="mt-6 sm:mt-8 w-full max-w-md lg:max-w-none">
              {/* Email and Phone */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div className="flex items-center justify-center sm:justify-start">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <a
                    href="mailto:pandyadhairya789@gmail.com"
                    className="ml-2 sm:ml-3 text-sm sm:text-base hover:text-blue-400 transition-colors"
                  >
                    pandyadhairya789@gmail.com
                  </a>
                </div>

                <div className="flex items-center justify-center sm:justify-start">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <a
                    href="tel:+919408375902"
                    className="ml-2 sm:ml-3 text-sm sm:text-base hover:text-blue-400 transition-colors"
                  >
                    +91 9408375902
                  </a>
                </div>
              </div>

              {/* LinkedIn and GitHub */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="flex items-center justify-center sm:justify-start">
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <a
                    href="https://www.linkedin.com/in/dhairya-pandya-b31507228"
                    className="ml-2 sm:ml-3 text-sm sm:text-base hover:text-blue-400 transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>

                <div className="flex items-center justify-center sm:justify-start">
                  <Github className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <a
                    href="https://github.com/ImDhairya"
                    className="ml-2 sm:ml-3 text-sm sm:text-base hover:text-blue-400 transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>

              {/* Resume Button */}
              <a
                href={resume}
                download="DhairyaResume"
                className="inline-block"
              >
                <button className="cursor-pointer w-full sm:w-auto px-8 sm:px-10 bg-blue-600 hover:bg-blue-700 py-2 sm:py-3 rounded-2xl sm:rounded-3xl text-sm sm:text-base font-medium transition-colors">
                  Download Resume
                </button>
              </a>
            </div>
          </div>

          {/* Divider - Hidden on mobile */}
          <div className="hidden lg:flex justify-center px-4">
            <div className="h-60 w-px border-l border-white/30"></div>
          </div>

          {/* Right Content - Technologies */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">
              Tools and Technologies
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4 sm:gap-6 max-w-md mx-auto lg:max-w-none">
              {/* First Column */}
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center justify-center lg:justify-start">
                  <img
                    className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 flex-shrink-0"
                    src={express}
                    alt="Express"
                  />
                  <span className="text-sm sm:text-base lg:text-lg">
                    Express
                  </span>
                </div>

                <div className="flex items-center justify-center lg:justify-start">
                  <img
                    className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 flex-shrink-0"
                    src={js}
                    alt="JavaScript"
                  />
                  <span className="text-sm sm:text-base lg:text-lg">
                    JavaScript
                  </span>
                </div>

                <div className="flex items-center justify-center lg:justify-start">
                  <img
                    className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 flex-shrink-0"
                    src={typescript}
                    alt="TypeScript"
                  />
                  <span className="text-sm sm:text-base lg:text-lg">
                    TypeScript
                  </span>
                </div>

                <div className="flex items-center justify-center lg:justify-start">
                  <img
                    className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 flex-shrink-0"
                    src={github}
                    alt="GitHub"
                  />
                  <span className="text-sm sm:text-base lg:text-lg">
                    GitHub
                  </span>
                </div>
              </div>

              {/* Second Column */}
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center justify-center lg:justify-start">
                  <img
                    className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 flex-shrink-0"
                    src={golang}
                    alt="GoLang"
                  />
                  <span className="text-sm sm:text-base lg:text-lg">
                    GoLang
                  </span>
                </div>

                <div className="flex items-center justify-center lg:justify-start">
                  <img
                    className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 flex-shrink-0"
                    src={reactLogo}
                    alt="React"
                  />
                  <span className="text-sm sm:text-base lg:text-lg">React</span>
                </div>

                <div className="flex items-center justify-center lg:justify-start">
                  <img
                    className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 flex-shrink-0"
                    src={node}
                    alt="Node"
                  />
                  <span className="text-sm sm:text-base lg:text-lg">Node</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills and Profile Section */}
      <section className="px-4 sm:px-8 lg:px-20 py-4 sm:py-8">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
          {/* Skills Section */}
          <div className="w-full lg:w-1/2 backdrop-blur-sm rounded-2xl sm:rounded-3xl lg:rounded-4xl p-6 sm:p-8 lg:p-10 bg-blue-600/20">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center lg:text-left">
              Skills
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {/* Programming */}
              <div className="space-y-3 sm:space-y-4">
                <h4 className="text-lg sm:text-xl font-semibold text-center sm:text-left">
                  Programming
                </h4>
                <div className="rounded-2xl sm:rounded-3xl border border-white/30 w-full p-3 sm:p-4 flex flex-wrap gap-2 sm:gap-3 text-sm sm:text-base justify-center sm:justify-start">
                  <span>JavaScript</span>
                  <span>TypeScript</span>
                  <span>Python</span>
                </div>
              </div>

              {/* Frontend */}
              <div className="space-y-3 sm:space-y-4">
                <h4 className="text-lg sm:text-xl font-semibold text-center sm:text-left">
                  Frontend
                </h4>
                <div className="rounded-2xl sm:rounded-3xl border border-white/30 w-full p-3 sm:p-4 flex flex-wrap gap-2 sm:gap-3 text-sm sm:text-base justify-center sm:justify-start">
                  <span>React</span>
                  <span>Next.js</span>
                  <span>Vite</span>
                </div>
              </div>

              {/* Frameworks */}
              <div className="space-y-3 sm:space-y-4">
                <h4 className="text-lg sm:text-xl font-semibold text-center sm:text-left">
                  Frameworks
                </h4>
                <div className="rounded-2xl sm:rounded-3xl border border-white/30 w-full p-3 sm:p-4 flex flex-wrap gap-2 sm:gap-3 text-sm sm:text-base justify-center sm:justify-start">
                  <span>ContentFul</span>
                  <span>Strapi</span>
                  <span>Drizzle</span>
                </div>
              </div>

              {/* Backend */}
              <div className="space-y-3 sm:space-y-4">
                <h4 className="text-lg sm:text-xl font-semibold text-center sm:text-left">
                  Backend
                </h4>
                <div className="rounded-2xl sm:rounded-3xl border border-white/30 w-full p-3 sm:p-4 flex flex-wrap gap-2 sm:gap-3 text-sm sm:text-base justify-center sm:justify-start">
                  <span>MongoDb</span>
                  <span>Prisma ORM</span>
                  <span>PostgreSQL</span>
                </div>
              </div>

              {/* DevOps */}
              <div className="space-y-3 sm:space-y-4 sm:col-span-2">
                <h4 className="text-lg sm:text-xl font-semibold text-center sm:text-left">
                  DevOps
                </h4>
                <div className="rounded-2xl sm:rounded-3xl border border-white/30 w-full p-3 sm:p-4 flex flex-wrap gap-2 sm:gap-3 text-sm sm:text-base justify-center sm:justify-start">
                  <span>CICD</span>
                  <span>Zest</span>
                  <span>LightHouse</span>
                  <span>SSG</span>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Section */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6">
              <a
                target="_blank"
                href={gitHubData && gitHubData.html_url}
                rel="noopener noreferrer"
                className="block transition-transform hover:scale-105"
              >
                <img
                  className="rounded-2xl sm:rounded-3xl w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 xl:w-80 xl:h-80 object-cover"
                  src="https://avatars.githubusercontent.com/u/98574278?v=4"
                  alt="GitHub Profile"
                />
              </a>

              <a
                target="_blank"
                href={gitHubData && gitHubData.html_url}
                rel="noopener noreferrer"
                className="text-lg sm:text-xl font-medium hover:text-blue-400 transition-colors"
              >
                {gitHubData && gitHubData.login}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-4 sm:px-8 lg:px-20 py-4 sm:py-8">
        <div className="backdrop-blur-sm border border-white/20 bg-violet-900/25  rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 min-h-[60vh] overflow-hidden">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center lg:text-left">
            <a
              href="https://github.com/ImDhairya/leet-lab.git"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-orange-300 transition-colors"
            >
              Leet Lab
            </a>
          </h2>

          <div className="space-y-6 sm:space-y-8">
            {/* Project Description */}
            <div className="text-center lg:text-left">
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed">
                A powerful custom-built platform inspired by LeetCode, designed
                to facilitate real-time code execution, assessment, and
                problem-solving using modern technologies.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-center lg:text-left">
                🚀 Key Highlights
              </h3>

              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base lg:text-lg leading-relaxed">
                <div className="flex flex-col sm:flex-row sm:items-start space-y-2 sm:space-y-0 sm:space-x-3">
                  <span className="text-green-400 font-medium">
                    ✅ Multi-language Code Support:
                  </span>
                  <span>
                    Integrated with{" "}
                    <span className="font-medium text-blue-300">Judge0</span>,
                    allowing users to write and execute code in multiple
                    programming languages.
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start space-y-2 sm:space-y-0 sm:space-x-3">
                  <span className="text-purple-400 font-medium">
                    🧪 Test Case Execution:
                  </span>
                  <span>
                    Admins can create custom problems and batch-submit multiple
                    test cases per problem for evaluation.
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start space-y-2 sm:space-y-0 sm:space-x-3">
                  <span className="text-yellow-400 font-medium">
                    🔁 Asynchronous Polling:
                  </span>
                  <span>
                    Implemented efficient polling to handle Judge0 responses
                    without blocking the interface.
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start space-y-2 sm:space-y-0 sm:space-x-3">
                  <span className="text-red-400 font-medium">
                    🛠 Admin Controls:
                  </span>
                  <span>
                    Built secure interfaces for managing problems, test cases,
                    and monitoring submissions.
                  </span>
                </div>
              </div>

              {/* Technology Stack */}
              <div className="bg-white/5 rounded-xl p-4 sm:p-6 mt-6">
                <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-center lg:text-left">
                  ⚙️ Technology Stack
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 text-sm sm:text-base">
                  <div>
                    Frontend:{" "}
                    <span className="font-medium text-blue-300">React.js</span>
                  </div>
                  <div>
                    Backend:{" "}
                    <span className="font-medium text-green-300">Node.js</span>
                  </div>
                  <div>
                    ORM:{" "}
                    <span className="font-medium text-purple-300">Prisma</span>
                  </div>
                  <div>
                    Database:{" "}
                    <span className="font-medium text-yellow-300">
                      PostgreSQL
                    </span>
                  </div>
                  <div>
                    Code Engine:{" "}
                    <span className="font-medium text-orange-300">Judge0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;

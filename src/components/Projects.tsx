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
    <div className="z-20 h-screen relative text-6xl overflow-x-hidden top-0 left-0 flex-col right-0 bg-transparent max-w-full flex decoration-solid text-white">
      <section>
        <div className="mx-20 bg-[#111827]/70 backdrop-blur-md p-20 rounded-4xl flex mt-30 text-center">
          <div className=" flex flex-col items-center justify-center w-1/2">
            <h3 className=" text-4xl">Hi I'm Dhairya Pandya </h3>

            <p className=" text-start text-xl mt-5">
              Software Engineer based in Vadodara, building high-performance web
              applications. I focus on writing clean, industry-standard code
              that is readable, maintainable, and built for collaboration.
            </p>

            <div className=" mt-5 text-start w-full flex flex-col">
              <div className=" flex gap-5">
                <div className=" flex text-start w-full">
                  <Mail />
                  <a href="pandyadhairya789@gmail.com">
                    <p className=" ml-3 text-sm">pandyadhairya789@gmail.com</p>
                  </a>
                </div>

                <div className=" flex text-end w-full">
                  <Phone />
                  <a href="tel:+919408375902">
                    <p className=" ml-3 text-sm">+91 9408375902</p>
                  </a>
                </div>
              </div>

              <div className=" flex gap-5 mt-5">
                <div className=" flex text-start w-full">
                  <Linkedin />
                  <a href="https://www.linkedin.com/in/dhairya-pandya-b31507228">
                    <p className=" ml-3 text-sm">LinkedIn</p>
                  </a>
                </div>

                <div className=" flex text-end w-full">
                  <Github />
                  <a href="https://github.com/ImDhairya">
                    <p className=" ml-3 text-sm">GitHub</p>
                  </a>
                </div>
              </div>
              <a
                href={resume}
                download={"DhairyaResume"}
                className=" mt-5 text-start text-sm"
              >
                <button className="cursor-pointer w-fit px-10 bg-blue-600 p-2 rounded-3xl">
                  {" "}
                  Resume
                </button>
              </a>
            </div>
          </div>

          <div className="divider p-2">
            <div className=" h-60 w-0  border-[0.5px] flex"> </div>
          </div>

          <div className="technology-stack h-full w-1/2">
            <p className=" text-4xl">Tools and Technologies</p>

            <div className=" flex items-center mt-4  justify-around w-full">
              <div className="grid-cols-1 gap-3.5 text-center text-xl grid grid-rows-4">
                <div className=" flex justify-center items-center">
                  <img
                    className="m-2"
                    height={20}
                    width={20}
                    src={express}
                    alt=" "
                  />
                  Express
                </div>

                <div className=" flex items-center">
                  <img
                    className=" m-2"
                    height={20}
                    width={20}
                    src={js}
                    alt=" "
                  />
                  JavaScript
                </div>
                <div className=" flex items-center">
                  <img
                    className=" m-2"
                    height={20}
                    width={20}
                    src={typescript}
                    alt=" "
                  />
                  TypeScript
                </div>

                <div className=" flex items-center">
                  <img
                    className=" m-2"
                    height={20}
                    width={20}
                    src={github}
                    alt=" "
                  />
                  GitHub
                </div>
              </div>
              <div className="grid-cols-1 text-center text-xl grid grid-rows-4 gap-3">
                <div className=" flex items-center">
                  <img
                    className=" m-2"
                    height={20}
                    width={20}
                    src={golang}
                    alt=" "
                  />
                  GoLang
                </div>
                <div className=" flex items-center">
                  <img
                    className=" m-2"
                    height={20}
                    width={20}
                    src={reactLogo}
                    alt=" "
                  />
                  React
                </div>
                <div className=" flex items-center">
                  <img
                    className=" m-2"
                    height={20}
                    width={20}
                    src={node}
                    alt=" "
                  />
                  Node
                </div>
              </div>
            </div>
          </div>

          {/* This is gihub logo and icon so use it later */}
          {/* <div className="w-1/2 flex text-lg flex-col items-center justify-center">
          <a
            target="_blank"
            className=" mt-4"
            href={gitHubData && gitHubData.html_url}
          >
            <img
              height={300}
              width={150}
              src={"https://avatars.githubusercontent.com/u/98574278?v=4"}
              alt="githublogo.jpg"
            />
          </a>
          <a
            target="_blank"
            className=" mt-4"
            href={gitHubData && gitHubData.html_url}
          >
            <p className="">{gitHubData && gitHubData.login}</p>
          </a>
        </div> */}
          {/* This is gihub logo and icon so use it later */}
        </div>
      </section>

      <section className=" flex">
        <div className=" backdrop-blur-sm w-1/2 rounded-4xl p-10 m-20 bg-blue-600/20 ">
          <p className=" text-[40px] ">Skills</p>

          <div className=" grid grid-cols-2">
            <div className=" text-[30px] flex flex-col gap-2 ">
              <div className=" mt-10">
                <p className=" text-[20px] ">Programming</p>
              </div>
              <div className="rounded-3xl border-[1px] w-fit p-2  gap-5  flex text-[20px] ">
                <p>JavaScript</p>
                <p>TypeScript</p>
                <p>Python</p>
              </div>
            </div>

            <div className=" text-[30px] flex flex-col gap-2 ">
              <div className=" mt-10">
                <p className=" text-[20px] "> Frontend</p>
              </div>
              <div className="rounded-3xl border-[1px] w-fit p-2  gap-5  flex text-[20px] ">
                <p>React</p>
                <p>Next.js</p>
                <p>Vite</p>
              </div>
            </div>

            <div className=" text-[30px] flex flex-col gap-2 ">
              <div className=" mt-10">
                <p className=" text-[20px] "> Frameworks</p>
              </div>
              <div className="rounded-3xl border-[1px] w-fit p-2  gap-5  flex text-[20px] ">
                <p>ContentFul</p>
                <p>Strapi</p>
                <p>Drizzle</p>
              </div>
            </div>

            <div className=" text-[30px] flex flex-col gap-2 ">
              <div className=" mt-10">
                <p className=" text-[20px] "> Backend</p>
              </div>
              <div className="rounded-3xl border-[1px] w-fit p-2  gap-5  flex text-[20px] ">
                <p>MongoDb</p>
                <p>Prisma ORM</p>
                <p>PostgreSQL</p>
              </div>
            </div>

            <div className=" text-[30px] flex flex-col gap-2 ">
              <div className=" mt-10">
                <p className=" text-[20px] "> DevOps</p>
              </div>
              <div className="rounded-3xl border-[1px] w-fit p-2  gap-5  flex text-[20px] ">
                <p>CICD</p>
                <p>Zest</p>
                <p>LightHouse</p>
                <p>SSG</p>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-1/2 bg-none flex justify-center">
          <div className="w-1/2 bg-none flex text-lg flex-col items-center justify-center">
            <a
              target="_blank"
              className=" mt-4"
              href={gitHubData && gitHubData.html_url}
            >
              <img
                className=" rounded-3xl"
                height={300}
                width={300}
                src={"https://avatars.githubusercontent.com/u/98574278?v=4"}
                alt="githublogo.jpg"
              />
            </a>
            <a
              target="_blank"
              className=" mt-4"
              href={gitHubData && gitHubData.html_url}
            >
              <p className="">{gitHubData && gitHubData.login}</p>
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className=" h-screen flex flex-col w-full">
          <div className="mx-20 backdrop-blur-sm border border-white/20 bg-orange-600/20 rounded-3xl p-5 h-full mt-5 overflow-x-hidden description card">
            <h2 className="text-4xl font-bold underline p-5">
              <a
                href="https://github.com/ImDhairya/leet-lab.git"
                target="_blank"
              >
                Leet Lab
              </a>
            </h2>

            {/* <div className=" flex justify-between items-center">
            <div className=" flex  items-center">
              <p className=" italic text-[30px] p-5">
                Uncanny Conculting Services
              </p>

              <p className=" italic text-[20px] p-5">Internship </p>
            </div>
            <div className="">
              <p className=" text-end italic text-[20px] p-5">
                Jan 2025 - Present{" "}
              </p>
            </div>
          </div> */}

            <div className="p-5 mb-5 text-2xl">
              <p>
                A powerful custom-built platform inspired by LeetCode, designed
                to facilitate real-time code execution, assessment, and
                problem-solving using modern technologies.
              </p>
            </div>

            <div className="p-5 space-y-4 text-lg leading-relaxed text-white">
              <h3 className="text-2xl font-semibold mb-2">🚀 Key Highlights</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  ✅ <strong>Multi-language Code Support:</strong> Integrated
                  with <span className="font-medium">Judge0</span>, allowing
                  users to write and execute code in multiple programming
                  languages.
                </li>
                <li>
                  🧪 <strong>Test Case Execution:</strong> Admins can create
                  custom problems and batch-submit multiple test cases per
                  problem for evaluation.
                </li>
                <li>
                  🔁 <strong>Asynchronous Polling:</strong> Implemented
                  efficient polling to handle Judge0 responses without blocking
                  the interface.
                </li>
                <li>
                  🛠 <strong>Admin Controls:</strong> Built secure interfaces for
                  managing problems, test cases, and monitoring submissions.
                </li>
                <li>
                  ⚙️ <strong>Technology Stack:</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-base">
                    <li>
                      Frontend: <span className="font-medium">React.js</span>
                    </li>
                    <li>
                      Backend: <span className="font-medium">Node.js</span>
                    </li>
                    <li>
                      ORM: <span className="font-medium">Prisma</span>
                    </li>
                    <li>
                      Database: <span className="font-medium">PostgreSQL</span>
                    </li>
                    <li>
                      Code Engine: <span className="font-medium">Judge0</span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;

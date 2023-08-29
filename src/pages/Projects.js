import Nav from "../components/header/Nav"
import Footer from "../components/footer/Footer"
import TextField from "../components/header/TextField"
import SummaryFrame from "../components/homepage/SummaryFrame"
import Project from "../components/projectPage/Project"
import Portfolio from "../components/projectPage/Portfolio"

const projectsData = [
    {
      pic: "./test-project.png",
      name: "BudgIT",
      shortDescr: "Mobile finance tracker",
      description:
            `A budgeting tool that automatically tracks all your bank accounts and provides a summary of your expenses. 
            Integration with banks is achieved through a secure third-party API, ensuring the safe flow of data to the application. 
            The development process includes creating design prototypes, selecting relevant technologies, development, and testing.
            `,
      gitRepo: "#",
      technologyLogos: [
        '/adobe-photoshop-2.svg',
        '/adobe-xd.svg',
        '/react-2.svg',
        '/spring-3.svg',
        '/postgresql.svg',
        '/aws-2.svg',
        '/jwtio-json-web-token.svg'
      ],
    },
    {
      pic: "./test-project.png",
      name: "BudgIT",
      shortDescr: "this is budgeting tool",
      description:
        "this is budgeting tool... (your long description)",
      gitRepo: "#",
      technologyLogos: [
        '/react-2.svg',
        '/favicon.ico',
        '/favicon.ico',
      ],
    },
  ];
  
  function Projects() {
    return (
      <div>
        <Nav />
        <TextField text="Start your digital journey now with us." />
        {/* Projects page content */}
        <div className="pt-20 bg-neutral-100">
          <SummaryFrame title={"Our latest work"}>
            <div className="flex-col pt-20">
              {projectsData.map((project, index) => (
                <Project key={index} {...project} />
              ))}
            </div>
            <Portfolio />
          </SummaryFrame>
        </div>
        <Footer />
      </div>
    );
  }

export default Projects;
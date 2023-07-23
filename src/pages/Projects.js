import Nav from "../components/header/Nav"
import Footer from "../components/footer/Footer"
import TextField from "../components/header/TextField"
import SummaryFrame from "../components/homepage/SummaryFrame"
import Project from "../components/projectPage/Project"
function Projects() {
    return(
        <dev>
            <Nav />
            <TextField text="Start your digital jorney now with us."/>
            {/* Projects page content */}
            <div className='pt-20 bg-neutral-100'>
                <SummaryFrame title={'About us'}>
                    <div className="flex-col">
                        <Project 
                        pic={"./test-project.png"} 
                        name={"BudgIT"} 
                        shortDescr={"this is budgeting tool"}
                        description={"this is budgeting tool this is budgeting tool this is budgeting tool this is budgeting tool this is budgeting tool this is budgeting tool this is budgeting tool this is budgeting tool this is budgeting tool this is budgeting tool this is budgeting tool this is budgeting tool this is budgeting tool this is budgeting tool this is budgeting tool"}
                        gitRepo={"#"}
                        />
                        <Project 
                        pic={"./test-project.png"} 
                        name={"BudgIT"} 
                        shortDescr={"this is budgeting tool"}
                        description={"this is budgeting tool this is budgeting tool this is budgeting tool this is budgeting tool this is budgeting tool this is budgeting tool this is budgeting tool this is budgeting tool this is budgeting tool this is budgeting tool this is budgeting tool this is budgeting tool this is budgeting tool this is budgeting tool this is budgeting tool"}
                        gitRepo={"#"}
                        />
                        <Project 
                        pic={"./test-project.png"} 
                        name={"BudgIT"} 
                        shortDescr={"this is budgeting tool"}
                        description={"this is budgeting tool this is budgeting tool this is budgeting tool this is budgeting tool this is budgeting tool this is budgeting tool this is budgeting tool this is budgeting tool this is budgeting tool this is budgeting tool this is budgeting tool this is budgeting tool this is budgeting tool this is budgeting tool this is budgeting tool"}
                        gitRepo={"#"}
                        />
                    </div>
                </SummaryFrame>
            </div>
            <Footer />
        </dev>
    )
}

export default Projects;
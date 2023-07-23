const Project = ({ pic, name, shortDescr, description, gitRepo }) => {
    return(
        <section className="content-center items-center">
            <div className="container mx-auto content-center items-center text-center">
                <div className="flex flex-col md:flex-row items-center justify-center max-w-screen-md mx-auto mb-40">
                    <div className="md:flex-1">
                        <div className="h-96 w-96 md:h-80 md:w-full overflow-hidden rounded-3xl shadow-md relative">
                            <img src={pic} alt="" className="object-contain w-full h-full transition-transform duration-300 transform scale-130 hover:scale-110" />
                        </div>
                    </div>
                    <div className="md:ml-0 mt-10 md:mt-0 md:mr-10 md:flex-1 bg-white rounded-md shadow-md p-10 z-10">
                        <h2 className="text-2xl font-bold mb-4">{name}</h2>
                        <h3 className="text-lg mb-6">{shortDescr}</h3>
                        <p className="text-gray-600 mb-8">{description}</p>
                        <div className="flex gap-4">
                            <a href={gitRepo} className="px-4 py-2 bg-purple-600 text-white rounded-full">Know More</a>
                            <a href={gitRepo} className="px-4 py-2 bg-white border border-purple-600 text-purple-600 rounded-full flex items-center justify-center gap-1">
                            <span>Preview</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project;
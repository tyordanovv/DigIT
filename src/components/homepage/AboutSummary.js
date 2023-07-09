import Button from "../button/Button"

const AboutSummary = () => {
    return (
        <div class="px-7 sm:px-6 md:px-8 lg:px-28 flex flex-col mx-auto">
            <div class="flex flex-col mb-6 pr-10">
                <h1 class="text-2xl font-bold lg:text-3xl pr-10">
                Inefficient manual workflows are slowing down your business operations, leading to wasted time and resources.
                </h1>
                <br/>
                <h2 class="mt-2 text-2xl text-neutral-900 font-light lg:text-4xl">
                DigIT will help you streamline your business operations.
                </h2>
            </div>
            <div class="flex flex-col justify-between flex-1 mt-4 md:mt-0">
            <p class="mb-4 md:font-light text-neutral-500 md:text-2xl">
                We offer custom reliable solutions, which streamline your processes, automate tasks, and maximize efficiency, ensuring your business operates at its full potential
                </p>
                <Button text={"Learn more"} link={"/about"}/>
            
            </div>
        </div>
    )
}
export default AboutSummary;
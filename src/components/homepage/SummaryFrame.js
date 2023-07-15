const SummaryFrame = ({ children, title }) => {
    return (
        <div>
            <div class="bg-neutral-100 flex justify-center  relative py-32 md:px-12 md:py-44">
                <div class="flex justify-center gap-2 items-center mb-6 absolute top-0 p-6 select-none">
                    <h3 class="text-3xl md:text-5xl opacity-60 md:opacity-40 font-semibold text-df-accent">
                        {title}
                    </h3>
                </div>
                {children}
            </div>
        </div>
    )
}
export default SummaryFrame;
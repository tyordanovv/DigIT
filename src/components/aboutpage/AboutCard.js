function AboutCard({ title, text }){
    return (
        <div className="relative flex flex-col items-center max-w-md md:px-8 md:py-6 rounded-lg md:max-w-sm group explain-item">
            <div className="w-full pb-5 border-b border-df-bg-4 font-semibold">
                <h2 className="text-lg">{title}</h2>
            </div>
            <div className="pt-5 pb-8">
                <p className="text-base text-neutral-800">{text}</p>
            </div>
        </div>
    )
}

export default AboutCard;
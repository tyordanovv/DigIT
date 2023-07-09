function TextField({ text }){
    return(
        <div className="relative h-screen/2">
            <div
            className="opacity-30 absolute inset-0 bg-cover bg-no-repeat"
            style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/Mauve.jpg)`,
            zIndex: -2,
            }}
            ></div>
            <div className="h-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12">
                <p className="text-white text-3xl font-bold text-center px-5 py-20 sm:p-40 ">
                    {text}
                </p>
            </div>
        </div>
    )
}

export default TextField;
function HeroImage() {
  return (
    <div className='relative h-screen'>
      <div
        className='absolute inset-0 bg-cover bg-no-repeat'
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/Mauve.jpg)`,
          zIndex: -2,
        }}
      />
      <div className='h-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12'>
        <p className='text-white text-6xl font-bold text-center py-10'>
          Welcome to DigIT Solutions
        </p>
        <p className='text-white text-6xl text-center font-light '>
          Unleash the digital potential of your business
        </p>
      </div>
    </div>
  )
}

export default HeroImage

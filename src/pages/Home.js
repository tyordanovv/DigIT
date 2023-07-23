import Nav from '../components/header/Nav'
import HeroImage from '../components/homepage/HeroImage'
import Footer from '../components/footer/Footer'
import SummaryFrame from '../components/homepage/SummaryFrame'
import AboutSummary from '../components/homepage/AboutSummary'
import ServicesSummary from '../components/homepage/ServicesSummary'

function Home() {
  return (
    <dev>
      <Nav />
      <HeroImage />
      {/* Main page content */}
      <div className='pt-20 bg-neutral-100'>
        <SummaryFrame title={'About us'}>
          <AboutSummary />
        </SummaryFrame>
        <SummaryFrame title={'Our Services'}>
          <ServicesSummary />
        </SummaryFrame>
      </div>
      <Footer />
    </dev>
  )
}
export default Home

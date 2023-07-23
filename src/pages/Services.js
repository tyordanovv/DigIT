import Footer from '../components/footer/Footer'
import Nav from '../components/header/Nav'
import TextField from '../components/header/TextField'
import ServiceDescription from '../components/servicesPage/ServiceDescription'
import SummaryFrame from '../components/homepage/SummaryFrame'

function Services() {
  return (
    <div>
      <Nav />
      <TextField text='Your Tech Partner That Helps You Accelerate Digitalisation' />
      <SummaryFrame title={'Web/Mobile Development'}>
        <ServiceDescription
            name={'Web/Mobile Development'}
            // picture={card.picture}
            description={'We specialize in immersive web and mobile application development. Our agile development approach ensures rapid deployment of scalable solutions.'}
            bulletPoints={ ['React.js', 'React Native', 'Node.js', 'AWS', 'DevOps']}
        />
      </SummaryFrame>
      <SummaryFrame title={'Digital Transformation & Modernization'}>
        <ServiceDescription
            name={'Digital Transformation & Modernization'}
            // picture={card.picture}
            description={'We offer digital transformation and modernization services to drive your business forward. Our expertise includes CMS development, application modernization, and system integration.'}
            bulletPoints={ ['CMS development', 'System integration', 'Application modernization', 'Workflow Optimization', 'DevOps']}
        />
      </SummaryFrame>
      <SummaryFrame title={'UI/UX Design'}>
        <ServiceDescription
            name={'UI/UX Design'}
            // picture={card.picture}
            description={'Our UI/UX design services create visually captivating and functionally elegant interfaces. We prioritize user-centric design principles and employ UI/UX prototyping techniques.'}
            bulletPoints={ ['UI/UX prototyping', 'Wireframing']}
        />
      </SummaryFrame>
      <SummaryFrame title={'Enterprise Software Development'}>
        <ServiceDescription
            name={'Enterprise Software Development'}
            // picture={card.picture}
            description={'We specialize in enterprise software development that integrates seamlessly with existing infrastructure. Our services encompass project scoping, API integration, and custom CRM development.'}
            bulletPoints={ ['Java', 'Spring', 'API integration', 'Custom CRM development']}
        />
      </SummaryFrame>
      {/* <SummaryFrame title={'aaaaaa'}>
        <ServicesField />
      </SummaryFrame> */}
      <Footer />
    </div>
  )
}

export default Services
import Backgroundslider from "../components/Backgroundslider"
import Header from "../components/Header"
import Newsletter from "../components/Newsletter"
import Steps from "../components/Steps"
import Testimonials from "../components/Testimonials"
import Upload from "../components/Upload"

const Homepage = () => {
  return (
    <>
     <Header/>
     <Steps/>
     <Backgroundslider/>
     <Testimonials/>
     <Upload/>
     <Newsletter/>
    </>
  )
}

export default Homepage

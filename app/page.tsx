import Navbar from "../Components/reusable-components/Navbar";
import Hero from "../Components/reusable-components/Hero";
import Cardsec1 from "../Components/reusable-components/Cardsec1";
import Footer from "../Components/reusable-components/Footer";

export default function Home() {
  return (
    <body>
      <Navbar />
      <Hero />
      <Cardsec1 />
      {/* <div className='relative h-screen bg-gray-900 z-50'>
        hllh
      </div> */}
      <Footer />
    </body>
  );
}

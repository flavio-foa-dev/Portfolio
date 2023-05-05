import Navigation from "../components/Navagation/Navigation"
import SubHero from "../components/SubHero/SubHero"
import banerHeroSobre from "../assets/banerHeroSobre.png"
import Hero from "../components/Hero/Hero"
import SobreMim from "../components/SobreMim/SobreMim"
import Footer from "../components/Footer/Footer"


export default function Sobre() {
  return (
    <>
      <Navigation />
      <Hero />
      <SubHero title={"Sobre mim"} photo={banerHeroSobre}/>
      <SobreMim />
      <Footer/>


    </>
  )
}

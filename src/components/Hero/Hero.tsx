import circle from "../../assets/circle.png"
import minhafoto from "../../assets/minhafoto.png"
import styles from "./Hero.module.css"

export default function Hero() {
  return (
    <div className={`${styles.hero} bg-AzulEscuro`}>

      <div className="">
        <h1 className="text-6xl mb-5 mt-6">My Portfolio</h1>
        <p className="text-2xl mb-6">
          Boas vindas ao meu portfolio pessoal! Eu sou Flavio Andrade, programador Full Stack. Aqui compartilho vários conhecimentos.
        </p>
        <p className="text-2xl">
        Explore meu portfolio e descubra como minhas ideias ganham vida através dos meus projetos.
        </p>
      </div>

      <div className="relative h-80">
        <img src={circle} alt="ciculo colorido" className="absolute right-4 bottom-0 w-80" />
        <img src={minhafoto} alt="foto Flavio Andrade" className="absolute rounded-full right-0 bottom-0 top-14 w-72" />
      </div>

    </div>
  )
}

import { Header } from '../components/Header'
import sobreImg from '../assets/sobre.svg'
import biorenataImg from '../assets/biorenata.png'



import styles from '../styles/pages/sobre.module.css'

export function Sobre() {
  return (
    <>
    
    <Header text="Minha História" image={sobreImg} />

    
    <div>

        <br/>
        <h1 className={styles.tituloBio} > Renata Alves, prazer!</h1>
        <br/>
        <img className={styles.fotobio} src={biorenataImg} alt="Minha Figura" />       
        <br/>
        <p  className={styles.textoBio} > 
        Carioca, formada em produção de vestuário e marketing. Empreendo na área de moda há cerca de 4 anos através da "Recusa" que é minha marca de moda agênero.
        Sou professora de costura e modelagem em um projeto para mulheres no Morro da Providência de onde sou cria.
        Minha trajetoria com a tecnologia começa no cruso de formação basica da PretLab, onde dei meu primeiro "Olá Mundo", 
        fiz meu primeiro site portifólio, entre outras muitas coisas. E esse é só o inicio de uma longa jornada. 
        </p>
        
    </div>
    
    </>
  )
}
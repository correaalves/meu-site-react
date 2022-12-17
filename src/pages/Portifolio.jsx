import { Header } from '../components/Header'
import portifolioImg from '../assets/portifolio.svg'


import styles from '../styles/pages/portifolio.module.css'

export function Portifolio() {
  return (
    <>
    
    <Header text="Meus Projetos" image={portifolioImg} />
    <br/>
 
    <div>

      <h1 className={styles.tituloProjeto} > PROJETOS </h1>
      
    </div>

    <br/>

    <div>
      <h1 className={styles.projetos}> Meu Portifólio - Aula HTML e CSS </h1>
      <br/>
    <p>
      Projeto de construção de site/portífolio do modulo de HTMl e CSS do curso da PretaLab
      <br/>
      <a href="https://renata-alves-portifolio.netlify.app/" target="_blank">Portifolio HTML - CSS</a>

    </p>     

    </div>

    <br/>

    <div>
      <h1 className={styles.projetos}> Lista de Tarefas Modulo JavaScript </h1>
      <br/>
    <p>
      Projeto de construção de lista de tarefas Javascript do curso da PretaLab
      <br/>
      <a href="https://lista-de-tarefas-renata.netlify.app/" target="_blank"> Lista de tarefas Javascript </a>

    </p>
        
    </div>

    <br/>

    <div>
      
      <h1 className={styles.projetos}> Site feito em React </h1>
      <br/>
    <p>
      Projeto de construção de site em react do curso da PretaLab
      <br/>
      <a href="https://lista-de-tarefas-renata.netlify.app/" target="_blank"> Site React </a>

    </p>
        
    </div>

    <br/>
    
    
        
    </>
  )
}
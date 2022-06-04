import styles from '../styles/Home.module.css'

export async function getServerSideProps(){
  const env = process.env.TEST
  return {
    props:{env}
  }

}

export default function Home(props) {
  
  return (
    <div className={styles.container}>
    <h1>Esto es un test sobre las variables de entorno</h1>
    {props.env}
    </div>
  )
}

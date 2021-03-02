import MainSection from './MainSection'
import img from '../assets/main-section-img.jpg'
import img2 from '../assets/main-section-img1.jpg'

const Main = () => {
  return(
    <main>
      <h2>Igniting dreams since 1895</h2>
      <div className="hero">
        <MainSection  title="Introducing collection 1" pargph="Discover limitless possibility of crystal creativity that defies convention." button="Discover more" img={img} />
        <MainSection  title="Discover our Essential Collection" pargph="Meet your new everyday favorites. These beautifully-created designs are versatile enough to wear day and night, and special enough to attract attention. Timeless, elegant, essential." button="Shop now" img={img2}/>
      </div>
    </main>
  )
}

export default Main


const MainSection = (props) => {
  return(
    <div className="main-section">
      <div className="main-section-text">
        <h2>{props.title}</h2>
        <p>{props.pargph}</p>
        <button>{props.button}</button>
      </div>
      <img src={props.img} />
    </div>
  )
}

export default MainSection

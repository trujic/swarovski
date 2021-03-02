const MainSection = (props) => {
  return(
    <div className="main-section">
      <h2>{props.title}</h2>
      <p>{props.pargph}</p>
      <button>{props.button}</button>
    </div>
  )
}

export default MainSection

import './style.css'
const Languageoption = (props) => {
    return(
        <div className="selectLang">
          <select onChange={props.onChange}>
            <option value={"ru"}>Ru</option>
            <option value={"en"}>En</option>
          </select>
        </div>
    )
}
export default Languageoption;
import { PropTypes } from "prop-types"
export const GifItem = ({url, title}) => {
    // console.log(props.id);
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}

GifItem.propTypes = {
  url: PropTypes.string.isRequired, 
  title: PropTypes.string.isRequired,
}

// Añadir proptypes: title y url obligatorio
//evaluar snapshot

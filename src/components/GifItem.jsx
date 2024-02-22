
export const GifItem = (props) => {
    // console.log(props.id);
  return (
    <div className="card">
      <img src={props.url} alt={props.title} />
      <p>{props.title}</p>
    </div>
  )
}

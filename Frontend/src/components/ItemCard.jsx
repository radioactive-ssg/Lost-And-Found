import noImage from "../assets/no-image.png";

export default function Itemcard(props) {
  return (
    <a href={"/find/details/" + props.id} data-aos="fade-up">
      <div className="card">
        <div className="card-img">
          <img
            src={props.image || noImage} // Use the Cloudinary URL or fallback to noImage
            alt={props.title || "No Image Available"}
          />
        </div>
        <div className="card-desc">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
      </div>
    </a>
  );
}

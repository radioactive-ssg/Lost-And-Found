import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import axios from "axios";
import { useParams } from "react-router-dom";
import { api } from "../config";
import LoadingIcon from "../components/LoadingIcon";
import noimg from "../assets/no-image.png";

function Details() {
  const [item, setItem] = useState("");
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  // const override: CSSProperties = {
  //   display: "block",
  //   borderColor: "#fdf004",
  //   position: "absolute",
  //   top: "50%",
  //   left: "50%",
  //   transform: "translate(-50%,-50%)",
  // };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${api}/item/${id}`)
      .then((res) => {
        setItem(res.data);
        console.log(res.data);
        console.log("Phone Number:", res.data.phoneno);
        console.log("Email:", res.data.email);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main id="detailspage">
      <Navbar />
      <section>
        {loading ? (
          // <HashLoader
          //   color="#fdf004"
          //   loading={loading}
          //   cssOverride={override}
          //   size={50}
          //   aria-label="Loading Spinner"
          //   data-testid="loader"
          // />
          <LoadingIcon />
        ) : (
          <div className="details-card">
            <div className="img-container">
              <img
                src={item.image || noimg} // Use the Cloudinary URL or fallback to noimg
                alt={item.title || "No Image Available"}
              />
            </div>

            <div className="action-container">
              <a href={item.phoneno ? `tel:${item.phoneno}` : "#"} onClick={(e) => !item.phoneno && e.preventDefault()}>
                <CallIcon /> Call
              </a>
              <a href={item.email ? `mailto:${item.email}` : "#"} onClick={(e) => !item.email && e.preventDefault()}>
                <EmailIcon /> Email
              </a>
            </div>
            <h2>{item.title}</h2>
            <div className="details-container">
              <p>Founder : </p>
              <p>{item.name}</p>
            </div>

            <div className="details-container">
              <p>Location : </p>
              <p>{item.location || "Location not provided"}</p> {/* Display location */}
            </div>

            <div className="details-container desc">
              <p>{item.description}</p>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

export default Details;

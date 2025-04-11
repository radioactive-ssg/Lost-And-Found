import { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { api } from "../config";

export default function Post() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState("");
  const [location, setLocation] = useState(""); // New state for location
  const [btn, setBtn] = useState(true);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const submitData = async (e) => {
    e.preventDefault();
    setBtn(false);
    const formData = new FormData();

    formData.append("name", name);
    formData.append("phoneno", phone);
    formData.append("email", email);
    formData.append("title", title);
    formData.append("description", desc);
    formData.append("file", file);
    formData.append("location", location); // Append location to formData

    await axios
      .post(`${api}/item`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(() => {
        enqueueSnackbar("Item Posted Successfully", { variant: "success" });
        navigate("/find");
      })
      .catch((err) => {
        console.log(err);
        enqueueSnackbar("Error: " + (err.response?.data?.message || "Something went wrong"), { variant: "error" });
        setBtn(true);
      });
  };

  return (
    <main id="postItem">
      <Navbar />
      <section>
        <h1 className="lfh1">Post Found Item</h1>
        <div className="page-description">
          Help reunite lost items with their owners by providing detailed information.
        </div>

        <div className="form-container">
          <h2>📋 Item Information Form</h2>
          
          <form className="form" encType="multipart/form-data">
            <div className="input-container" 
                onMouseEnter={() => handleHover('name')} 
                onMouseLeave={handleLeave}>
              <label htmlFor="name" className={isHovered === 'name' ? 'label-active' : ''}>Full Name </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={name ? 'has-value' : ''}
              />
            </div>
            
            <div className="input-container"
                onMouseEnter={() => handleHover('email')} 
                onMouseLeave={handleLeave}>
              <label htmlFor="email" className={isHovered === 'email' ? 'label-active' : ''}>Email Address </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={email ? 'has-value' : ''}
              />
            </div>
            
            <div className="input-container"
                onMouseEnter={() => handleHover('phone')} 
                onMouseLeave={handleLeave}>
              <label htmlFor="phone" className={isHovered === 'phone' ? 'label-active' : ''}>Phone Number </label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter your contact number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={phone ? 'has-value' : ''}
              />
            </div>
            
            <div className="input-container"
                onMouseEnter={() => handleHover('title')} 
                onMouseLeave={handleLeave}>
              <label htmlFor="title" className={isHovered === 'title' ? 'label-active' : ''}>Item Title </label>
              <input
                type="text"
                id="title"
                placeholder="Brief name of the item you found"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={title ? 'has-value' : ''}
              />
            </div>
            <div className="input-container">
              <label htmlFor="">Location Where Item Was Found</label>{" "}
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="input-container">
              <label htmlFor="">Description </label>{" "}
              <textarea onChange={(e) => setDesc(e.target.value)} value={desc}>
                {desc}
              </textarea>
            </div>
            
            <div className="input-container file-container"
                onMouseEnter={() => handleHover('file')} 
                onMouseLeave={handleLeave}>
              <label htmlFor="file" className={isHovered === 'file' ? 'label-active' : ''}>Upload Item Image </label>
              <div className="file-input-wrapper">
                <input
                  type="file"
                  id="file"
                  accept="image/*"
                  onChange={(e) => setFile(e.target.files[0])}
                  name="file"
                />
                {file && <span className="file-selected">✓ Image selected</span>}
              </div>
            </div>
            <div className="input-container">
              {btn ? (
                <button type="submit" className="submitbtn" onClick={submitData}>
                  Post
                </button>
              ) : (
                <button className="submitbtn">Posting...</button>
              )}
            </div>
          </form>
        </div>
      </section>
      </main>
  );
}
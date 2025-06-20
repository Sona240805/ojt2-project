import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import './style.css'
import { Link } from "react-router-dom";

const HomePage = () => {
    return(
        <div>
                <Header/>
                <div className="page-container">
                    <div className="picture">
                        <img src="Images/college-banner-Cz0xylpt.png" width="100%" height="400px" id="hero-banner-image"></img>

                        <div className="font-image">

                            <h1>Welcome to Vivekanand College!</h1>
                            <p>Your journey to excellence starts here.</p>
                            <Link to="/addmissionpage" className="btn">Apply now</Link>
                        </div>
                    </div>
                <p>**Vivekanand College is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in [Year of Establishment, e.g., 1980], we have proudly served generations of students, empowering them to achieve their full potential.</p>
      <p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>
      <h2>Why Choose Vivekanand College?</h2>
      <ul>
        <li>
          **Legacy of Excellence:** Decades of commitment to quality education.
        </li>
        <li>**Experienced Faculty:** Learn from renowned experts and passionate educators.</li>
        <li>**Holistic Development:** Focus on co-curricular activities, sports, and community service.</li>
        <li>**Modern Facilities:** Well-equipped labs, expansive library, and comfortable campus.</li>
        <li>**Strong Placements:** Excellent career opportunities with leading companies.</li>
        </ul>
        <h2>Campus Life & Facilities</h2>
        <div className="gallery">
            <img src="/Images/colleg.jpeg" width="40%" height="200px"></img>
         <img src="/Images/campus-life-Crkero7B.jpg" width="40%" height="200px"></img>
         <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>
         </div>
         <div className="wo">
            <p>Ready to explor our courses?</p>
            <Link to="/coursespage" className="btn">Explore courses</Link>
         </div>
         
         </div>
            <Footer/>
                
        </div>
    )
}

export default HomePage

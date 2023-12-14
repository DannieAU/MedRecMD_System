import './About.css';
import pic1 from '../images/About-1.png';
import pic2 from '../images/About-2.png';
import pic3 from '../images/About-3.png';
import pic4 from '../images/About-4-1.png';
import pic5 from '../images/About-4-2.png';
import pic6 from '../images/About-5.png'

export const About = () => {
  return (
    <>
      <div className="Start_About">
        <div className='Start_About-Text'>
          <h1>Pioneering a New <br/>
          Era in Healthcare<br/>
          Management</h1>
          <p>JOIN US AS WE DELVE INTO OUR STORY,</p>
          <p>OUR ASPIRATIONS, AND THE VALUES THAT</p>
          <p>GUIDE US IN OUR QUEST TO REVOLUTIONIZE</p>
          <p>HEALTHCARE MANAGEMENT</p>
        </div>
        <div className='Start_About-Image'>
          <img src={pic1} alt="pic1" />
        </div>
      </div>
      <div className='Body_About'>
        <div className="Body_About-About">
          <div className='Body_About-About-Text'>
          <h1>About Us</h1>
          <h2>Our Mission</h2>
            <p> 
              At MedRecords Management Solutions, we are dedicated
              to revolutionizing the management of medical records. Our
              mission is to streamline healthcare processes, ensuring
              that patients receive the best care possible. We achieve this by providing cutting-edge
              digital solutions that enhance the efficiency and accuracy
              of medical record keeping.
            </p>
            <h2>Our Vision</h2>
            <p>
              Our vision is to become a leading force in
              healthcare innovation, transforming the
              way medical records are managed
              worldwide. We aim to create a system
              where healthcare providers can access and
              share vital patient information seamlessly,
              leading to improved patient outcomes and
              a higher standard of healthcare services.
            </p>
          </div>
          <div className='Body_Values'>
            <h2>Our Values</h2>
              <p><b>Innovation: </b>
              Constantly seeking new ways to improve healthcare management through technology.
              </p>
              <p><b>Integrity: </b>
              Upholding the highest standards of ethics and confidentiality in handling medical records
              </p>
              <p><b>Efficiency: </b>
              Streamlining healthcare processes to save time and reduce errors
              </p>
              <p><b>Security: </b>
              Ensuring the utmost protection of sensitive patient data.
              </p>
              <p><b>Collaboration: </b>
              Working closely with healthcare professionals to understand and address their needs.
              </p>
          </div>
          <div className="Body_About-Img6">
            <img src = {pic6} alt ="pic6"/>
          </div>
        </div>
        <div className="Body_About-Img">
          <div className="Body_About-Img2">
            <img src = {pic2} alt ="pic2"/>
          </div>
          <div className="Body_About-Img3">
            <img src = {pic3} alt ="pic3"/>
          </div>
          <div>
            <img className="Body_About-Img4"src = {pic4} alt ="pic4"/>
            <img className="Body_About-Img5" src = {pic5} alt ="pic5"/>
          </div>
          <div className="Body-Commitment">
            <h2>Our Commitment to Healthcare</h2>
              <p><b>At MedRMS, we are committed to:</b></p>
              <p>Developing user-friendly, secure, and efficient digital solutions for healthcare providers.</p>
              <p>Fostering partnerships with healthcare professionals to ensure our products meet the highest standards.</p>
              <p>Continuously updating our system in response to the evolving needs of the healthcare industry.</p>
              <p>Providing exceptional support and training to all our users, ensuring a seamless transition to digital healthcare management.</p>
          </div>
        </div>
      </div>
      <div className="Body_About-Last">
        <h1>Join Us on Our Journey</h1>
          <p>WE ARE MORE THAN JUST A COMPANY; WE ARE A TEAM OF INNOVATORS,<br/>
          THINKERS, AND HEALTHCARE ENTHUSIASTS COMMITTED TO MAKING A <br/>
          DIFFERENCE. JOIN US AS WE CONTINUE TO PUSH THE BOUNDARIES OF WHAT'S<br/>
          POSSIBLE IN HEALTHCARE MANAGEMENT.<br/></p>
      </div>

    </>
  )
}

export default About;
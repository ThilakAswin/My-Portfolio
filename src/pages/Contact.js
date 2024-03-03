import { Link } from "react-router-dom";

function Contact(){
    return<>
    <div className="contactArea">
    <h1>Contact Details</h1>
    <div className="contactDetails">
        <Link to="https://github.com/ThilakAswin" target="_blank">GitHub</Link>
        <Link to="https://www.linkedin.com/in/thilak-aswin-thiruvalur-a4b165176/" target="_blank">LinkedIn</Link>
        <Link to="mailto:thilakaswin33@gmail.com" target="_blank">Mail</Link>
    </div>
   
    </div>
        
    </>
}

export default Contact;
import { Link } from "react-router-dom";

function handleClick(){
        const pdfUrl = "ThilakAswin_Resume.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "ThilakAswin_Resume.pdf"; 
        document.body.appendChild(link);
        link.click();
        
}

function Navbar(){
    return<>
        <nav className="nav">
            <Link className="title" to='/'>Thilak Aswin</Link>
            <ul>
                <li><Link to="/achievements">Achievements</Link></li>
                <button className="btn" onClick={handleClick}>Resume</button>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    </>
}

export default Navbar;
function Home(){
    
    let hardSkills = ["Java","OOP","MySQL","Data Structures","HTML,CSS,Javascript","NodeJS","ReactJS","MongoDB","Mongoose","API","Git and Version Control"]
    let softSkills = ["Observation","Communication","Leadership","Decision Making"]
    let educationDetails = ["Thiagarajar College of Engineering Bachelor of Engineering - Electronics and Communication Engineering Completed in 2023",
 " CEOA Matric. Hr. Sec School Higher Secondary Education , BioMaths Completed in 2019","Kendriya Vidyalaya, Sivaganga Senior Secondary Education Completed in 2017"]
    const intro = "Hi, I am Thilak Aswin, Proffesional Web Developer.Intersted in Front End development Using React."

    return<>
        <div className="homeArea">
            <img src="mine.jfif" alt="Thilak"></img>
            {intro}
        </div>
        <div className="homeDetails">
                
                <h3>Eduaction</h3>
                <ul>
                    {educationDetails.map(text => <li>{text}</li>)}
                </ul>
                <h3>Hard Skills</h3>
                <ul>
                    {hardSkills.map(skill => <li>{skill}</li>)}
                </ul>
                <h3>Soft Skills</h3>
                <ul>
                        {softSkills.map(skill => <li> {skill} </li>)}
                </ul>
            </div>
    </>
}

export default Home;
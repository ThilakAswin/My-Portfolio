

function Achievements(){

 const certifications = ["Successfully completed the course SQL for Beginners: Learn SQL using MySQL and Database Design on Udemy. \n ",
"Successfully completed the course Introduction to Data Structures & Algorithms in Java on Udemy. \n ",
"Successfully completed the course Modern Java-Learn Java 8 features by coding it on Udemy. \n ",
"Successfully completed the course Agile Fundamentals: Including Scrum & Kanban on Udemy."]

const prizes = ["Won Second Prize on MindSpark Hackathon Organized By IUCEE",
"Won Third Prize on Intra College System Thinking Expo","Regional Finals Qualifier on Chennai Tech-Showcase"]
    return<>
    <div className="achievementsArea">
        <h3>Certifications</h3>
        <ul>
            {certifications.map(detail => 
                <div className="newLine"><li>{detail}</li></div>
        )}
        </ul>
        <h3>Prizes</h3>
        <ul>
            {prizes.map(prize => <li>{prize}</li>)}
        </ul>
    </div>
    </>
}

export default Achievements;
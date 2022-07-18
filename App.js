import mysql from 'mysql2';
import fs from 'fs';

const db  = mysql.createConnection({
    host: "bttsprintdev.cs.uic.edu",
    user: "btt",
    password: "Btt1234!",
    database: "BTT_TEST"
  });
  
db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");  
});



// let trackChange = "select * from BTT_TEST.student_semester_data where UIN = 669462624";
var track ;

let query1 = 
"select * from BTT_TEST.student_semester_data where  `Primary Curr Major Name` in ('Data Science', 'Computer Science', 'Math & Computer Science', 'Math and Computer Science', 'Computer Sci & Linguistics', 'Liberal Arts - Pre-CS & Ling') or   `Primary Curr Minor 1 Name` in ('Data Science', 'Computer Science', 'Math & Computer Science', 'Math and Computer Science', 'Computer Sci & Linguistics', 'Liberal Arts - Pre-CS & Ling') or   `Primary Curr Minor 2 Name` in ('Data Science', 'Computer Science', 'Math & Computer Science', 'Math and Computer Science', 'Computer Sci & Linguistics', 'Liberal Arts - Pre-CS & Ling') " ;
db.query(query1, function (err, result, fields) {
    if (err) throw err;
    fs.writeFileSync('Tech_Discipline.json', JSON.stringify(result,undefined,2));
    //console.log(result);
    track = result;
    const myObj = JSON.parse(track);

    for (let i =0; i<result.length; i++) {
        track[i] = {UIN: track[i].UIN}
    }
    // console.log(track);
    //console.log(Object.keys(result));
    
  });




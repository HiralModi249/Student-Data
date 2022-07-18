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


let courses = ["Computer Sci & Linguistics", "Computer Science", 
                    "Engineering - Pre-CS & Design", 
                    "Engineering - Pre-CS & Data Science",
                     "Data Science" ];

function trackChange(track) {
  for (let i =0; i<track.length; i++) {
    for (let j =1; j<track.length-1; j++) {
      for (let k =0; k<6; k++) {
        if((courses[k] == track[i]['Primary Curr Major Name']) && (courses[k] != track[j]['Primary Curr Major Name'])) {
          track[i] = {UIN: track[i].UIN, Term: track[i]['Term Code'], Major: track[i]['Primary Curr Major Name'],
                    ChangedTerm: track[j]['Term Code'], ChangedMajor: track[j]['Primary Curr Major Name']}
          //console.log('here');
        }
        if((courses[k] == track[i]['Primary Curr Minor 1 Name']) && (courses[k] != track[j]['Primary Curr Minor 1 Name'])) {
          track[i] = {UIN: track[i].UIN, Term: track[i]['Term Code'], Minor_1: track[i]['Primary Curr Minor 1 Name'],
                    ChangedTerm: track[j]['Term Code'], ChangedMinor_1: track[j]['Primary Curr Minor 1 Name']}
          //console.log('here');
        }
        if((courses[k] == track[i]['Primary Curr Minor 2 Name']) && (courses[k] != track[j]['Primary Curr Minor 2 Name'])) {
          track[i] = {UIN: track[i].UIN, Term: track[i]['Term Code'], Minor_2: track[i]['Primary Curr Minor 2 Name'],
                    ChangedTerm: track[j]['Term Code'], ChangedMinor_2: track[j]['Primary Curr Minor 2 Name']}
          //console.log('here');
        }
        else {
          console.log('NO STUDENT CHANGED THEIR MAJOR OR MINOR');
        }
      }
    }
  }
  return track;
}

// let query1 = 
// "select * from BTT_TEST.student_semester_data where  `Primary Curr Major Name` in ('Data Science', 'Computer Science', 'Math & Computer Science', 'Math and Computer Science', 'Computer Sci & Linguistics', 'Liberal Arts - Pre-CS & Ling') or   `Primary Curr Minor 1 Name` in ('Data Science', 'Computer Science', 'Math & Computer Science', 'Math and Computer Science', 'Computer Sci & Linguistics', 'Liberal Arts - Pre-CS & Ling') or   `Primary Curr Minor 2 Name` in ('Data Science', 'Computer Science', 'Math & Computer Science', 'Math and Computer Science', 'Computer Sci & Linguistics', 'Liberal Arts - Pre-CS & Ling') " ;

let query1 = "select * from BTT_TEST.student_semester_data";
db.query(query1, function (err, result, fields) {
    if (err) throw err;
    fs.writeFileSync('Tech_Discipline.json', JSON.stringify(result,undefined,2));
    
    //let t = Object.getOwnPropertyNames(result)    
    for (let i =0; i<result.length; i++) {
      if (result[i].UIN == result[i+1].UIN) {
        console.log(trackChange(result));
      }
    }  
    
  });





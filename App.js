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

// let query1 = 
// "select * from BTT_TEST.student_semester_data where  `Primary Curr Major Name` in ('Data Science', 'Computer Science', 'Math & Computer Science', 'Math and Computer Science', 'Computer Sci & Linguistics', 'Liberal Arts - Pre-CS & Ling') or   `Primary Curr Minor 1 Name` in ('Data Science', 'Computer Science', 'Math & Computer Science', 'Math and Computer Science', 'Computer Sci & Linguistics', 'Liberal Arts - Pre-CS & Ling') or   `Primary Curr Minor 2 Name` in ('Data Science', 'Computer Science', 'Math & Computer Science', 'Math and Computer Science', 'Computer Sci & Linguistics', 'Liberal Arts - Pre-CS & Ling') " ;


let courses = ["Computer Sci & Linguistics", "Computer Science", 
                    "Engineering - Pre-CS & Design", 
                    "Engineering - Pre-CS & Data Science",
                     "Data Science" ];

var temp = [];
let countMajor =0;
let countMinor=0;
let query1 = "select * from BTT_TEST.student_semester_data";
db.query(query1, function (err, result, fields) {
  if (err) throw err;
  fs.writeFileSync('Tech_Discipline.json', JSON.stringify(result,undefined,2));
  //let keys = Object.getOwnPropertyNames(result)    
  for (let i =0, j=1; i<result.length, j<result.length-1; i++, j++) {
    if (result[i].UIN == result[j].UIN) {
      for (let k =0; k<6; k++) {
        
        //FOR CHANGES IN MAJOR
        //Comparing major of one to another - if UIN matches and major does not match then UIN, major and changed major gets push into temp
        if(((courses[k] == result[i]['Primary Curr Major Name']) && (courses[k] != result[j]['Primary Curr Major Name'])) ||
            ((courses[k] != result[i]['Primary Curr Major Name']) && (courses[k] == result[j]['Primary Curr Major Name']))    ){  
            // temp.push({UIN: result[i].UIN, Term: result[i]['Term Code'], Major: result[i]['Primary Curr Major Name'],
            //         ChangedTerm: result[j]['Term Code'], ChangedMajor: result[j]['Primary Curr Major Name']})
            countMajor++;
        }

      //Comparing minor of one to another - if UIN matches and minor does not match then UIN, minor and changed minor gets push into temp
        //FOR CHANGES IN MINOR 1  
        if(((courses[k] == result[i]['Primary Curr Minor 1 Name']) && (courses[k] != result[j]['Primary Curr Minor 1 Name'])) ||
            ((courses[k] != result[i]['Primary Curr Minor 1 Name']) && (courses[k] == result[j]['Primary Curr Minor 1 Name']))    ){
            // temp.push({UIN: result[i].UIN, Term: result[i]['Term Code'], Minor1: result[i]['Primary Curr Minor 1 Name'],
            //         ChangedTerm: result[j]['Term Code'], ChangedMINOR_1: result[j]['Primary Curr Minor 1 Name']})
            countMinor++;
        }

        //FOR CHANGES IN MINOR 2
        if(((courses[k] == result[i]['Primary Curr Minor 2 Name']) && (courses[k] != result[j]['Primary Curr Minor 2 Name'])) ||
            ((courses[k] != result[i]['Primary Curr Minor 2 Name']) && (courses[k] == result[j]['Primary Curr Minor 2 Name']))    ){
            // temp.push({UIN: result[i].UIN, Term: result[i]['Term Code'], Minor2: result[i]['Primary Curr Minor 2 Name'],
            //         ChangedTerm: result[j]['Term Code'], ChangedMINOR_2: result[j]['Primary Curr Minor 2 Name']})
            countMinor++;
        }

      }
    }
  }  
  //console.log(temp);
  console.log("countMajor: " + countMajor);
  console.log("countMinor: "+ countMinor);
  fs.writeFileSync('Changes.json', JSON.stringify(temp,undefined,2));

  //console.log(keys);
  //console.log(result[2]["Primary Curr Minor 1 Name"]);
  //console.log(result);
  });


//-------------------------------------------------------------------------------------

  // var temp = [];
  // var t;
  // let query1 = "select * from BTT_TEST.student_semester_data";
  // db.query(query1, function (err, result, fields) {
  //   if (err) throw err;
  //   fs.writeFileSync('Tech_Discipline.json', JSON.stringify(result,undefined,2));
  //   //let keys = Object.getOwnPropertyNames(result)    
  //   for (let i =0; i<result.length; i++) {
  //     if (result[i].UIN == result[i+1].UIN) {
  //       console.log(result);
  //     }
  //   }  
  // //console.log(keys);
  // //console.log(result[2]["Primary Curr Minor 1 Name"]);
  //   //console.log(result);
  // });
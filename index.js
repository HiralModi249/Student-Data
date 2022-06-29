import fs from 'fs';
import {majors,minors} from "./Arrays_Major_Minor.js";    

//Generate UIN - nine digit random number
function createUIN() {
    let min = 10000000;
    let max = 99999999;
    let ID = Math.floor(Math.random() * (max - min + 1) ) + max;
    return ID;
};

//Generate term - Term is identified at UIC by 6 digits. 
//The first digit is the campus (2 - Chicago) followed by the year  
//then the last digit is the semester (8-fall, 1-Spring, 5-summer).
//RETURNS generated term

function createTerm() {
    let years = [2018, 2019, 2020, 2021, 2022];
    let randomYear = Math.floor(Math.random()*years.length);
    //console.log(years[randomYear]);
    let selectYear = years[randomYear];

    let sem = [1,5,8];
    let randomSEM = Math.floor(Math.random()*sem.length);
    //console.log(sem[randomSEM]);
    let selectSEM = sem[randomSEM];

    let term = '2' + selectYear + selectSEM;
    //console.log(term);
    return term;
};

let major, minor;     //returns a major,minor
let classStandingLength;

// Returns an array of all enrolled semesters with objects term,major,minor
function semesters(createdTerm) {
    let list_of_sem = [220181, 220185, 220188, 220191, 220195, 220198, 
                220201, 220205, 220208, 220211, 220215, 220218, 220221, 220225, 220228];
    
    major = programs(majors);       //returns a major
    minor = programs(minors);       //returns a minor
    let enrolledTerms =[];              //array of terms enrolled
    let enrolledSemesters = [] ;        //array of all enrolled semesters with term, major, minor
    const semObject = {};               //object created
    semObject.Term = enrolledTerms;
    semObject.Major = major;
    semObject.Minor = minor;
                                        //

    for (let x in list_of_sem) {        //checks for generated term in list
        if (createdTerm == list_of_sem[x]) {     //if exists then push everything in temp array for output
            for (let i = x; i < list_of_sem.length; i++) {
                if(enrolledTerms) {
                    enrolledTerms.push(list_of_sem[i]);     //array created of all enrolled terms
                }
            }       
        }   
    } 
    classStandingLength = enrolledTerms.length; 

    for (let k = 0 ; k < enrolledTerms.length; k++) {
        enrolledSemesters[k] = {Term:semObject.Term[k], Major:semObject.Major, Minor: semObject.Minor};
        enrolledSemesters.push(enrolledSemesters[k]);           //returns an Object of term, major, minor and the whole object is changed
    }                                                           //into an array of oject
    
    let randomIndex = Math.floor(Math.random()*enrolledTerms.length);
    //let selectTerm = enrolledTerms[randomIndex];
    let newMinor = random_ChangeProgram();      //calls a function for choosing a new minor
    for (let p = randomIndex; p<= enrolledTerms.length; p++ ){
        if (minor != newMinor && major != newMinor) {
            //console.log("here");
            semObject.Minor = newMinor;         //returns an Object of term, major and updated minor
        }  
        else if (major != newMinor && minor != newMinor) {
            semObject.Major = newMinor;         //returns an Object of term, major and updated major
            
        } 
        else {
            semObject.Major = major;         //returns an Object of term, major and major
            semObject.Minor = minor;        //returns an Object of term, major and minor  
        }
        enrolledSemesters[p] = {Term:semObject.Term[p], Major:semObject.Major, Minor: semObject.Minor}; 
        
    }
    enrolledSemesters.pop();
    console.log("here: ");  
    //console.log(enrolledSemesters);    
    return enrolledSemesters; 
};

console.log(semesters(220211));

//To change a minor of a random UIN
function random_ChangeProgram () {
    //let change = [2];
    let change = [0,1,2,3];
    let lengthOfChange = change.length; 
    let randomChange = Math.floor(Math.random()*lengthOfChange);
    let doesChange = change[randomChange];
    let change_minor;    //change in minor

    if (doesChange == 0) {
        change_minor = programs(minors);   //returns a new minor
    }
    if (doesChange == 1) {
        change_minor = minor;           //returns the existing minor
    }
    if (doesChange == 2) {
        change_minor = programs(majors);   //returns a new major
    }
    if (doesChange == 3) {
        change_minor = major;   //returns a exsisting major
    }
    return change_minor;
};

//Returns current class standing of a student
function classStanding(enrolledSemesters){
    let lengthOfSem = enrolledSemesters.length;

    if (lengthOfSem < 3 ) {
        return "freshman";
    }
    else if (lengthOfSem >2 && lengthOfSem < 5) {
        return "Sophmore";
    }
    else if (lengthOfSem >4 && lengthOfSem < 7) {
        return "Junior";
    }
    else {
        return "Senior";
    }
};

//Returns an array consisting of all class standing of a student
function classStanding_flatfile(enrolledSemesters){
    let temp = [];

    for (let i =0; i<= enrolledSemesters.length - 1; i++) {
        if (i < 2 ) {
            temp.push("freshman");
        }
        if (i > 1 && i < 4) {
            temp.push("Sophmore");  
        }
        if (i > 3 && i < 6) {
            temp.push("Junior");
        }
        if (i >= 6 ) {
            temp.push("Senior");
        } 
    }
    return temp;
};

//Randomly generates majors or minors
function programs(providedList){
    let len = providedList.length+1;  
    let ID =  Math.floor(Math.random()*len);
    return providedList[ID];
};

// function changesForUIN () {

// }


// class student  {
//     constructor(UIN, currentClassStanding, AllclassStanding, semester) {
//         this.UIN = UIN;
//         this.currentClassStanding = currentClassStanding;
//         this.AllclassStanding = AllclassStanding;
//         this.semesters = semester;

//     }
// }

// //TO GENERATE RANDOM 100 STUDENTS DATA
// let data = [];
// for (let i =0; i< 100; i++) {
//     let createdTerm = createTerm();
//     data[i]= new student(createUIN(), classStanding(semesters(createdTerm)), 
//                         classStanding_flatfile(semesters(createdTerm)), semesters(createdTerm));  
// }

// //TO GENERATE JSON FILE
// let  jsonFile =[];
// for (let i =0; i<data.length; i++) {
//     for (let j =0; j< data[i].semesters.length; j++) {      
//         jsonFile[i] =  {UIN:data[i].UIN , 
//         ClassStanding:data[i].currentClassStanding , 
//         semesters:data[i].semesters
//         };        
//     } 
// } 

// //TO GENERATE FLATFILE  
// var file = [];
// for (let i =0; i<data.length; i++) {
//     for (let j =0; j< data[i].semesters.length; j++) {
//         file.push(data[i].UIN + ";" + data[i].AllclassStanding[j]+ ";" + data[i].semesters[j].Term + ";" 
//                     + data[i].semesters[j].Major + ";" + data[i].semesters[j].Minor );
//     } 
    
// } 

// To pick out major and minor that contains 4 cs courses(cs , cs + lin, cs + design, data science)
let recognize = [];
for (let i = 0; i < data.length; i++){
    for (let j =0; j< data[i].semesters.length; j++) {
        
}

}







//UNCOMMENT this when you want to update .json file or else data will change
//fs.writeFileSync('data.json', JSON.stringify(jsonFile, undefined, 2));

//UNCOMMENT this when you want to update .csv file or else data will change
// let writer = fs.createWriteStream('student_data.csv');
// for(let i =0; i< file.length; i++) {
//     writer.write(file[i]);
//     writer.write('\n');
// }
// writer.close();




//UIN changes in major if changed and which sem
//----------------------------------------------------


// const csv = new ObjectsToCsv(data);
// csv.toDisk('./student_data.csv', {append: true})  ;  


//create a user-defined function to download CSV file   
// function download_csv_file() {  
//     //define the heading for each row of the data  
//     var csv = 'UIN,Class Standing, Term, Major, Minor\n';  

//     //display the created CSV data on the web browser   
//     //document.write(file);  
    
//     var hiddenElement = document.createElement('a');   
//     //hiddenElement.target = '_blank';  
//     hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv) + encodeURIComponent(writer);
    
//     //provide the name for the CSV file to be downloaded  
//     hiddenElement.download = 'Student Data.csv';  
//     hiddenElement.click();  
// }  
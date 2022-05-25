// function programs(array1){
//     let len = array1.length;  
//     let min =0;
//     //console.log(len);  
//     let ID = Math.floor(Math.random() * (len - min + 1) ) + min;
//     //console.log(array1[ID]);
//     console.log(ID);
//     //array1[ID];
//     return array1[ID - 2];
// };
// console.log(programs(minors));


// let temp = "Hello"
// //console.log(temp)

// function myfunc(p1) {
//     console.log(p1);
// }

// myfunc(temp);

// function myfunc2(p1) {
//     let p2 = p1 *2;
//     return p2;
//     //console.log(p2);
// }

// console.log(myfunc2(2));
// myfunc2(10);
// myfunc2(3);



// function changeProgram(array1){
//     let len = minorPrograms.length+1;  
//     let ID =  Math.floor(Math.random()*minorPrograms);
//     let nameOfMinor = array1[ID];
//     let enrolled_terms = array1;

//     for (let i =0; i < array1.length ; i++) {
//         //enrolled_terms = array1.push(i);
//         if (i == 0 || i == 1) {
//             enrolled_terms[i] = null;
//         }
//         else {
//             enrolled_terms[i] = nameOfMinor;
//         }
//     }
//     return enrolled_terms;
// };


// class student  {
//     constructor(UIN, semesters, cs) {
//         this.UIN = UIN;
//         this.semesters = semesters;
//         this.cs = cs;
//     }
//     sem(Term, Major, Minor) {
//         this.Term = Term;
//         this.Major = Major;
//         this,Minor = Minor;
//     }

// }

// //create for loop
// let data = [];
// for (let i =0; i< 100; i++) {
//     data[i]= new student(createUIN(), semesters(createTerm()), classStanding(length_array(semesters(createTerm()))) ); 
// }
// console.log(data);




// function semesters(p1) {
//     let list_of_sem = [220181, 220185, 220188, 220191, 220195, 220198, 
//                 220201, 220205, 220208, 220211, 220215, 220218, 220221, 220225, 220228];
    
//     let enrolledTerms = [];
//     const semObject = {};
//     let len = list_of_sem.length;
//     let major = programs(majors);
//     let minor = programs(minors); 

//     for (let x in list_of_sem) {     //checks for generated term in list
//         if (p1 == list_of_sem[x]) {     //if exists then push everything in temp array for output
//             for (let i = x; i < len; i++) {
//                 if(enrolledTerms) {
//                     enrolledTerms.push(list_of_sem[i]);  
//                 }
//             }       
//         }   
//     } 
//     let enrolledSemesters = [] ;
//     semObject.Term = enrolledTerms;
//     semObject.Major = major;
//     semObject.Minor = minor;
//     for (let i = 0 ; i < enrolledTerms.length; i++) {
//         enrolledSemesters[i] = "Termcode:"+semObject.Term[i] + "; " + "Major:"+ semObject.Major + "; "+ "Minor:" + semObject.Minor;
//         // enrolledSemesters[i] = semObject.Term[i] + semObject.Major + semObject.Minor;
//         enrolledSemesters.push(enrolledSemesters[i]);   //gives Object-> term major minor
//     }
    
//     let randomIndex = Math.floor(Math.random()*enrolledTerms.length);
//     //console.log("random index " + randomIndex);
//     let selectTerm = enrolledTerms[randomIndex];
//     let newMinor = random_ChangeProgram();
//     console.log("new Minor" + newMinor);
    
//     for (let i = randomIndex; i<enrolledTerms.length; i++ ){
//         //const forChange = enrolledSemesters.findIndex( (enrolledSem) => enrolledSem.minor = newMinor ) 
//         //enrolledSemesters.splice(semObject.Minor, 1 , newMinor);
//         if (random_ChangeProgram == 1) {
//             newMinor = 
//         }
        
//         if (semObject.Minor != newMinor) {
//             semObject.Minor = newMinor;
//             //enrolledSemesters[i] = "Termcode:"+semObject.Term[i] + "; " + "Major:"+ semObject.Major + "; "+ "newMinor:" + semObject.Minor;
//             enrolledSemesters.push(enrolledSemesters.Minor);   //gives Object-> term major minor

//         }
//     }
    
//     return enrolledSemesters; 
// }
// console.log(semesters(220205));

// function random_ChangeProgram () {
//     let change = [0,1];
//     let lengthOfChange = change.length; 
//     //let lengthTemp = length_array(arr1);
//     let randomChange = Math.floor(Math.random()*lengthOfChange);
//     let doesChange = change[randomChange];
//     let change_minor;
//     if (doesChange == 1) {
//         //change in minor
//         change_minor = programs(minors);   //returns a minor
//         return change_minor;
//     }
//     else return 0;
//     // return change_minor;
// }
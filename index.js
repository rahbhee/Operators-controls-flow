3. 
/*
let artSubjects = ["Government, " "Economics, " "Literature, " History, "];
let socialScienceSubjects = ["Accounting, " "Commerce, " "Marketing, " "Geography, "];
let scienceSubjects = ["Physics, " "Chemistry, " "Biology, " "Technicaldrawing, "];
let generalSubjects = ["English, " "Mathematics, "];

let classGroup = artSubjects;

if (classGroup == artSubjects){
    console.log(artSubjects + generalSubjects);
} else if (classGroup == scienceSubjects){
    console.log(scienceSubjects + generalSubjects);
} else if (classGroup == socialScienceSubjects){
    console.log(socialScienceSubjects + generalSubjects);
}
 else {console.log(generalSubjects);}
 */

 5. /*
    function nearestPowerOfTwo(num) {
        let result;
        let roundUp = Math.ceil(Math.log2(num));
        let roundDown = Math.floor(Math.log2(num));

        if (num < 0) return "Number cannot be negative";

        if (roundUp === roundDown) {
            result = 2 ** roundUp;
            return result;
        } else {
            const lowerDifference = Math.min( num - 2**roundDown, 2**roundUp - num)
            return num - lowerDifference
        }
    }
    console.log(nearestPowerOfTwo(9));
    */

 
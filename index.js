
let str ="";//declare variable
let lowerStr ="";//declare variable

function palindrome(str){ //create function that takes any string
   lowerStr = str.toLowerCase();//convert string to lowercase and store in new variable
   let regex = /[^A-Za-z]/g; //create regex that will search for all nonalphanumeric char, g flag means to keep searching after finds a match
   let cleanStr = lowerStr.replace(regex,"") //use replace method to find regex matches and replace with nothing

   console.log(lowerStr);//check to see if str is converted to lowercase
   console.log(cleanStr); //check to see if str has no alphanumeric char or spaces

}


palindrome("race1233$5% C$#^3AR");
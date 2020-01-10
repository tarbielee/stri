function add(myString){
    let num = 0 
    let string = myString.split(/,|\n//g);
    if(string == ""){
    return 0
    }
    for(var i= 0 ; i<= string.length; i++)
    {
        num = num + parseInt(string[i]);
    }
    return num
} 

console.log(add("")+ "should return 0")
console.log(add("1")+ "should return 1")
console.log(add("1,1")+ "should return 2")
console.log(add("1,2,3,4")+ "should return 10")
console.log(add("")+ "should return 1")
console.log(add("1,1")+ "should return 2")
console.log(add("1\n2,3")+ "should return 6")
console.log(add("//;\n1;2")+ "should return 3")
console.log(add("//4\n142")+ "should return 3")
console.log(add("-1,-2,-3,-4")+ "should return'ERROR: negatives not allowed -1,-2")
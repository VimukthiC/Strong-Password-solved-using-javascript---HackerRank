function minimumNumber(password){

    var count = 0;
   
    if(password.length < 6 ){
        count = 6 - password.length;
    }else{
        if (!password.match(/[0-9]/)) {
            count++;
        }
        if (!password.match(/[a-z]/)) {
            count++;
        }
        if (!password.match(/[A-Z]/)) {
            count++;
        }
        if (!password.match(/[!@#$%^&*()-+]/)) {
            count++;
        }
    }

   return count;
}
  
console.log(minimumNumber('Ab1#df'));
console.log(minimumNumber("#HackerLand"));
console.log(minimumNumber("HackerLand"));
console.log(minimumNumber("HackerLand1#"));
console.log(minimumNumber("a@eRwq"));


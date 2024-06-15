// let take an leap year as input and check if it is a leap year or not
// if it is a leap year then check if it is a century year or not
// if it is a century year then check if it is divisible by 400 or not
// if it is divisible by 400 then it is a leap year
// else it is not a leap year
// else it is a leap year
// else it is not a leap year

let year = 2800;
if ((year % 4 === 0 && year % 100!= 0) || (year%100===0 && year % 400 === 0)) {
    
        console.log(`${year} is a leap year`);
}else{
        console.log(`${year} is not a leap year`);
  }



  if(year % 4 === 0){
    if(year % 100 === 0){
        if(year % 400 === 0){
            console.log(`${year} is a leap year 1`);
        }else{
            console.log(`${year} is not a leap year 2`);
        }
    }
    else{
        console.log(`${year} is a leap year 3`);
    } 
}
    else{
        console.log(`${year} is not a  leap year 4`);
    }

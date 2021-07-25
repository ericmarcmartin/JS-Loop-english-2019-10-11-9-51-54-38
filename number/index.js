function oddOrEven(num) {
    if((num % 2) == 1){
        return ' is odd number.';
    }else{
        return ' is even number.';
    }
}
var count=1;
while(count<=20){
    console.log(count + oddOrEven(count));
    count++;
}
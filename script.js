var number = 20;

for (let i=1; i<=number; i++){

    // if (i%15 === 0){
    //     document.write('FizzBuzz' + '<br>');
    // } else if (i%3 === 0){
    //     document.write('Fizz' + '<br>');
    // } else if (i%5 === 0){
    //     document.write('Buzz' + '<br>');
    // } else {
    //     document.write(i + '<br>');
    // }

    switch (true) {
        case i%15 === 0:
            document.write('FizzBuzz' + '<br>')
            break;
           
        case i%3 === 0:
            document.write('Fizz' + '<br>')
            break;

        case i%5 === 0:
            document.write('Buzz' + '<br>')
            break;
    
        default:
            document.write(i + '<br>');
            break;
    }

}

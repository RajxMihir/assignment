function calculator(num1, num2, operator) 
{
    let result;
    switch(operator)
    {
        case '+':
            result = num1 + num2;
        break;

        case '-':
            result = num1 - num2;
        break;
        
        case '*':
            result = num1 * num2;
        break;
        
        case '/':
            result = num1 / num2;
        break;

        default:
            return  "Invalid Operator!"
    }
    return result;
    
}

console.log(calculator(4, 9, '+'));
console.log(calculator(7, 5, '-'));
console.log(calculator(6, 2, '*'));
console.log(calculator(8, 4, '/'));

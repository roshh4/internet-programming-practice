const prompt = require('prompt-sync')();

function isPalidrome(subs)
{
    const rev = subs.split("").reverse();
    return subs === rev.join('');
}

function isPrime(int)
{
    let flag = true;
    for(let i = 2; i < int/2; i++)
    {

    }
}

let input = prompt("Enter input");
let count = 0;
for(let i =0; i < input.length-1; i++)
{
    for(let j = i +1; j < input.length; j++)
    {
        const subs = input.substring(i,j);
        if(isPalidrome(subs) && subs.length > 1)
        {
            console.log(subs);
            count ++;
        }
    }
}

console.log(count);
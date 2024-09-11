const prompt = require('prompt-sync')();

function isPalidrome(subs)
{
    const rev = subs.split("").reverse();
    return subs === rev.join('');
}

function isPrime(int)
{
    let flag = true;
    for(let i = 2; i < int-1; i++)
    {
        if(int%i === 0)
        {
            flag = false;
            break;
        }
    }
    return flag;
}

let input = prompt("Enter input");
let count = 0;
for(let i =0; i < input.length; i++)
{
    for(let j = i +1; j < input.length; j++)
    {
        const subs = input.substring(i,j+1);
        if(isPalidrome(subs) && (subs.length > 1) && isPrime(subs.length))
        {
            if(isPalidrome(subs))
                console.log(subs);
            if(isPrime(subs.length))
                console.log(subs.length);
            count ++;
        }
    }
}

console.log(count);
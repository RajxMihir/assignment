function countVowels(name)
{
    const  vowel = ['a', 'e', 'i', 'o', 'u'];
     let count = 0;

    for(let i = 0; i < name.length; i++)
    {
        if (vowel.includes(name[i].toLowerCase())) 
        {
            count ++;   
        }
    }
    return count;
}

console.log(countVowels('Taal'));
console.log(countVowels('shawn'));
console.log(countVowels('bam'));
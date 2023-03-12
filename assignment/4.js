let marks = [67, 80, 75, 60, 89];
highestmarks = 0;

for(let i = 0; i < marks.length; i++)
{
    highestmarks = marks[i] > highestmarks ? marks[i] : highestmarks;
}
console.log(`The highest marks scored by a student is ${highestmarks}`);
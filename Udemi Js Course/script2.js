
const firstName= 'maral';
const job= 'student';
const age= 2001;
const year= 2022;

//first way
const maral='I\'m'+' '+ firstName +' , a '+(year-age)+' year old '+job;
console.log(maral);

//second way (template strings)
const maralNew=`I'm ${firstName} , a ${year-age} year old ${job}`;
console.log(maralNew);

//multiple lines string
console.log('string \n\
hello \n\
again');

console.log(`helloooo
wowwww
bingo`);
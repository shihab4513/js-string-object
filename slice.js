const address='andorkilla';
const part=address.slice(2,5);
console.log(part);

const sentence='I am a good and hardworking person';
console.log(sentence.split(' '));
const friendStr='Rahim,kahim,dahim,lahim,fahim,sahim';
const friends=friendStr.split(',');
console.log(friends);
const realFriend=['Rahim','Kahim','dahim','lahim','fahim','sahim'];
console.log(realFriend.join());
console.log(realFriend.join('|'));
console.log(realFriend.join('-'));

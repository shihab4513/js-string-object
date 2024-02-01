const mobile={
    brand:'samsung',
    price:25000,
    color:'black',
    camera:'12mp',
}
// for of:array
// for object:in
// for(const x in mobile)
// {
// //    This will only print key
//     console.log(x);
//     // This will print value
//     console.log(mobile[x]);
// }
// Another way
const k=Object.keys(mobile);
for(const x of k)
{
  console.log(x,':',mobile[x]);
}
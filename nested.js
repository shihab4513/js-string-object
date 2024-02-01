const collage={
    name:'vnc',
    class:['11','12'],
    events:['science fair','Vijay Divas','21 Feb'],
    unique:{
        color:'blue',
        Size:'XXXL',
        result:{
            gpa:2.84,
            merit:'Mediocre'
        }
    },
}
// console.log(collage.unique.result.merit);
// console.log(collage.events[2]);
// To delete property in object
delete collage.class;
console.log(collage);
// Another way to declare object
// const pen={brand:'Oppo',price:'18k',color:'Ice Blue'};
// console.log(pen);
// Another way
const pencil = new Object({
    brand: 'Natraj',
    price: '5k',
    color: 'Black'
});


 const rubber=Object.create(pencil);
 rubber.brand='Apsara';
 rubber.price='2k';
    rubber.color='White';
 console.log(rubber);
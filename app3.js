console.log('Inicion de script');

setTimeout(() => {
    console.log('Primer time out');
}, 5000);
setTimeout(() => {
    console.log('Segundo time out');
}, 0);
setTimeout(() => {
    console.log('Tercer time out');
}, 0);

console.log('Fin de script');
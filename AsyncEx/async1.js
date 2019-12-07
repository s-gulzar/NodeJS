//This is an example for asyncronus calling program by sitting timmer
//Example for callback
console.log('Before');

getUser(1, (user) =>
{
    console.log('User', user);
});

console.log('After');

function getUser(user, callback)
{
    setTimeout(() =>
    {
        console.log('Reading from Database');
        callback ({id:1, Name:'Gulzar'});
    }, 2000);
}
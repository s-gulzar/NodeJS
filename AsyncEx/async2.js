//This is an example for asyncronus calling program by sitting timmer

console.log('Before');

//call the function and get the result in user, and using result field call asyncronous function and get 
//the results
getUser(1, (user) =>
{
    console.log('User', user);
    getRepository(user.Name, function(repos) {
        console.log('Repository:', repos);
    })
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

function getRepository(username, callback)
{
    setTimeout(() => {
        console.log('reading from repository');
        callback(['rep1', 'rep2', 'rep3']);

    }, 2000);
}
//Asycornous nested loop will get confusion and called as callback hell or chrismas tree
//here is the solution to clear the confution


console.log('Before');

//call the function and get the result in user, and using result field call asyncronous function and get 
//the results

//replacing ananamous function (function with out name ex(user) => ), named function
//replacing below commented code to simple by writing named functions.
/* 
getUser(1, (user) =>
{
    console.log('User', user);
    getRepository(user.Name, function(repos) {
        console.log('Repository:', repos);
        getCommit(repos[0], (test) =>
        {
            console.log('Commit', test);
        } );
    });
}); 
*/

getUser(1, getRepository1);

//here function getCommit is already exist in blow but both are different because parameters is different
//below getCommit is have single param, and another one have 2 params
function getRepository1(user)
{
    console.log(user);
    getRepository(user.Name, displayCommit);
}

function displayCommit(Commits1){
    console.log(commits1);
}

console.log('After');

function getUser(user, callback)
{
    setTimeout(() =>
    {
        console.log('Reading from Database....');
        callback ({id:1, Name:'Gulzar'});
    }, 2000);
}

function getRepository(username, callback)
{
    setTimeout(() => {
        console.log('reading from repository');
        callback ({new:1, testuser:'gulzar'});

    }, 2000);
}

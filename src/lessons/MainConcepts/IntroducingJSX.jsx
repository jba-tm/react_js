// const name = `John Perez`
// const element= <h1>Hello, {name}</h1>


function formatName(user) {
    return user.firstName+' ' + user.lastName
}

const user = {
    firstName: 'John',
    lastName: 'Perez'
}


function getGreeting(user){
    if(user){
        return <h1>Hello, {formatName(user)}</h1>
    }
    return <h1>Hello, Stranger</h1>
}

const IntroducingJSX = () => {

    return (
        getGreeting(user)
    )
}

export default IntroducingJSX
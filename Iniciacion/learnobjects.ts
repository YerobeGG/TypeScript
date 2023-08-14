function createUser({name: string, isPaid: boolean}){}

createUser({name: "Yerobe", isPaid: true})

function createUser():{name: string, isPaid: boolean}{
    return {name: "Yerobe", isPaid: true}
}
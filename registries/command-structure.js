module.exports = {
    commands: ['add', 'addition'],
    expectedArgs: '<num1> <num2>',
    permissionError: 'You need administrator permissions to run this command.',
    minArgs: 2,
    maxArgs: 2,
    callback: (message, arguments, text) => { 
        console.log(arguments)
    },
    // requiredRoles: ['Math'],
    permissions: 'ADMINISTRATOR',
}
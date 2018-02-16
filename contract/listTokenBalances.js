var Web3 = require('web3')
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))

// load files
var config  = require('./config')

console.log("Running contract.balanceOf at address " + config.contract.address)
var contract = web3.eth.contract(config.contract.interface).at(config.contract.address)
web3.eth.accounts.forEach(address => {
    tokens = contract.balanceOf.call(address)
    console.log(address + " token balance: " + tokens)
})

var Web3 = require('web3')
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))

// load files
var config  = require('./config')
var MyTokenContract = web3.eth.contract(config.contract.interface)

var from = web3.eth.accounts[0]
var to = web3.eth.accounts[1]
var amount = 10
var contract = web3.eth.contract(config.contract.interface).at(config.contract.address)
transactionHash = contract.sendTokens(to, amount, { from: from })
console.log("Transferred " + 10 + " tokens from " + from + " to " + to)
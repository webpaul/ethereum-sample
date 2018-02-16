var config = { network: 'http://localhost:8545', contract: {} }

var Web3 = require('web3')
var provider = new Web3.providers.HttpProvider(config.network)
var web3 = new Web3(provider)

// load files
const fs = require('fs');
var myTokenABI = JSON.parse(fs.readFileSync('TokenICO_sol_MyToken.abi').toString())
var myTokenByteCode = fs.readFileSync('TokenICO_sol_MyToken.bin').toString()

//deploy
var account = config.contract.deployAddress = web3.eth.accounts[0]
var MyTokenContract = web3.eth.contract(myTokenABI)
var contractData = { data: myTokenByteCode, from: account, gas: 999999 }
MyTokenContract.new(contractData, (err, res) => {
    if (err) {
        console.log(err);
        return;
    }

    // If we have an address property, the contract was deployed
    if (res.address) {
        config.contract.deployTransaction = web3.eth.getTransaction(res.transactionHash)
        config.contract.address = res.address
        config.contract.interface = myTokenABI

        fs.writeFile("config.json", JSON.stringify(config, null, '\t'), function(err) {
            if(err) {
                return console.log(err);
            }
        
            console.log('Contract data written to file config.json')
        }); 
    }
})

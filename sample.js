Web3 = require('web3')

provider = new Web3.providers.HttpProvider("http://localhost:8545")
web3 = new Web3(provider)

var accountBalance = function(account) {
  var weiBalance = web3.eth.getBalance(account).toNumber();
  return web3.fromWei(weiBalance, "ether") + " ETH";
}

var listAccounts = function() {
  console.log("List of all accounts:")
  web3.eth.accounts.forEach(account => {
    console.log(account + " balance: " + accountBalance(account));
  });
}

listAccounts();
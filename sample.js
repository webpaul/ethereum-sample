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

var transfer = function(from, to, amountWei) {
  transaction = { from: from, to: to, value: amountWei };
  return web3.eth.sendTransaction(transaction);
}

listAccounts();

var hash = transfer(
  web3.eth.accounts[8], 
  web3.eth.accounts[9], 
  web3.toWei('1', 'ether')
);

console.log("Transfer hash: " + JSON.stringify(web3.eth.getTransaction(hash)));

listAccounts();
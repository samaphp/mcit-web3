const Web3 = require('web3');
const web3 = new Web3();

const ganache = new web3.providers.HttpProvider('http://localhost:8545');

web3.setProvider(ganache);

// Getting all local accounts.
web3.eth.getAccounts(function(err, accounts){
	console.log(err ? err : accounts);
});

// Getting the balance of my first account.
web3.eth.getBalance('0x5300670e39956cc2682634e925b98b426ba18a74', function(err, balance){
	console.log(err ? err : balance);
});

// Getting my account transactions.
web3.eth.getAccounts(function(err, accounts){
	var account1 = accounts[1];
	var account2 = accounts[2];

	web3.eth.sendTransaction({from: account1, to: account2, value: 99999}, function(err, tx){
		console.log(err ? err : tx);
	});
});

// Showing transaction details.
web3.eth.getTransaction('0x8c8749223504e7ee6b1729465af25cded891fd16bb9b9e97dbb6fb1b441e9be4', function(err, tx){
	console.log(err ? err : tx);
});

console.log('-');

// Getting the balance of my first account.
web3.eth.getBalance('0x89Ae05B11eAaD732fB6E507f3D71c8A759616C0A', function(err, balance){
	console.log(err ? err : balance);
});

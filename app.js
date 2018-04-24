const Web3 = require('web3');
const web3 = new Web3();

const ganache = new web3.providers.HttpProvider('http://localhost:8545');

web3.setProvider(ganache);

web3.eth.getAccounts(function(err, accounts){
	console.log(err ? err : accounts);
});


web3.eth.getBalance('0x5300670e39956cc2682634e925b98b426ba18a74', function(err, balance){
	console.log(err ? err : balance);
});

web3.eth.getAccounts(function(err, accounts){
	var account1 = accounts[1];
	var account2 = accounts[2];

	web3.eth.sendTransaction({from: account1, to: account2, value: 99999}, function(err, tx){
		console.log(err ? err : tx);
	});
});

web3.eth.getTransaction('0x7862d682229071baf680fc6ec6719a70ed97f5a28eda114b0775ada1a63b9b21', function(err, tx){
	console.log(err ? err : tx);
});

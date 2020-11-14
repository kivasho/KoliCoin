const {BlockChain, Transaction} = require('./blockchain')
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('34562adb6d6d71b1aa8f3bb55d9c548d306cc4464ab722526369ec9b8037b084');
const myWalletAdress = myKey.getPublic('hex')

let KoliCoin = new BlockChain();

const tx1 = new Transaction(myWalletAdress, 'public key goes here', 10);
tx1.signTransaction(myKey);
KoliCoin.addTransaction(tx1);


console.log('\nMining started...');
KoliCoin.minePendingTransactions(myWalletAdress);
console.log('Balance of kivasho is ', KoliCoin.getBalanceOfAddress(myWalletAdress))

//KoliCoin.chain[1].transactions[0].amount = 1;

console.log('Is chain valid? ', KoliCoin.isChainValid());


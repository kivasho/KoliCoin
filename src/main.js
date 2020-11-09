const SHA256 = require('crypto-js/sha256');
class Block{
    constructor(index, timestamp, data, previousHash = ''){
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash(); 
    }
    calculateHash(){
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
}

class Blockchain{
    constructor(){
        this.chain = [this.createGenesis()];

    }

    createGenesis(){
        return new Block(0, "07/09/2020", "Genesis Block", "0");
    }

    getLastestBlock(){
        return this.chain[this.chain.lenght -1];
    }

    addBlock(newBlock){
       newBlock.previousHash = this.getLastestBlock().hash; 
       newBlock.hash = newBlock.calculateHash();
       this.chain.push(newBlock);
    }
}

let KoliCoin = new Blockchain();
KoliCoin.addBlock(new Block(1, "07/09/2020", { ammount: 4 }));
KoliCoin.addBlock(new Block(2, "08/09/2020", { ammount: 10 }));

console.log(JSON.stringify(KoliCoin, null, 4));


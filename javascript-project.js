let nftstore =[]; //array to hold nft's

function mintnft(name,network,price,colour){       
    let nft={
        "name":name,
        "network":network,
        "price":price,
        "colour":colour
    };
   nftstore.push(nft);
}

function listNFTs(){
    for (let i = 0; i < nftstore.length; i++) {
        console.log("Name: "+nftstore[i].name+" Network: "+nftstore[i].network+" price: "+nftstore[i].price+" colour: "+nftstore[i].colour);
    }
}

function getTotalSupply() {
   return nftstore.length;
}

mintnft("Aryan","Solana",2300,"red");
mintnft("Singh","Ethereum",3800,"green");
listNFTs();
console.log("Total Supply : "+getTotalSupply());
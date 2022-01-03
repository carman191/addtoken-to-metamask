if (typeof window.ethereum !== 'undefined')
{
console.log('MetaMask is installed')
}

const tokenAddress = '0xef50c139be0b67baab4f834d3d9a1f09d2691e02';
const tokenSymbol = 'SGC';
const tokenDecimals = 18;
const tokenImage = 'https://i.imgur.com/o2EXAlM.png';

async function addTokenFunction() {

try {
  
  const wasAdded = await ethereum.request({
    method: 'wallet_watchAsset',
    params: {
      type: 'ERC20', 
      options: {
        address: tokenAddress, 
        symbol: tokenSymbol, 
        decimals: tokenDecimals, 
        image: tokenImage, 
      },
    },
  });

  if (wasAdded) {
    console.log('Thanks for your interest!');
  } else {
    console.log('HelloWorld Coin has not been added');
  }
} catch (error) {
  console.log(error);
}
}
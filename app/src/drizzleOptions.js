import Whistleblower from './contracts/Whistleblower.json';

const options = {
  contracts : [Whistleblower],
  web3:{
    fallback: {
      type:"ws",
      url: "ws://127.0.0.1:9545",
    },
  }
};

export default options;

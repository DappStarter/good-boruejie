require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess kiwi suit food cheap rice stereo pull harvest civil army giggle'; 
let testAccounts = [
"0x4a158cb5d286037b3c6709c15fc05d0e08158ed7281a77197e036285e5fa21ba",
"0xef42e6a75ac3418a5b7c81487ee57a0f3fb711ab8fc90649d47879e266a4eb71",
"0x71b75603e13acfad260c9bac11bd80e2005188a0fc373a79a8d31abad41c9d26",
"0xd5e7ec0887e922a02da1ae6e75d3935685ea9b7107ca4e215eedcc08bb3bdf8f",
"0xce3b1a5514d92f7ed1e963d6550986415dca94041b281d91d93fb37d87193ff8",
"0xfea0afb675c810c24b061d9e37fe5bdb60402476aa96121c86af051766180ff8",
"0x54cf13231c0641703504361ccadfc0f8324acc2a3ee3915e84cf795b105960e4",
"0x4a8aafcd9bd0ef175afd73737b2b02505459a5b8536359798b18e180e9973482",
"0xa562e9a83a71cf03b14e748ae7678a275d79eeee666df2a251b12f6ccbc8e3ac",
"0x9a9371094d50768b589d0584188d4386c99b47cb47e2b0f5a1458d6b68ce2a1b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

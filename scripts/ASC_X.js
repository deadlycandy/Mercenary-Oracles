admin.addPeer( "enode://0a66c96beeebf5fb0ef60c06827eab58111ae1a36e5e5f4d2c6b36cbd24b51731efcc599608d37006eb2072be8e79d66cc39fd1f93c37838215a6024ffbfa84c@34.208.110.214:30302" );

var Address = '0xe768a36962840dd941c6c44964bd3028d2443fe2';
var abi = JSON.parse( '{ "contractName": "ASC", "abi": [ { "constant": false, "inputs": [ { "name": "_victim", "type": "string" } ], "name": "set", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "get", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" } ] }' );

var cont = web3.eth.contract( abi.abi ).at( Address );
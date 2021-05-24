[
  {
    "_format": "hh-sol-artifact-1",
    "contractName": "Calculator",
    "sourceName": "contracts/Calculator.sol",
    "abi": [
      {
        "inputs": [
          {
            "internalType": "int256",
            "name": "nb1",
            "type": "int256"
          },
          {
            "internalType": "int256",
            "name": "nb2",
            "type": "int256"
          }
        ],
        "name": "add",
        "outputs": [
          {
            "internalType": "int256",
            "name": "",
            "type": "int256"
          }
        ],
        "stateMutability": "pure",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "int256",
            "name": "nb1",
            "type": "int256"
          },
          {
            "internalType": "int256",
            "name": "nb2",
            "type": "int256"
          }
        ],
        "name": "div",
        "outputs": [
          {
            "internalType": "int256",
            "name": "",
            "type": "int256"
          }
        ],
        "stateMutability": "pure",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "int256",
            "name": "nb1",
            "type": "int256"
          },
          {
            "internalType": "int256",
            "name": "nb2",
            "type": "int256"
          }
        ],
        "name": "mod",
        "outputs": [
          {
            "internalType": "int256",
            "name": "",
            "type": "int256"
          }
        ],
        "stateMutability": "pure",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "int256",
            "name": "nb1",
            "type": "int256"
          },
          {
            "internalType": "int256",
            "name": "nb2",
            "type": "int256"
          }
        ],
        "name": "mul",
        "outputs": [
          {
            "internalType": "int256",
            "name": "",
            "type": "int256"
          }
        ],
        "stateMutability": "pure",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "int256",
            "name": "nb1",
            "type": "int256"
          },
          {
            "internalType": "int256",
            "name": "nb2",
            "type": "int256"
          }
        ],
        "name": "sub",
        "outputs": [
          {
            "internalType": "int256",
            "name": "",
            "type": "int256"
          }
        ],
        "stateMutability": "pure",
        "type": "function"
      }
    ],
    "bytecode": "0x608060405234801561001057600080fd5b506106aa806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806324e289281461005c578063435091381461008c578063a5f3c23b146100bc578063adefc37b146100ec578063bbe93d911461011c575b600080fd5b61007660048036038101906100719190610212565b61014c565b6040516100839190610280565b60405180910390f35b6100a660048036038101906100a19190610212565b610162565b6040516100b39190610280565b60405180910390f35b6100d660048036038101906100d19190610212565b6101bb565b6040516100e39190610280565b60405180910390f35b61010660048036038101906101019190610212565b6101d1565b6040516101139190610280565b60405180910390f35b61013660048036038101906101319190610212565b6101e7565b6040516101439190610280565b60405180910390f35b6000818361015a919061057f565b905092915050565b6000808214156101a7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161019e9061029b565b60405180910390fd5b81836101b39190610360565b905092915050565b600081836101c991906102cc565b905092915050565b600081836101df91906104e1565b905092915050565b600081836101f591906103ca565b905092915050565b60008135905061020c8161065d565b92915050565b6000806040838503121561022557600080fd5b6000610233858286016101fd565b9250506020610244858286016101fd565b9150509250929050565b61025781610575565b82525050565b600061026a6021836102bb565b91506102758261060e565b604082019050919050565b6000602082019050610295600083018461024e565b92915050565b600060208201905081810360008301526102b48161025d565b9050919050565b600082825260208201905092915050565b60006102d782610575565b91506102e283610575565b9250817f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0383136000831215161561031d5761031c6105b0565b5b817f8000000000000000000000000000000000000000000000000000000000000000038312600083121615610355576103546105b0565b5b828201905092915050565b600061036b82610575565b915061037683610575565b925082610386576103856105df565b5b600160000383147f8000000000000000000000000000000000000000000000000000000000000000831416156103bf576103be6105b0565b5b828205905092915050565b60006103d582610575565b91506103e083610575565b9250827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048211600084136000841316161561041f5761041e6105b0565b5b817f8000000000000000000000000000000000000000000000000000000000000000058312600084126000841316161561045c5761045b6105b0565b5b827f80000000000000000000000000000000000000000000000000000000000000000582126000841360008412161615610499576104986105b0565b5b827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff05821260008412600084121616156104d6576104d56105b0565b5b828202905092915050565b60006104ec82610575565b91506104f783610575565b9250827f800000000000000000000000000000000000000000000000000000000000000001821260008412151615610532576105316105b0565b5b827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01821360008412161561056a576105696105b0565b5b828203905092915050565b6000819050919050565b600061058a82610575565b915061059583610575565b9250826105a5576105a46105df565b5b828207905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f43616c63756c61746f723a2063616e6e6f7420646976696465206279207a657260008201527f6f00000000000000000000000000000000000000000000000000000000000000602082015250565b61066681610575565b811461067157600080fd5b5056fea264697066735822122037be8a946c98dfd28fc7655b65770d1ed71f41838695ceffc02202c7d4ae5ea864736f6c63430008040033",
    "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100575760003560e01c806324e289281461005c578063435091381461008c578063a5f3c23b146100bc578063adefc37b146100ec578063bbe93d911461011c575b600080fd5b61007660048036038101906100719190610212565b61014c565b6040516100839190610280565b60405180910390f35b6100a660048036038101906100a19190610212565b610162565b6040516100b39190610280565b60405180910390f35b6100d660048036038101906100d19190610212565b6101bb565b6040516100e39190610280565b60405180910390f35b61010660048036038101906101019190610212565b6101d1565b6040516101139190610280565b60405180910390f35b61013660048036038101906101319190610212565b6101e7565b6040516101439190610280565b60405180910390f35b6000818361015a919061057f565b905092915050565b6000808214156101a7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161019e9061029b565b60405180910390fd5b81836101b39190610360565b905092915050565b600081836101c991906102cc565b905092915050565b600081836101df91906104e1565b905092915050565b600081836101f591906103ca565b905092915050565b60008135905061020c8161065d565b92915050565b6000806040838503121561022557600080fd5b6000610233858286016101fd565b9250506020610244858286016101fd565b9150509250929050565b61025781610575565b82525050565b600061026a6021836102bb565b91506102758261060e565b604082019050919050565b6000602082019050610295600083018461024e565b92915050565b600060208201905081810360008301526102b48161025d565b9050919050565b600082825260208201905092915050565b60006102d782610575565b91506102e283610575565b9250817f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0383136000831215161561031d5761031c6105b0565b5b817f8000000000000000000000000000000000000000000000000000000000000000038312600083121615610355576103546105b0565b5b828201905092915050565b600061036b82610575565b915061037683610575565b925082610386576103856105df565b5b600160000383147f8000000000000000000000000000000000000000000000000000000000000000831416156103bf576103be6105b0565b5b828205905092915050565b60006103d582610575565b91506103e083610575565b9250827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048211600084136000841316161561041f5761041e6105b0565b5b817f8000000000000000000000000000000000000000000000000000000000000000058312600084126000841316161561045c5761045b6105b0565b5b827f80000000000000000000000000000000000000000000000000000000000000000582126000841360008412161615610499576104986105b0565b5b827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff05821260008412600084121616156104d6576104d56105b0565b5b828202905092915050565b60006104ec82610575565b91506104f783610575565b9250827f800000000000000000000000000000000000000000000000000000000000000001821260008412151615610532576105316105b0565b5b827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01821360008412161561056a576105696105b0565b5b828203905092915050565b6000819050919050565b600061058a82610575565b915061059583610575565b9250826105a5576105a46105df565b5b828207905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f43616c63756c61746f723a2063616e6e6f7420646976696465206279207a657260008201527f6f00000000000000000000000000000000000000000000000000000000000000602082015250565b61066681610575565b811461067157600080fd5b5056fea264697066735822122037be8a946c98dfd28fc7655b65770d1ed71f41838695ceffc02202c7d4ae5ea864736f6c63430008040033",
    "linkReferences": {},
    "deployedLinkReferences": {}
  }
]
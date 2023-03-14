# IDEAS for Hackathon

## 1. DEV ENVIRONMENT

A dev environment that simulates the production on your local as well as on kubernetes cluster. It'll 
help developers to:
1. test their application on scale
2. fork the mainnet and simulate the real chain
3. test their cross chain xApps


### Problem Statement
People trying to launch on any of the EVM based chains face various problems:
1. when they try to test on testnet because limited availability of tokens
2. testing of application on scale is also not possible testnet if it involves a lot of test tokens

### Solution
Build a single click dev environment that makes it easy for developers to test their system locally as well as at scale 
on kubernetes cluster. It will provide the developers with following things:
1. spin up ethereum node with consensus and execution layer
2. spin up OP node with bridge sequencer
3. spin up explorer to see the transactions
4. spin any other layer2 alongside this
5. customisation of the setup to cater project needs

### Tech Stack to be used
Docker, Kubernetes, Eth Clients, Optimism Clients



## 2. Liquid staking using OpStack
Build a layer 2 that uses derivative eth tokens as fee token

### Problem statement
There are many layer2's in ethereum ecosystem that uses Ether as their native token. In order to get Ether they lock
ether on layer 1 contract and give representative token on layer2. This locks up ether on layer 1 which is not used 
anywhere

### Solution
Create a layer 2 that stakes the token on layer 1 and gives derivative token on layer2. That derivative token can used
as fee on layer2. 
Using OpStack will be best for it as Coinbase is also using opstack to build their own layer2 which will enable a lot of
users to participate in the ecosystem. Also, given the roadmap of Optimism all the opstack L2 will be interoperable and 
can be used in a way similar to cosmos chains. We can customise what kind of thing we want to develop on it while also 
securing the Ethereum ecosystem with validators

### Tech Stack to be used


## 3. ETF

# Cypress MetaMask UI Test Automation

## Description

The automation script has the following functions:

- it would trigger MetaMask to prompt for **"Connect with MetaMask"**
- user should click **"Connect"** to allow the dapp to read the connected wallet address
- user should copy and paste your connected wallet address to the Input Box **_"Wallet address:"_**
- user can then type any text in the **_"Message:"_** field
- user should click **"Sign the message"** to trigger MetaMask for signing
- upon successful signing, a **_signature string_** will be displayed accordingly
- if user clicks **"Verify the Signature"** button with the same inputs that generates the signature string, a successful toast should display as _"Valid Signature"_
- if user provides a different wallet address / message from the original signature, the toast should display as _"Invalid Signature"_

## Installation

1. Clone the repository:
2. Install dependencies and run the project

```bash
yarn && yarn start
```



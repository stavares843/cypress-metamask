# Cypress MetaMask UI Test Automation

## Description

This automation script performs end-to-end testing for MetaMask interaction within a decentralized application (dApp). The test simulates a user flow for connecting their MetaMask wallet, signing a message, and verifying the signature. Here's a breakdown of the automation process:

1. **Connect MetaMask**: The script triggers MetaMask to prompt the user to connect the wallet via the **"Connect with MetaMask"** button.
2. **User Confirmation**: The user clicks **"Connect"** to allow the dApp to access the connected wallet's address.
3. **Wallet Address Input**: The script copies the connected wallet address and enters it into the **"Wallet address:"** input field in the dApp.
4. **Message Input**: The user can enter any text in the **"Message:"** field.
5. **Sign the Message**: The user clicks **"Sign the message"** to trigger MetaMask to prompt for message signing.
6. **Signature Generation**: Upon successful signing, a **_signature string_** is displayed.
7. **Signature Verification**:
   - If the user clicks **"Verify the Signature"** with the same wallet address and message used for signing, the toast notification should display **"Valid Signature"**.
   - If a different wallet address or message is used for verification, the toast should show **"Invalid Signature"**.

## Installation & Setup

Follow these steps to set up and run the Cypress test automation:

1. **Clone the repository**:
2. **Install dependencies**:

    Navigate to the project directory and install the required dependencies:

    ```bash
    cd <project_directory>
    yarn install
    ```

3. **Start the project**:

    Start the application or the development server:

    ```bash
    yarn start
    ```

    Ensure that the dApp is running locally and is accessible during the test execution.

4. **Run the Cypress tests**:

    To launch the Cypress Test Runner:

    ```bash
    yarn npx cypress open
    ```

    Or run the tests headlessly (without the UI):

    ```bash
    yarn npx cypress run
    ```

## Test Flow Overview

1. **Trigger Connect with MetaMask**: The script will simulate a click on the **"Connect with MetaMask"** button.
2. **User Interaction**:
   - The user will confirm the connection through MetaMask.
   - The connected wallet address will be extracted and filled into the dApp's **"Wallet address:"** field.
   - A message will be typed into the **"Message:"** field.
3. **Sign the Message**: The user will click on **"Sign the message"**, and MetaMask will prompt them to approve the signing.
4. **Verify Signature**:
   - If the signature matches the original message and wallet address, the test will validate the signature and assert that a **"Valid Signature"** toast appears.
   - If the wallet address or message differs, the test will check that an **"Invalid Signature"** toast appears.


This Cypress test automates the process of connecting MetaMask to a decentralized application, signing a message, and verifying the signature. It's an efficient way to ensure the dApp's MetaMask integration works as expected.



https://github.com/user-attachments/assets/ef6ef7cd-5798-4eb5-8142-a4fe2f56e43e



# Login with ID BDCASH



## Main Features

This tool is useful if you need to easily implement a login system with bdcash. By default the tool produces an UI where the user can enter with:

- Manent App: by usign the remote signing tool
- Sid File: manually import previoysly stored .sid file
- QR card: using a printed card

You can even choose what kind of identities the user must have so you can recognize him as a qualified user or leave the required attribute blank to allow anonymous users.

## How to use it

First of all you need to include it in your project by including the `bdcash.login.min.js` file like:

```
<script src="./bdcash.login.min.js"></script>
```

You can even use the IPFS version, the hash is: `QmZZVKCYK6v9RHrZkyPUoQH6hEHcNC7W8igULzzWGCp4kM` like this:

```
<script src="https://ipfs.io/ipfs/QmZZVKCYK6v9RHrZkyPUoQH6hEHcNC7W8igULzzWGCp4kM"></script>
```

Then you need to write the rendering html, where you want to render the button:

```
<div id="bdcash-login" dapp="Demo dApp" callback="testCallback" required="phone"></div>
```

You can customize the login process by including these attributes:
- _dapp_: customize showed title
- _callback_: call the given callback when the login is successful, is **required** if you include one or more required identities, the return object will include it
- _required_: the list of required identifiers separated by a comma (ex. phone,mail,ethereum,twitter)
- _gateway_: if you want to admit one or more identity gateways, in this case you need to insert one or more pubkeys (ex. `0240f294ef20c7bbb82bae24d8d22c7ab94d195adf153162482b6bf540393d7dd5`)

## Test the project

If you want to test it you can simply download the package with `git clone`, install all dependencies with `npm install` and run the development enviorment with `npm run dev`.

## Check the integrity with the blockchain

If you need to check the integrity of the file please use `bdcash-bvc` tool as documented here: https://github.com/BdcashProtocol/bdcash-blockchain-versioning-cli.

All the updates will be uploaded at https://proof.bdcashprotocol.com/#/address/8KuqWhNnJNvgBCLfc16RTQa2aqvk9ZxW6Z

## Demo page

Check out this link to run a simple demo, available even at `webpack/dist/index.html`: 
https://bdcashprotocols.github.io/bdcash-login/

let BDCashLogin = require('../src/index.js')
let dLogin = new BDCashLogin
const password = 'MySuperStrongPassword'
const BDCashCore = require('@bdeco/core')
const bdcash = new BDCashCore

async function init(){
    let request = await dLogin.listen(function(connected){
        console.log('SUCCESSFULLY RECEIVED SID FILE: ' + connected)
    })
    setTimeout(async function(){
        let newAddress = await bdcash.createAddress(password, false)
        dLogin.login(request.address, newAddress.walletstore, password)
    },2000)
}

init()
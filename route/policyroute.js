const{getpolicy,postpolicy,putpolicy,deletepolicy} = require('../controller/policyController')

const route = require('express').Router()
const auth = require('../midleware/auth')

route.get('/',getpolicy)

route.post('/',auth,postpolicy)

route.put('/:id',auth,putpolicy)

route.delete('/:id',deletepolicy)

module.exports = route
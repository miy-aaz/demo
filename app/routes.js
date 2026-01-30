//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


router.post('/new/email-address', (req, res) => {
   res.redirect('/new/code') 
})

router.post('/new/code', (req, res) => {
   res.redirect('/new/name') 
})

router.post('/new/country', (req, res) => {
   res.redirect('/new/juggling-balls') 
})

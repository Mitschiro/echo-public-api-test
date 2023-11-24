const fs = require('fs')
const path = require('path')
module.exports = () =>
{
    return {
        title: `Test experience public api Movify ${Math.floor(Math.random() * 1000)}`,
        // status draft in order to create the experience. Afterwards put into status = pending for publishing
        status: 'draft',
        //max 2mb allowed
        pictures: [
            {
                //currently there is an issue with the base64 handling. So pls use the link option via a cdn or such instead.
                // url: Buffer.from(fs.readFileSync(path.resolve('./assets/1303017.jpg')), 'binary').toString('base64'),
                url: 'https://th.bing.com/th/id/R.928f0eb3639a156fc3f488aa87bc899c?rik=cywwD212lTjVhg&riu=http%3a%2f%2fhdwpro.com%2fwp-content%2fuploads%2f2018%2f06%2fBeautiful-Strawberry.jpg&ehk=LsW%2beCOCGz476aRrA5%2futUPiLlBIYTou46Ko75he0I4%3d&risl=&pid=ImgRaw&r=0',
                copy: '0',
                alt: '1'
            }
        ],
        //single experience
        dates: [
            {
                from: new Date('2023-12-31'),
                to: new Date((new Date('2023-12-31')).setHours(2))
            }
        ],
        // id of the venue/s
        venues: [
            'zu-conter-bei-der-aler-hal-weY3ik'
        ],
        // either type string or object, if object -> only fr, en, de
        // https://test-api.echo.lu/#schemacontent
        description: {
            fr: "Experience de test pour l'API publique",
            en: "Test experience for the public API",
            de: "Test Veranstalltung für die öffentliche API"
        },
        categories: [
            'arts-design-architecture'
        ],
        audiences: [
            'adults'
        ],
        languages: [
            'lb'
        ],
        environments: [
            'indoors'
        ],
        formats: [
            'afterwork'
        ],
        tags: [
            'test'
        ],
        // https://test-api.echo.lu/#tocsticket
        tickets: [
            {
                "title": "Test ticket",
                "price": 2,
                "currency": "EUR",
                "quantity": 10
            },
            {
                "title": "Test ticket 2",
                "price": 10,
                "currency": "EUR",
                "quantity": 100
            }
        ],
        purchaseLink: "https://bones.com",
        salesContact: {
            "name": "Jones B.",
            "email": "jones.bones@bones.com",
            "phone": "23123123",
            "website": "https://bones.com",
            "company": "Bones S.A"
        },
    }
}

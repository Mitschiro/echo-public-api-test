const axios = require('axios')
// set your api key
axios.defaults.headers.common['api-key'] = ''

// test environment, production -> https://api.echo.lu/v1
const baseUrl = 'https://test-api.echo.lu/v1'


async function main() {
    try {
        console.log('creating experience');
        const exp = await createExperience()
        console.log('experience created');
        setTimeout(async () => {
            console.log('updating experience');
            await publishExperience(exp)
            console.log('experience updated');
        }, 3000)
    } catch (error) {
        console.log('main', error);
    }
}


/**
 * @description function will create a new experience from a template located at /templates/experience.js
 * @returns {object} created experience
 */
function createExperience() {
    return new Promise(async (resolve, reject) => {
        try {
            const experience = require('./templates/experience')()
            const req = await axios.post(`${baseUrl}/experiences`, experience)
            return resolve(req.data.record)
        } catch (error) {
            console.log('createExperience', error.response?.data || error);
            return reject('nope')
        }
    })
}

/**
 * @description Put an existing experience into the status pending.
 * This will send the experience to the echo.lu backoffice for the validation process.
 * @param {object} experience 
 * @returns {string} message
 */
function publishExperience(experience = null) {
    return new Promise(async (resolve, reject) => {
        try {
            if (!experience) {
                return reject('experience not provided')
            }
            if (typeof experience !== 'object') {
                return reject('object expected')
            }
            if (!experience.hasOwnProperty('id')) {
                return reject('experience id is missing')
            }
            experience.status = 'pending'
            await axios.put(`${baseUrl}/experiences/${experience.id}`, experience)
            return resolve('Updated')
        } catch (error) {
            console.log('publishExperience', error.response?.data || error);
        }
    })
}









main()
import chai from 'chai'

import app from '~/app'
// https://medium.com/@osahonoboite/testing-restful-apis-using-mocha-chai-and-chai-http-plugin-4b9feb45d50
describe('Clients', () => {
  describe('GET /clients', () => {
    it('Should return a list of clients', done => {
        chai.request(app)
          .get('/clients')
          .end((error, response) => {
            if (error) done (error)
            expect(response).to.have.status(200)
            expect(response).to.be.an('object')
            expect(response.body.status).to.deep.equals(200)
            expect(response.body.clients).to.be.an('array')
            done()
          })

      })
  })
})
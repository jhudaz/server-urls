const server = require('../index');

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const models = require('../models');

chai.use(chaiHttp);

const email = 'prueba@prueba.com';
const password = '12345';

before(async () => {
  await models.User.create({
    email,
    password
  })
});
after(async () => {
  await models.User.destroy({
    where: {
      email
    }
  })
});

//tes1
describe('/user', () => {
  it('get the user by email and password', (done) => {
    let userLog = {
      email,
      password
    }
    chai.request(server)
      .post('/user')
      .send(userLog)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object')
        res.body.success.should.equal(true);
        done();
      });
  });
});
//test2



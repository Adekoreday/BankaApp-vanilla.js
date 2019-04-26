import chai from 'chai';
import chaiHttp from 'chai-http';
import assertArrays from 'chai-arrays';
import server from '../app/app';

const { expect } = chai;
chai.use(chaiHttp);
chai.use(assertArrays);

describe(' ACCOUNT TEST   overAll test', () => {

  const Transaction = {
    amount: 10000,
  };
  const userLogin = {
    email: 'kaytronics@gmail.com',
    password: 'korey',
  };
  const accountCreatedetails = {};

  it('its expected to sign-in an existing staff User', async () => {
    const res = await chai.request(server)
      .post('/api/v1/auth/signin')
      .send(userLogin);
    expect(res, 'must have a status 200 ok').to.have.status(200);
    expect(res.body.Data).to.be.a('object');
    expect(res.body.Data).to.have.property('firstname');
    expect(res.body.Data).to.have.property('lastname');
    expect(res.body.Data).to.have.property('token').to.be.a('string');
    accountCreatedetails.usertoken = res.body.Data.token;
    accountCreatedetails.usertoken = accountCreatedetails.usertoken.replace(/^"(.*)"$/, '$1');
    accountCreatedetails.usertoken = `Bearer ${accountCreatedetails.usertoken}`;
  });

  it('its expected not to debit an existing lacks token User', async () => {
    const res = await chai.request(server)
      .post('/api/v1/transactions/1002183201/debit')
      .send(Transaction);
    expect(res, 'must have a status 401 ok').to.have.status(401);
  });

  it('its expected  to debit an existing  User', async () => {
    const res = await chai.request(server)
      .post('/api/v1/transactions/1002183201/debit')
      .set('Authorization', accountCreatedetails.usertoken)
      .send(Transaction);
    expect(res, 'must have a status 200 ok').to.have.status(200);
    expect(res.body.data).to.be.a('object');
    expect(res.body.data).to.have.property('amount');
    expect(res.body.data).to.have.property('cashier');
    expect(res.body.data).to.have.property('Transactiontype');
    expect(res.body.data).to.have.property('accountNumber');
  });

  it('its expected to credit an existing User', async () => {
    const res = await chai.request(server)
      .post('/api/v1/transactions/1002183201/credit')
      .set('Authorization', accountCreatedetails.usertoken)
      .send(Transaction);
    expect(res, 'must have a status 200 ok').to.have.status(200);
    expect(res.body.data).to.be.a('object');
    expect(res.body.data).to.have.property('amount');
    expect(res.body.data).to.have.property('cashier');
    expect(res.body.data).to.have.property('Transactiontype');
    expect(res.body.data).to.have.property('accountNumber');
  });

  it('its expected not to credit an account that doesnt exist', async () => {
    const res = await chai.request(server)
      .post('/api/v1/transactions/1234567876/credit')
      .set('Authorization', accountCreatedetails.usertoken)
      .send(Transaction);
    expect(res, 'must have a status 404 ok').to.have.status(404);
  });
});

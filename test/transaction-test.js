import chai from 'chai';
import chaiHttp from 'chai-http';
import assertArrays from 'chai-arrays';
import server from '../app/app';

const { expect } = chai;
chai.use(chaiHttp);
chai.use(assertArrays);

describe(' TRANSACTION TEST   overAll test', () => {
  const Transaction = {
    amount: 10000,
  };
  const insufficientTransaction = {
    amount: 20000000,
  };
  const wrongTransaction = {
    amount: -400,
  };
  const userLogin = {
    email: 'khord4eng@gmail.com',
    password: 'Kore@123',
  };
  const staffLogin = {
    email: 'kaytronics@gmail.com',
    password: 'Kore@123',
  };
  const accountCreatedetails = {};

  accountCreatedetails.createAccount = {
    Type: 'savings',
    balance: 50000,
  };

  it('its expected to sign-in an existing  User', async () => {
    const res = await chai.request(server)
      .post('/api/v1/auth/signin')
      .send(userLogin);
    expect(res, 'must have a status 200 ok').to.have.status(200);
    expect(res.body.Data).to.be.a('object');
    expect(res.body.Data).to.have.property('firstname');
    expect(res.body.Data).to.have.property('lastname');
    expect(res.body.Data).to.have.property('token').to.be.a('string');
    accountCreatedetails.endusertoken = res.body.Data.token;
    accountCreatedetails.endusertoken = accountCreatedetails.endusertoken.replace(/^"(.*)"$/, '$1');
    accountCreatedetails.endusertoken = `Bearer ${accountCreatedetails.endusertoken}`;
  });

  it('its expected to sign-in an existing  Staff', async () => {
    const res = await chai.request(server)
      .post('/api/v1/auth/signin')
      .send(staffLogin);
    expect(res, 'must have a status 200 ok').to.have.status(200);
    expect(res.body.Data).to.be.a('object');
    expect(res.body.Data).to.have.property('firstname');
    expect(res.body.Data).to.have.property('lastname');
    expect(res.body.Data).to.have.property('token').to.be.a('string');
    accountCreatedetails.usertoken = res.body.Data.token;
    accountCreatedetails.usertoken = accountCreatedetails.usertoken.replace(/^"(.*)"$/, '$1');
    accountCreatedetails.usertoken = `Bearer ${accountCreatedetails.usertoken}`;
  });

  it('its expected that a user create a new account sucessfully', async () => {
    const res = await chai.request(server)
      .post('/api/v1/account')
      .set('Authorization', accountCreatedetails.endusertoken)
      .send(accountCreatedetails.createAccount);

    expect(res, 'must have a status 201 ok').to.have.status(201);
    expect(res.body.Data).to.have.property('accountnumber');
    expect(res.body.Data).to.have.property('status');
    accountCreatedetails.testaccount = res.body.Data.accountnumber;
  });

  it('its expected that a user create a new account sucessfully', async () => {
    const res = await chai.request(server)
      .post('/api/v1/account')
      .set('Authorization', accountCreatedetails.endusertoken)
      .send(accountCreatedetails.createAccount);

    expect(res, 'must have a status 201 ok').to.have.status(201);
    expect(res.body.Data).to.have.property('accountnumber');
    expect(res.body.Data).to.have.property('status');
    accountCreatedetails.testaccount1 = res.body.Data.accountnumber;
  });

  it('its expected not to debit an existing lacks token User', async () => {
    const res = await chai.request(server)
      .post('/api/v1/transactions/1002183201/debit')
      .send(Transaction);
    expect(res, 'must have a status 401 ok').to.have.status(401);
  });

  it('its expected  to debit an existing  User', async () => {
    const res = await chai.request(server)
      .post(`/api/v1/transactions/${accountCreatedetails.testaccount}/debit`)
      .set('Authorization', accountCreatedetails.usertoken)
      .send(Transaction);
    expect(res, 'must have a status 200 ok').to.have.status(200);
    expect(res.body.data).to.be.a('object');
    expect(res.body.data).to.have.property('amount');
    expect(res.body.data).to.have.property('cashier');
    expect(res.body.data).to.have.property('Transactiontype');
    expect(res.body.data).to.have.property('accountNumber');
  });

  it('its expected not to debit insufficient funds an existing  User', async () => {
    const res = await chai.request(server)
      .post(`/api/v1/transactions/${accountCreatedetails.testaccount}/debit`)
      .set('Authorization', accountCreatedetails.usertoken)
      .send(insufficientTransaction);
    expect(res, 'must have a status 400 ').to.have.status(400);
  });

  it('its expected not to debit with negative funds an existing  User', async () => {
    const res = await chai.request(server)
      .post(`/api/v1/transactions/${accountCreatedetails.testaccount}/debit`)
      .set('Authorization', accountCreatedetails.usertoken)
      .send(wrongTransaction);
    expect(res, 'must have a status 400 ').to.have.status(400);
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

  it('its expected not to credit an existing User when unauthorized', async () => {
    const res = await chai.request(server)
      .post('/api/v1/transactions/1002183201/credit')
      .set('Authorization', accountCreatedetails.endusertoken)
      .send(Transaction);
    expect(res, 'must have a status 403 ok').to.have.status(403);
  });

  it('its expected not to credit an account that doesnt exist', async () => {
    const res = await chai.request(server)
      .post('/api/v1/transactions/1234567876/credit')
      .set('Authorization', accountCreatedetails.usertoken)
      .send(Transaction);
    expect(res, 'must have a status 404 ok').to.have.status(404);
  });

  it('its expected not to credit an account that doesnt have a right route', async () => {
    const res = await chai.request(server)
      .post('/api/v1/transactions/1002183201/redit')
      .set('Authorization', accountCreatedetails.usertoken)
      .send(Transaction);
    expect(res, 'must have a status 500 ok').to.have.status(500);
  });

  it('its expected to get the transaction by id ', async () => {
    const res = await chai.request(server)
      .get('/api/v1/transactions/1')
      .set('Authorization', accountCreatedetails.endusertoken);
    expect(res, 'must have a status 200 ok').to.have.status(200);
  });

  it('its expected staff not to get the transaction by id ', async () => {
    const res = await chai.request(server)
      .get('/api/v1/transactions/1')
      .set('Authorization', accountCreatedetails.usertoken);
    expect(res, 'must have a status 403 ok').to.have.status(403);
  });

  it('its expected not  to get the transaction that does not have id  that exist', async () => {
    const res = await chai.request(server)
      .get('/api/v1/transactions/100')
      .set('Authorization', accountCreatedetails.endusertoken);
    expect(res, 'must have a status 500 ok').to.have.status(500);
  });
  it('its expected not  to get an account transaction history', async () => {
    const res = await chai.request(server)
      .get('/api/v1/accounts/1002183201/transactions')
      .set('Authorization', accountCreatedetails.usertoken);
    expect(res, 'must have a status 403 ok').to.have.status(403);
  });
  it('its expected not to get  transaction history of account not created by user', async () => {
    const res = await chai.request(server)
      .get('/api/v1/accounts/1012173201/transactions')
      .set('Authorization', accountCreatedetails.endusertoken);
    expect(res, 'must have a status 401 ok').to.have.status(401);
  });
  it('its expected not  to get an account that does not exist transaction history', async () => {
    const res = await chai.request(server)
      .get('/api/v1/accounts/1002183201/transactions')
      .set('Authorization', accountCreatedetails.endusertoken);
    expect(res, 'must have a status 401 ok').to.have.status(401);
  });

  it('its expected to get all the user transaction ', async () => {
    const res = await chai.request(server)
      .get('/api/v1/transactions')
      .set('Authorization', accountCreatedetails.endusertoken);
    expect(res, 'must have a status 200 ok').to.have.status(200);
  });

  it('its expected   to get an account that exist transaction history', async () => {
    const res = await chai.request(server)
      .get(`/api/v1/accounts/${accountCreatedetails.testaccount1}/transactions`)
      .set('Authorization', accountCreatedetails.endusertoken);
    expect(res, 'must have a status 200 ok').to.have.status(200);
  });

  it('its expected   to get an account that exist transaction history', async () => {
    const res = await chai.request(server)
      .get(`/api/v1/accounts/${accountCreatedetails.testaccount}/transactions`)
      .set('Authorization', accountCreatedetails.endusertoken);
    expect(res, 'must have a status 200 ok').to.have.status(200);
  });

  it('expected to get all account transactions', async () => {
    const res = await chai.request(server)
      .get('/api/v1/transaction')
      .set('Authorization', accountCreatedetails.usertoken);
    expect(res, 'must have a status 200 ok').to.have.status(200);
  });
});

import chai from 'chai';
import chaiHttp from 'chai-http';
import assertArrays from 'chai-arrays';
import server from '../app/app';

const { expect } = chai;
chai.use(chaiHttp);
chai.use(assertArrays);

describe(' ACCOUNT TEST   overAll test', () => {

  const userLogin = {
    email: 'adeyemi_adekorede@hotmail.com',
    password: 'korey',
  };

  const cahsierLogin = {
    email: 'kaytronics@gmail.com',
    password: 'korey',
  };

  const enduserLogin = {
    email: 'khord4eng@gmail.com',
    password: 'korey',
  };

  const accountCreatedetails = {
    createAccount: {
      Type: 'savings',
      balance: 1000,
      password: 'korey',
    },
    incompleteCreate: {
      balance: 1000,
      password: 'korey',
    },
    patchpayload: {
      status: 'draft',
    },
  };


  it('its expected to sign-in an existing admin User', async () => {
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

  it('its expected to sign-in an existing cashier User', async () => {
    const res = await chai.request(server)
      .post('/api/v1/auth/signin')
      .send(cahsierLogin);

    expect(res, 'must have a status 200 ok').to.have.status(200);
    expect(res.body.Data).to.be.a('object');
    expect(res.body.Data).to.have.property('firstname');
    expect(res.body.Data).to.have.property('lastname');
    expect(res.body.Data).to.have.property('token').to.be.a('string');
    accountCreatedetails.cashiertoken = res.body.Data.token;
    accountCreatedetails.cashiertoken = accountCreatedetails.cashiertoken.replace(/^"(.*)"$/, '$1');
    accountCreatedetails.cashiertoken = `Bearer ${accountCreatedetails.cashiertoken}`;

  });

  it('its expected to sign-in an existing enduser User', async () => {
    const res = await chai.request(server)
      .post('/api/v1/auth/signin')
      .send(enduserLogin);

    expect(res, 'must have a status 200 ok').to.have.status(200);
    expect(res.body.Data).to.be.a('object');
    expect(res.body.Data).to.have.property('firstname');
    expect(res.body.Data).to.have.property('lastname');
    expect(res.body.Data).to.have.property('token').to.be.a('string');
    accountCreatedetails.endusertoken = res.body.Data.token;
    accountCreatedetails.endusertoken = accountCreatedetails.endusertoken.replace(/^"(.*)"$/, '$1');
    accountCreatedetails.endusertoken = `Bearer ${accountCreatedetails.endusertoken}`;

  });



  it('its expected to create a new account sucessfully', async () => {
    const res = await chai.request(server)
      .post('/api/v1/account')
      .set('Authorization', accountCreatedetails.usertoken)
      .send(accountCreatedetails.createAccount);

    expect(res, 'must have a status 201 ok').to.have.status(201);
    expect(res.body.Data).to.have.property('accountnumber');
    expect(res.body.Data).to.have.property('status');

  });

  it('its expected to create a new account sucessfully', async () => {
    const res = await chai.request(server)
      .post('/api/v1/account')
      .set('Authorization', accountCreatedetails.endusertoken)
      .send(accountCreatedetails.createAccount);

    expect(res, 'must have a status 201 ok').to.have.status(201);
    expect(res.body.Data).to.have.property('accountnumber');
    expect(res.body.Data).to.have.property('status');

  });

  it('its expected to create a new account sucessfully', async () => {
    const res = await chai.request(server)
      .post('/api/v1/account')
      .set('Authorization', accountCreatedetails.endusertoken)
      .send(accountCreatedetails.createAccount);

    expect(res, 'must have a status 201 ok').to.have.status(201);
    expect(res.body.Data).to.have.property('accountnumber');
    expect(res.body.Data).to.have.property('status');

  });

  it('its expected to get a list of account created by a user', async () => {
    const res = await chai.request(server)
      .get('/api/v1/user/khord4eng@gmail.com/accounts')
      .set('Authorization', accountCreatedetails.endusertoken);
      expect(res, 'must have a status 200 ok').to.have.status(200);
    
  });

  it('its expected to not to create account', async () => {
    const res = await chai.request(server)
      .post('/api/v1/account')
      .send(accountCreatedetails.createAccount);
    expect(res, 'must have a status unauthorized 401 ').to.have.status(401);
  });


  it('its expected to not to create account', async () => {
    const res = await chai.request(server)
      .post('/api/v1/account')
      .set('Authorization', accountCreatedetails.usertoken)
      .send(accountCreatedetails.incompleteCreate);
    expect(res, 'must have a status unauthorized 400 ').to.have.status(400);
  });


  it('its expected to modify an account admin can change status', async () => {
    const res = await chai.request(server)
      .patch('/api/v1/account/1012183201')
      .set('Authorization', accountCreatedetails.usertoken)
      .send(accountCreatedetails.patchpayload);
    expect(res, 'must sucessfully patch').to.have.status(200);

  });


  it('its expected to not modify an account user cannot modify status', async () => {
    const res = await chai.request(server)
      .patch('/api/v1/account/1012183201')
      .set('Authorization', accountCreatedetails.endusertoken)
      .send(accountCreatedetails.patchpayload);
    expect(res, 'must not sucessfully patch not autorized').to.have.status(403);
  });


  it('its expected to not modify an account staff cannot modify status', async () => {
    const res = await chai.request(server)
      .patch('/api/v1/account/1012183201')
      .set('Authorization', accountCreatedetails.cashiertoken)
      .send(accountCreatedetails.patchpayload);
    expect(res, 'must not sucessfully patch not autorized').to.have.status(403);
  });


  it('its not expected to modify  an account that does not exist', async () => {
    const res = await chai.request(server)
      .patch('/api/v1/account/1012183222')
      .set('Authorization', accountCreatedetails.usertoken)
      .send(accountCreatedetails.patchpayload);
    expect(res, 'must not sucessfully patch').to.have.status(404);
  });


  it('its expected not to modify an account with missing token', async () => {
    const res = await chai.request(server)
      .patch('/api/v1/account/1012183201')
      .send(accountCreatedetails.patchpayload);
    expect(res, 'must not sucessfully patch token missing').to.have.status(401);
  });

  it('its expected to delete an existing account', async () => {
    const res = await chai.request(server)
      .delete('/api/v1/accounts/1012183201')
      .set('Authorization', accountCreatedetails.usertoken);
    expect(res, 'must delete successfully').to.have.status(200);
  });



  it('a user is not expected to delete an existing account', async () => {
    const res = await chai.request(server)
      .delete('/api/v1/accounts/1012183201')
      .set('Authorization', accountCreatedetails.endusertoken);
    expect(res, 'must not delete successfully').to.have.status(403);
  });

  it('a token is missing not expected to delete an existing account', async () => {
    const res = await chai.request(server)
      .delete('/api/v1/accounts/1012183201');
    expect(res, 'must not delete successfully').to.have.status(401);
  });

   it('its expected flag error status an account that doesnt exist', async () => {
    const res = await chai.request(server)
      .delete('/api/v1/accounts/902183201')
      .set('Authorization', accountCreatedetails.usertoken);
    expect(res, 'must not delete successfully').to.have.status(404);
  });
});

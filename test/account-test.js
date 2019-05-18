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
    },
    wrongTypeInput:{
     Type: 'funny',
     balance: 20000,
    },
    incompleteCreate: {
      balance: 1000,
    },
    patchpayload: {
      status: 'draft',
    },
    wrongpatchpayload: {
      status: 'korey',
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

   it('its expected to not create a new account sucessfully', async () => {
    const res = await chai.request(server)
      .post('/api/v1/account')
      .set('Authorization', accountCreatedetails.usertoken)
      .send(accountCreatedetails.wrongTypeInput);
      expect(res, 'must have a status 500 ').to.have.status(500);
      expect(res.body, 'must have a status').to.have.property('status');
      expect(res.body, 'must have a data').to.have.property('Data');

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
      .set('Authorization', accountCreatedetails.cashiertoken)
      .send(accountCreatedetails.createAccount);
    expect(res, 'must have a status 403 ok').to.have.status(403);
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

  it('its expected to modify an account admin can change status', async () => {
    const res = await chai.request(server)
      .patch('/api/v1/account/1012183201')
      .set('Authorization', accountCreatedetails.endusertoken)
      .send(accountCreatedetails.patchpayload);
    expect(res, 'must not sucessfully patch').to.have.status(403);
  });

  


  it('its expected to not modify an account user cannot modify status', async () => {
    const res = await chai.request(server)
      .patch('/api/v1/account/1012183201')
      .set('Authorization', accountCreatedetails.endusertoken)
      .send(accountCreatedetails.patchpayload);
    expect(res, 'must not sucessfully patch not autorized').to.have.status(403);
  });

  it('its expected to not modify an account status wrong patch payload', async () => {
    const res = await chai.request(server)
      .patch('/api/v1/account/1012183201')
      .set('Authorization', accountCreatedetails.usertoken)
      .send(accountCreatedetails.wrongpatchpayload);
    expect(res, 'must sucessfully patch').to.have.status(400);
  });


  it('its expected to  modify an account staff can modify status', async () => {
    const res = await chai.request(server)
      .patch('/api/v1/account/1012183201')
      .set('Authorization', accountCreatedetails.cashiertoken)
      .send(accountCreatedetails.patchpayload);
    expect(res, 'must sucessfully patch autorized').to.have.status(200);
  });

    it('its expected to not modify an account user cannot modify status', async () => {
    const res = await chai.request(server)
      .patch('/api/v1/account/1012183201')
      .set('Authorization', accountCreatedetails.endusertoken)
      .send(accountCreatedetails.patchpayload);
    expect(res, 'must not sucessfully patch autorized').to.have.status(403);
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

     it('its expected to get ALL user accounts', async () => {
    const res = await chai.request(server)
      .get('/api/v1/accounts')
      .set('Authorization', accountCreatedetails.usertoken);
       expect(res, 'must return All accounts').to.have.status(200);
  });

     it('its expected to get ALL user accounts', async () => {
    const res = await chai.request(server)
      .get('/api/v1/accounts')
      .set('Authorization', accountCreatedetails.endusertoken);
       expect(res, 'must return All accounts').to.have.status(403);
  });

     it('its expected to get ALL user accounts when logged as cashier or admin', async () => {
    const res = await chai.request(server)
      .get('/api/v1/accounts')
      .set('Authorization', accountCreatedetails.usertoken);
       expect(res, 'must return All accounts').to.have.status(200);
        expect(res.body.data[0], 'must return All accounts').to.have.property('createdon');
         expect(res.body.data[0], 'must return All accountsnumber').to.have.property('accountnumber');
         expect(res.body.data[0], 'must return All account mail').to.have.property('email');
         
  });
  it('its expected not to get ALL user accounts when wrong query string', async () => {
    const res = await chai.request(server)
      .get('/api/v1/accounts?status=korey')
      .set('Authorization', accountCreatedetails.usertoken);
       expect(res, 'must return All accounts').to.have.status(404);    
  });
   it('its expected not to get Active user accounts using admin token', async () => {
    const res = await chai.request(server)
      .get('/api/v1/accounts?status=active')
      .set('Authorization', accountCreatedetails.usertoken);
       expect(res, 'must return All accounts').to.have.status(200);    
       expect(res.body, 'must be an object').to.be.an('object');
       expect(res.body.data[0]).to.have.property('status');
  });
  it('its expected get Account details using admin token', async () => {
    const res = await chai.request(server)
      .get('/api/v1/accounts/1012173201')
      .set('Authorization', accountCreatedetails.usertoken);
       expect(res, 'must return All accounts').to.have.status(200);    
       expect(res.body, 'must be an object').to.be.an('object');
  });
   it('its expected get Account details using admin token', async () => {
    const res = await chai.request(server)
      .get('/api/v1/accounts/101217320')
      .set('Authorization', accountCreatedetails.usertoken);
       expect(res, 'must not return All accounts').to.have.status(404);    
  });


});

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
    }

    describe('SIGN-IN USER>> POST', () => {
        it('its expected to sign-in an existing User', (done) => {
            chai.request(server)
                .post('/api/v1/auth/sign-In')
                .send(userLogin)
                .end((err, res) => {
                    expect(res, 'must have a status 200 ok').to.have.status(200);
                    expect(res.body.Data).to.be.a('object');
                    expect(res.body.Data).to.have.property('firstName');
                    expect(res.body.Data).to.have.property('lastName');
                    expect(res.body.Data).to.have.property('email');
                    expect(res.body.Data).to.have.property('token').to.be.a('string');
                    accountCreatedetails.usertoken = res.body.Data.token;
                    accountCreatedetails.usertoken = accountCreatedetails.usertoken.replace(/^"(.*)"$/, '$1');
                    accountCreatedetails.usertoken = `Bearer ${accountCreatedetails.usertoken}`;
                    done();
                });
        });
    });

    describe('ACCOUNT CREATE TEST', () => {
        it('its expected to create a new account sucessfully', () => {
            chai.request(server)
                .post('/api/v1/auth/accounts')
                .set('Authorization', accountCreatedetails.usertoken)
                .send(accountCreatedetails.createAccount)
                .end((err, res) => {
                    expect(res, 'must have a status 200 ok').to.have.status(200);
                    expect(res.body.data).to.have.property('email');
                    expect(res.body.data).to.have.property('accountNumber');
                    expect(res.body.data).to.have.property('status');
                });
        });
    });

    describe('ACCOUNT CREATE TEST FAIL AUTHENTICATION', () => {
        it('its expected to not to create account', () => {
            chai.request(server)
                .post('/api/v1/auth/accounts')
                .send(accountCreatedetails.createAccount)
                .end((err, res) => {
                    expect(res, 'must have a status unauthorized 401 ').to.have.status(401);

                });
        });
    });

    describe('ACCOUNT CREATE TEST INCOMPLETE INPUT', () => {
        it('its expected to not to create account', () => {
            chai.request(server)
                .post('/api/v1/auth/accounts')
                .set('Authorization', accountCreatedetails.usertoken)
                .send(accountCreatedetails.incompleteCreate)
                .end((err, res) => {
                    expect(res, 'must have a status unauthorized 400 ').to.have.status(400);
                });

        });
    });

});
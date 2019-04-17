import chai from 'chai';
import chaiHttp from 'chai-http';
import assertArrays from 'chai-arrays';
import server from '../app';

const { expect } = chai;
chai.use(chaiHttp);
chai.use(assertArrays);

describe(' ACCOUNT TEST   overAll test', () => {

    const Transaction = {
        amount: 10000,
        cashier: 3,
        oldBalance: 20000,
    };

    describe('TRANSACTION DEBIT TEST>> POST', () => {
        it('its expected to debit an existing User', (done) => {
            chai.request(server)
                .post('/api/v1/transactions/1013566778/debit')
                .send(Transaction)
                .end((err, res) => {
                    expect(res, 'must have a status 200 ok').to.have.status(200);
                    expect(res.body.data).to.be.a('object');
                    expect(res.body.data).to.have.property('amount');
                    expect(res.body.data).to.have.property('cashier');
                    expect(res.body.data).to.have.property('oldBalance');
                    expect(res.body.data).to.have.property('createdOn');
                    expect(res.body.data).to.have.property('Transactiontype');
                    expect(res.body.data).to.have.property('accountNumber');
                    expect(res.body.data).to.have.property('newBalance');
                    expect(res.body.data).to.have.property('id');
                    done();
                });
        });
    });

    describe('TRANSACTION CREDIT TEST>> POST', () => {
        it('its expected to credit an existing User', (done) => {
            chai.request(server)
                .post('/api/v1/transactions/1013566778/credit')
                .send(Transaction)
                .end((err, res) => {
                    expect(res, 'must have a status 200 ok').to.have.status(200);
                    expect(res.body.data).to.be.a('object');
                    expect(res.body.data).to.have.property('amount');
                    expect(res.body.data).to.have.property('cashier');
                    expect(res.body.data).to.have.property('oldBalance');
                    expect(res.body.data).to.have.property('createdOn');
                    expect(res.body.data).to.have.property('Transactiontype');
                    expect(res.body.data).to.have.property('accountNumber');
                    expect(res.body.data).to.have.property('newBalance');
                    expect(res.body.data).to.have.property('id');
                    done();
                });
        });
    });

    describe('TRANSACTION CREDIT TEST>> POST', () => {
        it('its expected not to credit an account that doesnt exist', (done) => {
            chai.request(server)
                .post('/api/v1/transactions/1234567876/credit')
                .send(Transaction)
                .end((err, res) => {
                    expect(res, 'must have a status 404 ok').to.have.status(404);

                    done();
                });
        });
    });
});
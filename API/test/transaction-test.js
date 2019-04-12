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
        cashier: 3,
        oldBalance: 20000
    };

    describe('TRANSACTION DEBIT TEST>> POST', () => {
        it('its expected to debit an existing User', (done) => {
            chai.request(server)
                .post('/api/v1/transactions/1012183201/debit')
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
                .post('/api/v1/transactions/1012183201/credit')
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
});
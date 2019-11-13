import chai from 'chai';
import chaiHttp from 'chai-http';
import assertArrays from 'chai-arrays';
import server from '../app/app';

const { expect } = chai;
let token;
chai.use(chaiHttp);
chai.use(assertArrays);

describe('USER TEST   overAll test', () => {

    const userItems = {

        UserSignUp: {
            firstName: 'Adeyemi',
            lastName: 'adekorede',
            email: 'yemkkfkloh@hotmail.com',
            password: 'korey',
            Type: 'client',
            isAdmin: false,
        },
        userLogin: {
            email: 'adeyemi_adekorede@hotmail.com',
            password: 'korey',
        },
        wrongpasswordLogin: {
            email: ' khord4eng@gmail.com',
            password: 'koreyttt',
        },
        UserwrongSignUp1: {
            firstName: 'Adeyemi',
            lastName: 'adekorede',
            password: 'korey',
            Type: 'staff',      //missing email
            isAdmin: false,
        },
        UserwrongSignUp2: {
            firstName: 'Adeyemi',
            lastName: 'adekorede',
            email: 'yemmo@hotmail.com',
            password: 'korey',
            Type: 'savings',     //type incorrect
            isAdmin: false,
        },
        nonexistLogin: {
            email: 'aa@hotmail.com',
            password: 'korey',
        },
    };

    it('its expected to sign-up a User', async () => {
        const res = await chai.request(server)
            .post('/api/v1/auth/signup')
            .send(userItems.UserSignUp)

        token = res.body.Data.token;
        token = token.replace(/^"(.*)"$/, '$1');
        token = `Bearer ${token}`;

        expect(res, 'must have a status 200 ok').to.have.status(201);
        expect(res.body.Data).to.be.a('object');
        expect(res.body.Data).to.have.property('firstname');
        expect(res.body.Data).to.have.property('lastname');
        expect(res.body.Data).to.have.property('email');
        expect(res.body.Data).to.have.property('id');
        expect(res.body.Data).to.have.property('email');
    });

    it('its expected not to sign-up a User', async () => {
        const res = await chai.request(server)
            .post('/api/v1/auth/signup')
            .send(userItems.UserSignUp)
        expect(res, 'must have a status 422 ok').to.have.status(422);

    });


    it('its expected to throw error on failed input validation', async () => {
        const res = await chai.request(server)
            .post('/api/v1/auth/signup')
            .send(userItems.UserwrongSignUp1)
        expect(res, 'must have status 400').to.have.status(400);
        expect(res.body).to.be.array();

    });


    it('its expected to throw error on failed input validation', async () => {
        const res = await chai.request(server)
            .post('/api/v1/auth/signup')
            .send(userItems.UserwrongSignUp2);
        expect(res, 'must have status 400').to.have.status(400);
    });



    it('its expected to sign-in an existing User', async () => {
        const res = await chai.request(server)
            .post('/api/v1/auth/signin')
            .send(userItems.userLogin)
        expect(res, 'must have a status 200 ok').to.have.status(200);
        expect(res.body.Data).to.be.a('object');
        expect(res.body.Data).to.have.property('firstname');
        expect(res.body.Data).to.have.property('lastname');
        expect(res.body.Data).to.have.property('token').to.be.a('string');

    });


    it('its expected not to sign-In a User that doesnt exist', async () => {
        const res = await chai.request(server)
            .post('/api/v1/auth/signin')
            .send(userItems.nonexistLogin)

        expect(res, 'must have a status 404 not found').to.have.status(404);
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('msg');
        expect(res.body).to.have.property('status');
    });

    it('expected to get the signed up user details', async () => {
        const res = await chai.request(server)
                    .get(`/api/v1/user?mail=${userItems.UserSignUp.email}`)
                    .set('Authorization', token)
        expect(res, 'must have the status code of 200 ok').to.have.status(200);
        expect(res.body.Data).to.be.a('object');
        expect(res.body.Data).to.have.property('lastname');
        expect(res.body.Data).to.have.property('email');
        expect(res.body.Data).to.have.property('id');
        expect(res.body.Data).to.have.property('isadmin');
    });

    it('fails to get the user details that does not exits', async () => {
        const res = await chai.request(server)
                    .get(`/api/v1/user?mail=unknown@gmail.com`)
                    .set('Authorization', token)
        expect(res, 'must have the status code of 404 notfound').to.have.status(404);

    });

    it('fails to get the user details on failed validation', async () => {
        const res = await chai.request(server)
                    .get(`/api/v1/user?mail=unknowngmai`)
                    .set('Authorization', token)
        expect(res, 'must have the status code of 400').to.have.status(400);

    });



});

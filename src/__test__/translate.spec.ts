import app from '../app';
import 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
//import 'chai/register-should';

chai.use(chaiHttp);

describe('test request ', () => {
  it("Test permitir apenas numero interiro", (done) => {
    const id = 1;
    chai.request(app)
      .get(`/translate/${id}`)
      .end((err, res) => {
        chai.expect(res.status).to.eql(200);
        chai.expect(res.body).to.eql("one");
        done();
      });
  });

  it("Test não permitir numero decimal", (done) => {
    const id = 1.5;
    chai.request(app)
      .get(`/translate/${id}`)
      .end((err, res) => {
        chai.expect(res.status).to.eql(400);
        done();
      });
  });

  it("Test não permitir string", (done) => {
    const id = 'asd';
    chai.request(app)
      .get(`/translate/${id}`)
      .end((err, res) => {
        chai.expect(res.status).to.eql(400);
        done();
      });
  });
});

/*
describe('Number type test', () => {
  it('numero tem que ser inteiro', (done) => {
    let number = '1';
    chai.request(app)
      .get('/translate/' + number)
      .send(number)
      .end((res: any) => {
        res.should.have.status(200);
        res.body.name.should.equal('one');
        res.body.should.have.property('_id').eql(number);
        done();
      });
  }).timeout(8000);
});
*/
/*
describe('Minimum and maximum number validation', () => {
  it('Minimum number 0', () => {
    chai.request(app).get('/translate/-1')
      .then((res: any) => {
        chai.expect(res.status).to.eql(400);
      });
  }).timeout(8000);

  it('Maximum number 999', () => {
    chai.request(app).get('/translate/1000')
      .then((res: any) => {
        chai.expect(res.status).to.eql(400);
      });
  }).timeout(8000);
});

describe('Test response translate', () => {
  it('Translate number 10', () => {
    chai.request(app).get('/translate/10')
      .then((res: any) => {
        chai.expect(res.status).to.eql(200);
        chai.expect(res.body).to.eql("ten");
      });
  }).timeout(8000);

  it('Translate number 50', () => {
    chai.request(app).get('/translate/50')
      .then((res: any) => {
        chai.expect(res.status).to.eql(200);
        chai.expect(res.body).to.eql("fifty");
      });
  }).timeout(8000);

  it('Translate number 200', () => {
    chai.request(app).get('/translate/200')
      .then((res: any) => {
        chai.expect(res.status).to.eql(200);
        chai.expect(res.body).to.eql("two thousand");
      });
  }).timeout(8000);

  it('Translate number 999', () => {
    chai.request(app).get('/translate/1011')
      .then((res: any) => {
        chai.expect(res.status).to.eql(200);
        chai.expect(res.body).to.eql("nine hundred ninety-nine");
      });
  }).timeout(8000);
});
*/
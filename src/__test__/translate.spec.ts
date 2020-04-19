import app from '../app';
import 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);

describe('Basic validations ', () => {
  it("Must allow the translation of an integer", (done) => {
    const id = 1;
    chai.request(app)
      .get(`/translate/${id}`)
      .end((err, res) => {
        chai.expect(res.status).to.eql(200);
        chai.expect(res.body).to.eql("one");
        done();
      });
  });

  it("Must not allow the translation of a decimal number", (done) => {
    const id = 1.5;
    chai.request(app)
      .get(`/translate/${id}`)
      .end((err, res) => {
        chai.expect(res.status).to.eql(400);
        done();
      });
  });

  it("Must not allow the translation of a string", (done) => {
    const id = 'asd';
    chai.request(app)
      .get(`/translate/${id}`)
      .end((err, res) => {
        chai.expect(res.status).to.eql(400);
        done();
      });
  });
});

describe('Minimum and maximum number validation', () => {
  it('Does not allow to translate a number less than zero', () => {
    chai.request(app).get('/translate/-1')
      .then((res: any) => {
        chai.expect(res.status).to.eql(400);
      });
  }).timeout(8000);

  it('Does not allow translating more than nine hundred and ninety-nine', () => {
    chai.request(app).get('/translate/1000')
      .then((res: any) => {
        chai.expect(res.status).to.eql(400);
      });
  }).timeout(8000);
});

describe('Testing number translation', () => {
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
});

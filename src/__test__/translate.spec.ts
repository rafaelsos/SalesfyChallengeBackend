import app from '../app';
import 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';

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

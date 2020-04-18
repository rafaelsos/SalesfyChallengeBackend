import app from '../app';
import 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);

describe('test mocha e chai', () => {
  it('test config res 200 ', () => {
    chai.request(app).get('/translate/1')
      .then((res: any) => {
        chai.expect(res.status).to.eql(200);
      });
  }).timeout(8000);
});
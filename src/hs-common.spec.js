import HsCommon from './hs-common.js';
import Moment from '../bower_components/moment/src/moment'

describe("Test HsCommon", function () {
  const hsCommon = new HsCommon(Moment);

  for (let s = 5; s < 12; s++) {
    let time = s < 10 ? '0' + s : s;
    it("it should return 'Morning' from 5am to 12pm'", function () {
      expect(hsCommon.timeAgo('2018-07-24T' + time + ':00:00+03:00')).toContain('Morning')
    });
  }

  for (let s = 12; s < 17; s++) {
    let time = s < 10 ? '0' + s : s;
    it("it should return 'Afternoon' from 12pm to 17pm'", function () {
      expect(hsCommon.timeAgo('2018-07-24T' + time + ':00:00+03:00')).toContain('Afternoon')
    });
  }

  for (let s = 17; s < 5; s--) {
    let time = s < 10 ? '0' + s : s;
    it("it should return 'Evening' from 5pm to 5am'", function () {
      expect(hsCommon.timeAgo('2018-07-24T' + time + ':00:00+03:00')).toContain('Evening')
    });
  }
});
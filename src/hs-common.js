var HsCommon = function (moment) {
  /**
   * format: 6 minutes ago - Afternoon (11:41)
   * Morning 5 am to 12 pm
   * Afternoon 12 pm to 5 pm
   * Evening 5 pm to 5 am
   * @param value
   * @returns {string}
   */
  function timeAgo(value) {
    var val    = moment(value).fromNow(),
        type   = moment(value).format('a'),
        hour   = moment(value).hour(),
        prefix = '';
    switch (type) {
      case 'am':
        if (hour >= 5 && hour <= 12) {
          prefix = 'Morning';
        } else {
          prefix = 'Evening';
        }
        break;
      case 'pm':
        if (hour >= 12 && hour <= 17) {
          prefix = 'Afternoon';
        } else {
          prefix = 'Evening';
        }
        break;
    }
    val += ' - ' + prefix + ' ';
    val += '(' + moment(value).format(getHourMinuteFormat()) + ')';//hh for am pm format

    return val;
  }

  /**
   * @returns {string}
   */
  function getHourMinuteFormat() {
    return (isLocaleTimeFormat12()) ? 'hh:mm' : 'HH:mm';
  }

  /**
   * apparently toLocaleTimeString() has a bug in Chrome.
   * toString() however returns 12/24 hour formats.
   * If one of two contains AM/PM execute 12 hour coding.
   * https://stackoverflow.com/questions/27647918/detect-with-javascript-if-users-machine-is-using-12-hour-clock-am-pm-or-24-cl
   * @returns boolean
   */
  function isLocaleTimeFormat12() {
    var date       = new Date(Date.UTC(2012, 11, 12, 3, 0, 0)),
        dateString = date.toLocaleTimeString();
    return !!(dateString.match(/am|pm/i) || date.toString().match(/am|pm/i));
  }

  return {
    timeAgo             : timeAgo,
    getHourMinuteFormat : getHourMinuteFormat,
    isLocaleTimeFormat12: isLocaleTimeFormat12
  }
};
module.exports = HsCommon;
import _ from 'lodash';

let _MuiPhoneNumber;

if (_.get(process, 'browser')) _MuiPhoneNumber = require('material-ui-phone-number').default;
else _MuiPhoneNumber = undefined;

export const MuiPhoneNumber = _MuiPhoneNumber || (() => null);

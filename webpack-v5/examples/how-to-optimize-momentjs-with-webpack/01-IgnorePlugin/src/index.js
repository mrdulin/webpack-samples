import moment from 'moment';
import 'moment/locale/zh-tw';

moment.locale('zh-tw');

console.log(moment().fromNow());

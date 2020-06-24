import Moment from 'moment';

export function formatDate(_date, _format){
    return Moment(new Date(_date)).format(_format);
}
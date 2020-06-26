import Moment from 'moment';

export const formatDate = (_date, _format) => {
    return Moment(new Date(_date)).format(_format);
}

export const daysDiff = (_start, _end) => {
    try{
        const start = new Date(_start);
        const end   = new Date(_end);
        const msPerDay = 1000 * 60 * 60 * 24;

        return Math.round((end - start) / msPerDay);

    }catch(err){
        return err.toString();
    }
}
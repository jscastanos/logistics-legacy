export const getServiceStatus = (status) => {
    switch(status){
        case 1 : return 'pending';
        case 2 : return 'approved';
        case 3 : return 'completed';
        case 4 : return 'denied';
        default: return ''
    }
}
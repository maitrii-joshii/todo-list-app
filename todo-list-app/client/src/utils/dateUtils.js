import moment from "moment";

export const formatDateTime = (dateTime) => {
    return moment(dateTime).format('lll');
}
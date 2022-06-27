import moment from 'moment';

export const timeDate = (time) => {
  const timeMessage = moment(time);

  return timeMessage.format('LT');
};

export const timeDateGeneral = (time) => {
  const timeMessage = moment(time);

  return timeMessage.format('dddd, DD MMMM YYYY');
};

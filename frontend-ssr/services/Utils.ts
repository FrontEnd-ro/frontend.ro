export { v4 as uuid } from 'uuid';

/* Here we make the function timeAgo to format a JavaScript Date as a string stating
the time elapsed similar to the way you see times displayed on Stack Overflow.
We parse the time, and show it depending on when it was submitted:

➤ Just now - if the submission was under one minute ago
➤ X minutes ago or Y hours ago
➤ Yesterday
➤ X days ago - up to 3 days
➤ 10 Sept 2020 if it as more than 3 days ago
*/

export const timeAgo = (date: Date): string => {
  let ms = Date.now() - date.getTime();
  let seconds = Math.floor(ms / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);

  if (seconds < 60) {
    return 'Just now';
  }
  if (minutes < 60) {
    return minutes === 1
      ? `${minutes} minute ago`
      : `${minutes} minutes ago`;
  }
  if (hours < 24) {
    return hours === 1
      ? `${hours} hour ago`
      : `${hours} hours ago`;
  }
  if (hours > 24 && hours < 24 * 2) {
    return 'Yesterday';
  }
  if (days < 3) {
    return days === 1
      ? `${days} day ago`
      : `${days} days ago`;
  }
  if (days > 3) {
    return formatDate(date);
  }
  return formatDate(date);
};
export const formatDate = (dateToFormat: Date): string => {
  //  Convert a string like '2020-09-20T00:00:00' into '20 September 2020'
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let date = new Date(dateToFormat);
  let str = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  return str;
};

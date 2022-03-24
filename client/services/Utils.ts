import SweetAlertService from './sweet-alert/SweetAlert.service';

export { v4 as uuid } from 'uuid';

// eslint-disable-next-line @typescript-eslint/no-empty-function
export function noop() { }

/**
 * Here we make the function timeAgo to format a JavaScript Date as a
 * string stating the time elapsed. We parse the time, and show it
 * depending on when it was submitted:
 *
 * ➤ Just now - if the submission was under one minute ago
 * ➤ X minutes ago or Y hours ago
 * ➤ Yesterday
 * ➤ X days ago - up to 3 days
 * ➤ 10 Sept 2020 if it as more than 3 days ago
 */
export const timeAgo = (date: Date): string => {
  let ms = Date.now() - date.getTime();
  let seconds = Math.floor(ms / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);

  if (seconds < 60) {
    return 'Chiar acum';
  }
  if (minutes < 60) {
    return minutes === 1
      ? `acum ${minutes} minut`
      : `acum ${minutes} minute `;
  }
  if (hours < 24) {
    return hours === 1
      ? `acum ${hours} oră`
      : `acum ${hours} ore`;
  }
  if (hours > 24 && hours < 24 * 2) {
    return 'Ieri';
  }
  if (days < 3) {
    return days === 1
      ? `acum ${days} zi`
      : `acum ${days} zile`;
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

export const alphabeticSortComparator = (nameA, nameB) => {
  let lowercaseNameA = nameA.toLowerCase();
  let lowercaseNameB = nameB.toLowerCase();

  if (lowercaseNameA === lowercaseNameB) {
    return 0;
  }

  return lowercaseNameA < lowercaseNameB ? -1 : 1;
};

export const nextUntitledFilename = (existingNames, NAME_BASE = 'Untitled file') => {
  let existingUntitledNumbers = [];
  existingNames.forEach((name) => {
    if (name === NAME_BASE) {
      existingUntitledNumbers.push(0);
      return;
    }

    let group = new RegExp(`^${NAME_BASE} [(](.+)[)]$`, 'g').exec(name);
    if (group) {
      existingUntitledNumbers.push(Number(group[1]));
    }
  });

  existingUntitledNumbers.sort((nrA, nrB) => nrA - nrB);

  let newName = NAME_BASE;
  let count = 0;
  let i = 0;

  existingUntitledNumbers.forEach((nr) => {
    if ((nr === 0 && newName === NAME_BASE) || nr === count) {
      count = nr + 1;
      newName = `${NAME_BASE} (${count})`;
    }
  });

  return newName;
};

export const includeScript = (src: string) => {
  const alreadyExists = document.querySelector(`script[src="${src}"]`) !== null;

  if (alreadyExists) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;

    script.addEventListener('load', resolve);
    script.addEventListener('error', reject);
    document.body.appendChild(script);
  });
};

export const removeScript = (src: string) => {
  const script = document.querySelector(`script[src="${src}"]`);

  if (script !== null) {
    script.remove();
  }
};

/**
 * Returns a Promise which resolves when the number of
 * milliseconds has passed.
 * @param milliseconds number
 * @returns Promise
 */
export const wait = (milliseconds: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, milliseconds);
  });
};

/**
 * Returns only the part of text representing {percentage} percent
 * from the total text.
 * @param text string
 * @param percentage number
 * @returns string
 */
export const getTextSection = (text: string, percentage: number) => {
  const sectionLength = Math.round((text.length * percentage) / 100);
  return text.substring(0, sectionLength);
};

export const copyToClipboard = (text: string) => {
  return navigator.clipboard.writeText(text)
    .then(() => {
      SweetAlertService.toast({ text: 'Successfully copied to clipboard.' });
    })
    .catch((err) => {
      console.error("Couldn't copy to the clipboard", { text, err });
      SweetAlertService.toast({
        type: 'error',
        text: "Seems like your browser doesn't support clipboard copying. You have to copy it manually...",
      });
    });
};

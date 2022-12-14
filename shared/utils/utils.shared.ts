export { v4 as uuid } from 'uuid';

export const alphabeticSortComparator = (nameA, nameB) => {
  let lowercaseNameA = nameA.toLowerCase();
  let lowercaseNameB = nameB.toLowerCase();

  if (lowercaseNameA === lowercaseNameB) {
    return 0;
  }

  return lowercaseNameA < lowercaseNameB ? -1 : 1;
};

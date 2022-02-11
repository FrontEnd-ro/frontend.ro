import React, { useMemo } from 'react';
import Highlight, { Language } from '~/components/Highlight/Highlight';

interface Props {
  startingCode: string;
  finalCode: string;
  percentage: number;
  language: Language;
  className?: string;
}

const ModifySolution = ({
  startingCode, finalCode, percentage, language, className = '',
}: Props) => {
  const codeSteps = useMemo(
    () => getStepsBetween(startingCode, finalCode),
    [startingCode, finalCode],
  );
  // The step index that's at the current `percentage` value.
  const percentageIndex = Math.round(((codeSteps.length - 1) * percentage) / 100);

  return (
    <Highlight
      language={language}
      withCopy={false}
      className={className}
      variant="minimalist"
      textWrap="wrap"
      code={codeSteps[percentageIndex] ?? ''}
    />
  );
};

export default ModifySolution;

/**
 * Compute the intermediate steps if we want to "transition"
 * from stringA to stringB. Each "step" is either a character being
 * written or a character being deleted.
 * Note: this doesn not compute the solution with the smallest
 * number of steps. Instead, it's a more naive approach, computing
 * the common `prefix` and `suffix`, and then incrementally "deleting"
 * then "writing" each character in between.
 * @param stringA string
 * @param stringB string
 * @returns string[]
 */
function getStepsBetween(stringA: string, stringB: string) {
  const smallestLength = Math.min(stringA.length, stringB.length);

  let biggestCommonPrefix = '';
  for (let i = smallestLength; i >= 0; i -= 1) {
    const subStringA = stringA.substring(0, i);
    const subStringB = stringB.substring(0, i);

    if (subStringA === subStringB) {
      biggestCommonPrefix = subStringA;
      break;
    }
  }

  let biggestCommonSuffix = '';
  for (let i = 0; i <= smallestLength - biggestCommonPrefix.length; i += 1) {
    const subStringA = stringA.substring(stringA.length - i);
    const subStringB = stringB.substring(stringB.length - i);

    if (subStringA === subStringB) {
      biggestCommonSuffix = subStringA;
    }
  }

  const result = [stringA];
  let inBetweenStringA = stringA.substring(
    biggestCommonPrefix.length, stringA.length - biggestCommonSuffix.length,
  );
  let inBetweenStringB = stringB.substring(
    biggestCommonPrefix.length, stringB.length - biggestCommonSuffix.length,
  );

  for (
    let i = 0;
    i < stringA.length - biggestCommonPrefix.length - biggestCommonSuffix.length;
    i += 1
  ) {
    inBetweenStringA = inBetweenStringA.slice(0, -1);
    result.push(`${biggestCommonPrefix}${inBetweenStringA}${biggestCommonSuffix}`);
  }

  for (let i = 1; i <= inBetweenStringB.length; i += 1) {
    result.push(`${biggestCommonPrefix}${inBetweenStringB.slice(0, i)}${biggestCommonSuffix}`);
  }

  return result;
}

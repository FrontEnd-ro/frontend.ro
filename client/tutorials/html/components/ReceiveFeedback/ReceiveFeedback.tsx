import React, { useRef } from 'react';
import { getTextSection } from '~/services/Utils';
import Highlight, { Language } from '~/components/Highlight/Highlight';

import styles from './ReceiveFeedback.module.scss';

interface Props {
  code: string;
  percentage: number;
  language: Language;

  // Code sections for which we have feedback
  feedbackSections: string[];

  // Feedback for the above code sections.
  // We can have multiple sections but only one feedback.
  feedbackText: string
  className?: string;
}

const ReceiveFeedback = ({
  code, language, percentage, feedbackSections, feedbackText, className = '',
}: Props) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const highlightWrapperRef = useRef<HTMLDivElement>(null);

  const init = () => {
    const elementsWithFeedback = [...rootRef.current.querySelectorAll('*')]
      .filter((el: HTMLElement) => feedbackSections.includes(el.innerText));

    if (elementsWithFeedback.length === 0) {
      console.warn('ReceiveFeedback.init: expecting "elementsWithFeedback" to not be empty. Either we have a bug or the feedback sections are not matching the code');
      return;
    }

    encapsulateTextNode(highlightWrapperRef.current);
    fadeElementsExcept(highlightWrapperRef.current, elementsWithFeedback as HTMLElement[]);
  };

  return (
    <div ref={rootRef}>
      {percentage > 0 && (
        <p className={styles.feedback}>
          {getTextSection(feedbackText, percentage)}
        </p>
      )}
      <div ref={highlightWrapperRef}>
        <Highlight
          code={code}
          withCopy={false}
          language={language}
          className={className}
          onHighlight={init}
          variant="minimalist"
          textWrap="wrap"
        />
      </div>
    </div>
  );
};

export default ReceiveFeedback;

/**
 * Encapsulate all Text Nodes inside elements of type `tag`.
 * @param root HTMLElement
 * @param tag string
 */
function encapsulateTextNode(root: HTMLElement, tag = 'span') {
  const allChildren = root.querySelectorAll('*');

  allChildren.forEach((child) => {
    const childNodes = [...child.childNodes];
    childNodes
      .filter((node) => node.nodeType === 3)
      .forEach((node) => {
        const span = document.createElement(tag);
        span.innerText = node.textContent;
        node.replaceWith(span);
      });
  });
}

/**
 * Fade all leaf nodes contained in root,
 * except for the ones in the targets array, or contained by
 * any element from the targets array.
 * @param root HTMLElement
 * @param targets HTMLElement[]
 * @param opacity number
 */
function fadeElementsExcept(root: HTMLElement, targets: HTMLElement[], opacity = 0.2) {
  const allChildren = [...root.querySelectorAll('*')] as HTMLElement[];

  allChildren
    .filter((child) => child.childElementCount === 0)
    .filter((child) => {
      return !targets.some((t) => child.contains(t) || t.contains(child));
    })
    .forEach((child) => {
      if (child instanceof HTMLElement) {
        child.style.opacity = opacity.toString();
      }
    });
}

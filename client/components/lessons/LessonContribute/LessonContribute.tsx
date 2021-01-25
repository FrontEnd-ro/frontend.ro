import React from 'react';
import { GITHUB_URL } from '~/services/Constants';

export default function LessonContribute() {
  return (
    <div className="text-right mr-2">
      <p>
        Ai vreo sugestie de îmbunătățire a acestei lecții?
        {' '}
        <a href={`${GITHUB_URL}/tree/master/frontend-ssr/curriculum`} target="_blank" rel="noreferrer">
          Contribuie pe GitHub
        </a>
      </p>
    </div>
  );
}

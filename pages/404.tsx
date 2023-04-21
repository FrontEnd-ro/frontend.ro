import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { NotFound, NotWroteYet } from '~/components/404';
import { getUpcomingLesson } from '~/curriculum/Curriculum';

export default function Generic404() {
  const router = useRouter();
  const [upcomingLesson, setUpcomingLesson] = useState(undefined);

  useEffect(() => {
    const lesson = getUpcomingLesson(router.asPath);

    setUpcomingLesson(lesson || false);
  }, [router.asPath]);

  if (upcomingLesson === undefined) {
    return null;
  }

  return (upcomingLesson ? <NotWroteYet lesson={upcomingLesson} /> : <NotFound />);
}

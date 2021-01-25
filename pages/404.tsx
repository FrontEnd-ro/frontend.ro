import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { getUpcomingLesson } from '~/services/Constants';
import { NotFound, NotWroteYet } from '~/components/404';

export default function Generic404() {
  const router = useRouter();
  const [upcomingLesson, setUpcomingLesson] = useState(undefined);

  useEffect(() => {
    const lesson = getUpcomingLesson(router.asPath);

    setUpcomingLesson(lesson || false);
  }, []);

  if (upcomingLesson === undefined) {
    return null;
  }

  return (upcomingLesson ? <NotWroteYet lesson={upcomingLesson} /> : <NotFound />);
}

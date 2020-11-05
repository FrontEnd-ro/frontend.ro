/* eslint-disable import/prefer-default-export */

const UPCOMING_LESSONS = [{
  title: 'DevTools',
  href: '/intro/devtools',
}, {
  title: 'CSS Media Queries',
  href: '/css/media-queries',
}, {
  title: 'Graceful Degradation',
  href: '/concepts/graceful-degradation',
}, {
  title: 'How to help',
  href: '/intro/how-to-help',
}, {
  title: 'VS Code',
  href: '/intro/vs-code',
}, {
  title: 'HTML Introduction',
  href: '/html/introduction',
}];

export function getUpcomingLesson(pathname: string): {title: string, href: string} {
  const upcomingLesson = UPCOMING_LESSONS.find((article) => pathname.includes(article.href));

  return upcomingLesson || null;
}

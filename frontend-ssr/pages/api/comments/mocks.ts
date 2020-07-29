import { Comment } from '~/components/feedback-review/entities';

const MOCK_COMMENTS: Comment[] = [
  {
    id: 1, exerciseId: 2, user: 'Pava', comment: 'Lorem ipsum dolor sit amet.',
  },
  {
    id: 2, exerciseId: 2, user: 'Catalin Popusoi', comment: 'Pretium fusce id velit ut tortor pretium.',
  },
  {
    id: 3, exerciseId: 1, user: 'George-Marian Morosac', comment: 'Nibh ipsum consequat nisl vel pretium lectus quam.',
  },
  {
    id: 4, exerciseId: 2, user: 'Cristian Gatu', comment: 'Ac tincidunt vitae semper quis lectus nulla.',
  },
  {
    id: 5, exerciseId: 1, user: 'Dragos Silion', comment: 'Viverra maecenas accumsan lacus vel facilisis.',
  },
];

export default MOCK_COMMENTS;

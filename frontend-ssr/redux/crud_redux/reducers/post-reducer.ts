const DEFAULT_STATE = [
  {
    id: '1', title: 'First Post!', message: 'Hello!', editing: false,
  },
  {
    id: '2', title: 'Second Post', message: 'More text', editing: false,
  },
];

export function postReducer(state = DEFAULT_STATE, action: { type: any; data: any; id: string;}) {
  switch (action.type) {
    case 'ADD_POST':
      return [...state, action.data];
    case 'DELETE_POST':
      return state.filter((post) => post.id !== action.id);
    case 'EDIT_POST':
      return state.map((post) => (post.id === action.id ? { ...post, editing: !post.editing }
        : post));
    case 'UPDATE':
      return state.map((post) => {
        if (post.id === action.id) {
          return {
            ...post,
            title: action.data.newTitle,
            message: action.data.newMessage,
            editing: !post.editing,
          };
        } return post;
      });
    default:
      return state;
  }
}

export default postReducer;

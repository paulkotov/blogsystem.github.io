import { ADD_BLOG, DELETE_BLOG, EDIT_BLOG } from '../constants/ActionTypes';

const initialState = [
  {
    title: 'Lorem',
    text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.',
    annotation: 'Lorem Ipsum - это текст-"рыба", часто используемый...',
    id: 1,
    date: '30-08-2017',
    img: {
      link: '',
      width: 145,
      height: 205
    }
  }
];

export default function blogs(state = initialState, action) {
  switch (action.type) {
    case ADD_BLOG:
      return [
        {
          id: state.reduce((maxId, blog) => Math.max(blog.id, maxId), -1) + 1,
          title: action.title,
          text: action.text,
          annotation:  (() => { return action.text.substring(0, 51)+'...'; })(),
          date: (()=> {
            let d = new Date(); 
            return d.getDate().toString()+'/'+d.getMonth().toString()+'/'+d.getFullYear().toString();
          })(),
          img: { 
            link: action.link,
            width: 145,
            height: 205
          }
        },
        ...state
      ];

    case DELETE_BLOG:
      return state.filter(blog =>
        blog.id !== action.id
      );

    case EDIT_BLOG:
      return state.map(blog =>
        blog.id === action.id ?
          { ...blog, title: action.title, text: action.text } :
          blog
      );

    default:
      return state;
  }
}

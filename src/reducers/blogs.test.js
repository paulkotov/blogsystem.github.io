import blogs from './blogs';
import * as types from '../constants/ActionTypes';
import { expect } from 'chai';

describe('blogs reducer', () => {
  it('should handle initial state', () => {
    expect(
      blogs(undefined, {})
    ).to.deep.equal([
      {
        title: 'Lorem',
        text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.',
        id: 1,
        img: {
          link: '',
          width: 145,
          height: 205
        }
      }
    ]);
  });

  it('should handle ADD_BLOG', () => {
    expect(
      blogs([{
        title: 'Title',
        text: 'Text',
        id: 1,
        img: {
          link: '',
          width: 145,
          height: 205
        }
      }], {
        type: types.ADD_BLOG,
        title: 'Title 2',
        text: 'Text 2',
        link: ''
      })
    ).to.deep.equal([
      {
        title: 'Title 2',
        text: 'Text 2',
        id: 2,
        img: {
          link: '',
          width: 145,
          height: 205
        }
      },
      {
        title: 'Title',
        text: 'Text',
        id: 1,
        img: {
          link: '',
          width: 145,
          height: 205
        }
      }
    ]);
  });

  it('should handle DELETE_BLOG', () => {
    expect(
      blogs([
        {
          title: 'Title',
          text: 'Text',
          id: 1,
          img: {
            link: '',
            width: 145,
            height: 205
          }
        }, {
          title: 'Title 2',
          text: 'Text 2',
          id: 2,
          img: {
            link: '',
            width: 145,
            height: 205
          }
        }
      ], {
        type: types.DELETE_BLOG,
        id: 1
      })
    ).to.deep.equal([
      {
        title: 'Title 2',
        text: 'Text 2',
        id: 2,
        img: {
          link: '',
          width: 145,
          height: 205
        }
      }
    ]);
  });

  it('should handle EDIT_BLOG', () => {
    expect(
      blogs([
        {
          title: 'Title',
          text: 'Text',
          id: 1,
          img: {
            link: '',
            width: 145,
            height: 205
          }
        }, {
          title: 'Title 2',
          text: 'Text 2',
          id: 2,
          img: {
            link: '',
            width: 145,
            height: 205
          }
        }
      ], {
        type: types.EDIT_BLOG,
        title: '0',
        text: '0',
        id: 1
      })
    ).to.deep.equal([
      {
        title: '0',
        text: '0',
        id: 1,
        img: {
          link: '',
          width: 145,
          height: 205
        }
      }, {
        title: 'Title 2',
        text: 'Text 2',
        id: 2,
        img: {
          link: '',
          width: 145,
          height: 205
        }
      }
    ]);
  });
});
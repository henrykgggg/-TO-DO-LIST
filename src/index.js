const mylist = [
  {
    description: 'W3schools',
    completed: false,
    index: 1,
  },
  {
    description: 'hackerrank solutions',
    completed: false,
    index: 2,
  },
  {
    description: 'microverse quiz',
    completed: true,
    index: 3,
  },
  {
    description: 'andela exams',
    completed: false,
    index: 4,
  },
];

const mylists = () => {
  const lists = document.getElementById('todo-lists');
  mylist.map((item) => {
    const listItem = document.createElement('li');
    listItem.classList = 'todo todo-item';
    listItem.id = `${item.index}`;
    listItem.innerHTML = `
    <button type="button" class =${
  item.completed === true ? 'checked-button' : 'unchecked-button'
}> <i class="fa-solid fa-check"></i></button>
    <input type= 'text' class=${
  item.completed === true ? 'decoration' : 'undecorated'
} 
    value = "${item.description} ">
    <span class= "todo-item-span"><i class="fa-solid fa-ellipsis-vertical"></i></span>

    `;
    return lists.appendChild(listItem);
  });
};
window.addEventListener('load', mylists);

// mylists()

// import _ from 'lodash';
// function component() {
//     const element = document.createElement('div');

//       // Lodash, now imported by this script
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//     return element;
//   }

//   document.body.appendChild(component());
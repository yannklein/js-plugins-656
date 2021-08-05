import Sortable from 'sortablejs';

const initSortable = () => {
  const moviesUl = document.querySelector("#results");
  Sortable.create(moviesUl, {
    ghostClass: "ghost",
    animation: 1500,
    onEnd: (event) => {
      alert(`${event.oldIndex} moved to ${event.newIndex}`);
    }
  });
};

export default initSortable;
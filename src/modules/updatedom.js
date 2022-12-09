const updateDom = () => {
  const listItems = document.querySelectorAll('.to-do-item');
  const data = JSON.parse(localStorage.getItem('To-Dos' || '[]'));
  for (let i = 0; i < listItems.length; i += 1) {
    listItems[i].setAttribute('id', data[i].index);
    listItems[i].childNodes[0].childNodes[0].setAttribute(
      'id',
      `to-do-item-${data[i].index}`,
    );
    listItems[i].childNodes[0].childNodes[0].setAttribute(
      'name',
      `to-do-item-${data[i].index}`,
    );
    listItems[i].childNodes[0].childNodes[2].setAttribute(
      'for',
      `to-do-item-${data[i].index}`,
    );
  }
};
export default updateDom;

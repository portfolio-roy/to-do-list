const updateDom = () => {
  const listItems = document.querySelectorAll('.to-do-item');
  const checkBox = document.querySelectorAll('.to-do-checkbox');
  const data = JSON.parse(localStorage.getItem('To-Dos' || '[]'));

  for (let i = 0; i < listItems.length; i += 1) {
    listItems[i].setAttribute('id', data[i].index);
    listItems[i].childNodes[0].childNodes[0].setAttribute(
      'id',
      `to-do-checkbox-${data[i].index}`,
    );
    listItems[i].childNodes[0].childNodes[0].setAttribute(
      'name',
      `to-do-item-${data[i].index}`,
    );
    listItems[i].childNodes[0].childNodes[0].setAttribute(
      'value',
      `${data[i].description}`,
    );
    listItems[i].childNodes[0].childNodes[2].setAttribute(
      'id',
      `to-do-item-${data[i].index}`,
    );
    listItems[i].childNodes[0].childNodes[2].setAttribute(
      'value',
      `${data[i].description}`,
    );

    // const check = document.getElementById(
    //   "to-do-checkbox-" + data[i].index + ""
    // );
    if (data[i].completed === true) {
      checkBox[i].checked = true;
    } else {
      checkBox[i].checked = false;
    }
  }
};
export default updateDom;

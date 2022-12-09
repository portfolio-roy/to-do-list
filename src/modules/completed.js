const isCompolete = () => {
  const data = JSON.parse(localStorage.getItem('To-Dos' || '[]'));
  const checkBox = document.querySelectorAll('.to-do-checkbox');
  for (let i = 0; i < checkBox.length; i += 1) {
    if (data[i].completed === true) {
      checkBox[i].checked = true;
    } else {
      checkBox[i].checked = false;
    }
  }
};

export default isCompolete;

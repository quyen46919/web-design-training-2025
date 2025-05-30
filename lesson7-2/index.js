console.log('Hello world');

// Bước 1: Chọn phần tử trên DOM

const MENU_ITEMS = document.querySelectorAll('.header__menu--item');
const PAGES = document.querySelectorAll('.page');

console.log(MENU_ITEMS);

MENU_ITEMS.forEach((item, index) => {
  // Khi chọn vào menu nào thì chỉ hiển thị page ở vị trí tương ứng
  item.addEventListener('click', () => {
    // Ẩn những page khác đi
    PAGES.forEach((child) => {
      child.classList.remove('show');
      child.classList.add('hide');
    });
    // Hiển thị page ở vị trí tương ứng
    PAGES[index].classList.add('show');
    PAGES[index].classList.remove('hide');
  });
});

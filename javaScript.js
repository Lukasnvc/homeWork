let mobileNavBtn = document.querySelector(`#mobileNavBtn`);

mobileNavBtn.addEventListener('click', ()=> {
  let hiddenNav = document.querySelector(`#hiddenMobileNav`);
  if(hiddenNav.style.right === '-150px'){
  hiddenNav.style.right= '0px';
} else {
  hiddenNav.style.right= '-150px';
}
})
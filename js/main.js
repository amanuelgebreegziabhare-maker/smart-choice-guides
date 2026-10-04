
document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu');
  const links = document.querySelector('.nav-links');
  if(menu) menu.addEventListener('click', () => {
    links.style.display = links.style.display === 'flex' ? '' : 'flex';
    links.style.flexDirection = 'column';
    links.style.position = 'absolute';
    links.style.top = '64px';
    links.style.right = '4%';
    links.style.background = '#fff';
    links.style.padding = '18px';
    links.style.border = '1px solid #e2e8f0';
    links.style.borderRadius = '12px';
  });
});

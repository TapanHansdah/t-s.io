window.addEventListener('scroll', function() {
  const scrollY = window.scrollY;
  const bodyElement = document.body;

  if (scrollY > 100) { // Change threshold as needed
    bodyElement.classList.remove('light-background');
    bodyElement.classList.add('dark-background');
  } else {
    bodyElement.classList.add('light-background');
    bodyElement.classList.remove('dark-background');
  }
});

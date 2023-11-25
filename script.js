window.addEventListener('scroll', function() {
  if (window.scrollY > 100) {
    document.body.classList.add('dark-background');
  } else {
    document.body.classList.remove('dark-background');
  }
});

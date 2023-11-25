window.addEventListener('scroll', function() {
  if (window.scrollY > 100) {
    document.body.classList.add('dark-background');
  } else {
    document.body.classList.remove('dark-background');
  }
});
.dark-background {
  background: linear-gradient(to bottom, #cccccc 0%, #333333 100%);
}

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navM = document.querySelector('.nav-m');
    const closeBtn = document.querySelector('.nav-m .close');

    if (hamburger && navM && closeBtn) {
        hamburger.addEventListener('click', () => {
            navM.classList.add('show');
        });
        closeBtn.addEventListener('click', () => {
            navM.classList.remove('show');
        });
    }
});
document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const btn = this.querySelector('.contact-btn');
  btn.classList.add('sent');
  setTimeout(() => {
    btn.classList.remove('sent');
    this.reset();
  }, 2000);
});
function alpine_tabs() {
  return {
    selected: 'about',
    darkMode: false,
    init() {
      var lazyLoadInstance = new LazyLoad({
        // Your custom settings go here
      });
      if (localStorage.theme === 'dark') {
        document.querySelector('html').classList.add('dark');
        document.querySelector('html').classList.remove('light');
      } else {
        document.querySelector('html').classList.remove('dark');
        document.querySelector('html').classList.add('light');
      }
      this.darkMode = document.querySelector('html').classList.contains('dark')
    },

    change_dark() {
      if (localStorage.theme === 'dark') {
        localStorage.theme = 'light';
        document.querySelector('html').classList.add('light');
        document.querySelector('html').classList.remove('dark');
      } else {
        localStorage.theme = 'dark';
        document.querySelector('html').classList.add('dark');
        document.querySelector('html').classList.remove('light');
      }
      this.darkMode = document.querySelector('html').classList.contains('dark')
    },
    button_tabs(data) {
      this.selected = data
    },
  }
}
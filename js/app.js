function init() {
     new Vue({
          el: '#app',
          data: {
               navElems: [
                    'HOME',
                    'SERVICE',
                    'SKILLS',
                    'PARTNERS',
                    'BLOG',
               ],

          },
          
          methods: {
               
          },
     });
     console.log('VUE OK');
}


document.addEventListener('DOMContentLoaded', init);

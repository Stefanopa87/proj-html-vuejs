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

               partnersImg:[
                    '-5',
                    '-1',
                    '-2',
                    '-3',
                    '-4',
                    '-5',
               ]

          },
          
          methods: {
               
          },
     });
     console.log('VUE OK');
}


document.addEventListener('DOMContentLoaded', init);

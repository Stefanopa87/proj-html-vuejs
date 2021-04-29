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
               ],
               footerAbout:[
                    'The Company',
                    'Institutional',
                    'Social & Events',
                    'Innovation',
                    'Environment',
                    'Tecnology',
               ],
               footerTransport:[
                    'Industrialized',
                    'Chemicals',
                    'Packaged Liquids',
                    'Constuction',
                    'Lamined Wood',
                    'And others',
               ],
               footerSupport:[
                    'Responsability',
                    'Terms of Use',
                    'About Cookies',
                    'Privacy Policy',
                    'Accessibility',
                    'Information',
               ],               
          },
          
          methods: {             
                                       
          },
          
          mounted() {

               var about = this.footerAbout
               
               console.log(about);

               var transport = this.footerTransport
               
               console.log(transport);

               var support = this.footerSupport
               
               console.log(support);
          },          
     });               
     console.log('VUE OK');     
}

document.addEventListener('DOMContentLoaded', init);




//Inicializamos VUE

var App = new Vue({
    el: '#App',
    
    data: {
        guia: {
            
            titulo: 'Título - Guía',
            profesor:'Miguel R. Apaza Alave',
            version:'1.1',
            objetivo: 'escribir el objetivo Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
            instrucciones: 'escriba las instrucciones',  
        },
        src: 'NAC-LOGO.png',
        respuestas: ["01) \\( \\:01 \\)", "02) \\( \\: 02 \\)", "03) \\( \\: 03 \\)", "04) \\( \\: 04 \\)", "05) \\( \\: 05 \\)", "06) \\( \\: 06 \\)",
            "07) \\( \\: 07  \\)", "08) \\( \\: 08  \\)", "09) \\( \\: 09  \\)", "10) \\( \\: 10  \\)", "11) \\( \\: 11  \\)", "12) \\( \\: 12  \\)",
            "13) \\( \\: 13  \\)", "14) \\(  \\: 14 \\)", "15) \\( \\: 15  \\)", "16) \\( \\: 16  \\)", "17) \\( \\: 17  \\)", "18) \\( \\: 18  \\)",
            "19) \\( \\: 19  \\)", "20) \\( \\: 20  \\)", "21) \\( \\: 21  \\)", "22) \\( \\: 22  \\)", "23) \\( \\: 23  \\)", "24) \\( \\: 25  \\)",
            "25) \\( \\: 25  \\)", "26) \\( \\: 26  \\)", "27) \\( \\: 27  \\)","28) \\( \\: 28  \\)","",""
        ]
        
        
    },

    methods: {
  
        Numerar: function(){
            var nhoja;
            
            return nhoja
         }
       
    },
    computed: { //Se auto ejecuta cuando alguna variable perteneciente a data cambia su valor
    

    },

    beforeCreate: function () {
        console.log('beforeCreate');
    },
    created: function () {
        console.log('created');
    },
    beforeMount: function () {
        console.log('beforeMount');
    },
    beforeUpdate: function () {

        console.log('Inicio de beforeUpdate');
       
        console.log("fin de beforeUpdate ")
    },
    updated: function () {
        console.log('updated');
    },
    beforeDestroy: function () {
        console.log('beforeDestroy');
    },
    destroyed: function () {
        console.log('destroyed');
    }
})


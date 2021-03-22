//stampare in pagina un item per ogni elemento
// contenuto in un array

//ogni item ha una "x" associata:
// cliccando su di essa, l'item viene rimosso dalla lista

//predisporre un input per aggiungere un nuovo item 
//alla lista: digitando il tasto invio oppure ciccando 
//su un pulsante, il testo digitato viene aggiunto alla 
//lista


Vue.config.devtools = true;

var app = new Vue({
    el: '#root',

    data: {
        doListArray: [
            "da fare 1",
            "da fare 2",
            "da fare 3"
        ]

    },
    methods: {
        removeTask: function(index) {
            this.doListArray.splice(index, 1);
            console.log(this.doListArray);
        }
    }
})
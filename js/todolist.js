// cartella/repo di oggi: vue-todolist
// Esercizio:


// Bonus:
// - Oltre al click sul pulsante, consentire l'inserimento del nuovo item anche premendo il tasto Invio della tastiera, dopo aver scritto il testo nel campo di input.
// Consiglio del giorno: per alcuni task, potrebbe essere necessario fare delle ricerche e capire come lavorano alcune funzioni o direttive leggendo le documentazioni ufficiali ed analizzando i relativi esempi.

var app =
  new Vue({
    el: '#app',
    data: {
      todolist: ["regalo anniversario","allenare Aron","finire grafica regalo", "scoprire problemi aggiornamento windows","preparare cose per pesca domenica","studiare inglese"],
      addItem:"",
    },
    methods: {
      submit:function(){
        console.log("test");
        this.addElement();
      },
      // - aggiungere un campo di input e un pulsante per aggiungere nuove cose da fare alla lista;
      addElement:function(){
        this.todolist.push(this.addItem);
      },
      // - cancellare un item dalla lista, al click sulla relativa icona 'X'.
      removeElement: function(index){
        console.log(index);
        this.todolist.splice(index,1);
        console.log(this.todolist)

      }
  }

})

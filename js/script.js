// https://flynn.boolean.careers/exercises/api/random/mail
// Generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Far comparire gli indirizzi email solamente quando sono stati tutti generati

var app = new Vue(
    {
        el: '#root',
        data: {
          randomEmail: null,
          emailsArray: [],
        },
        methods: {
          getRandomEmailFromApi() {
            for (let i = 10; i > this.emailsArray.length; i--) {
                // Get random email from the api
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                // Then save the random email in the variable randomEmail
                this.randomEmail = response.data.response;
                // Push the emails in the emailsArray till the number of items is 10
                this.emailsArray.push(this.randomEmail);
                });       
            }              
          }
        },
        mounted() {
            // Call the function when the page starts the loading
            this.getRandomEmailFromApi();
        }
    }
  );

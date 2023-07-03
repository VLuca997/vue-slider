const slides = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];



const { createApp } = Vue; // connessione del createApp a Vue.
//Creo l'app Vue:
const app = createApp({
    data() {
        return{
            itemIndexActive: 0, // indice attivo nel carosello:
            thumbIndexActive: 0, // indice attivo nella lista thumb
            slides:[ // Array di oggetti
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                },
            ],
        };
    },
    computed: {
        // Calcoliamo quale immagine immettere basandoci sull'indice
        currentImage(){
            return this.slides[this.itemIndexActive];
        },
    },
    methods: {
        //funzione scollUP
        scrollDown(){
            if(this.itemIndexActive > 0){ // controlliamo se l'indice dell'elemento attivo è > di 0
                this.itemIndexActive--; // se lo è decrementa l'indice attivo di 1 per dare l'active ad un altra immagine
            }
            else{ // se l'indice attivo è gia 0, per la creazione di un effetto loop, l'indice viene decrementato e assegnat all'ultimo elemento dell'array
                this.itemIndexActive = this.slides.length -1;
            }
            this.thumbIndexActive = this.itemIndexActive; // assegniamo l'indice attivo al thumb con lo stesso indice, in modo da rendere l'elemento marcato, come se fosse selezionato, anche perche lo è xD
        },
    }

});
app.mount('#app');
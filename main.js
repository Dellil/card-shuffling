new Vue({
    el: '#app',
    data: {
        ranks: ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
        suits: ['♥','♦','♠','♣'],
        cards: [],
        suitColor: {
            '♠': 'black',
            '♣': 'black,',
            '♥': 'red',
            '♦': 'red'
        },
        shuffleSpeed: 'shuffleMedium'
    },
    created() {
        this.displayInitialDeck();
    },
    mounted() {
        this.iterativeShuffle();
    },
    methods: {
        displayInitialDeck() {
            let id = 1;
            this.cards = [];

            for( let s = 0; s < this.suits.length; s++ ){
                for( let r = 0; r < this.ranks.length; r++ ){
                    let card = {
                        id: id,
                        rank: this.ranks[r],
                        suit: this.suits[s]
                    }
                    this.cards.push(card);
                    id++;
                }
            }
        },
        shuffleDeck() {
            for(let i = this.cards.length - 1; i > 0; i--){
                let randomIndex = Math.floor(Math.random() * i);

                // exchange
                let temp = this.cards[i];
                Vue.set(this.cards, i, this.cards[randomIndex]);
                Vue.set(this.cards, randomIndex, temp);
                // this.cards[i] = this.cards[randomIndex];
                // this.cards[randomIndex] = temp;
            }
        },
        iterativeShuffle(){
            setInterval(() => {
                this.shuffleDeck();
            }, 2500);
        }
    }
})
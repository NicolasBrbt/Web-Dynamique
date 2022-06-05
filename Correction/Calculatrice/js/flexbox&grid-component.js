/**
 * Composant : key
 * Affiche les input de la calculatrice en assignant la valeur des boutons par la prop "data".
 */
Vue.component('key', {
    props: ['data'],
    template: `
    <div class="item">
        <input type="button" :value="data.value"/>
    </div>
    `
})

/**
 * 
 */
var calculatrice = new Vue({
    el: "#app-calculatrice",
    data: {
        keys: [
            { id: 0, value: '1' },
            { id: 1, value: '2' },
            { id: 2, value: '3' },
            { id: 3, value: '-' },
            { id: 4, value: '4' },
            { id: 5, value: '5' },
            { id: 6, value: '6' },
            { id: 7, value: '+' },
            { id: 8, value: '7' },
            { id: 9, value: '8' },
            { id: 10, value: '9' },
            { id: 11, value: '*' },
            { id: 12, value: 'C' },
            { id: 13, value: '0' },
            { id: 14, value: '=' },
            { id: 15, value: '/' }
        ]
    }

})
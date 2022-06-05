/**
 * Composant : keyboard
 * Affiche les quatres lignes du tableau à l'aide de leurs props respectives en utilisant le composant "key".
 */
Vue.component('keyboard', {
    props: ['row1', 'row2', 'row3', 'row4'],
    template: `
    <table>
        <tr>
            <key v-for="key in row1" v-bind:data="key" v-bind:key="key.id"></key>
        </tr>
        <tr>
            <key v-for="key in row2" v-bind:data="key" v-bind:key="key.id"></key>
        </tr>
        <tr>
            <key v-for="key in row3" v-bind:data="key" v-bind:key="key.id"></key>
        </tr>
        <tr>
            <key v-for="key in row4" v-bind:data="key" v-bind:key="key.id"></key>
        </tr>
    </table>
    `
})

/**
 * Composant : key
 * Affiche les input de la calculatrice en assignant la valeur des boutons par la prop "data".
 */
Vue.component('key', {
    props: ['data'],
    template: `
    <td>
        <input class="item" type="button" :value="data.value" @click="onClick"/>
    </td>
    `
})

/**
 * Instance de Vue qui cible l'élément #app-calculatrice en passant les données pour les lignes du tableau.
 */
var calculatrice = new Vue({
    el: "#app-calculatrice",
    data: {
        row1: [
            { id: 0, value: '1' },
            { id: 1, value: '2' },
            { id: 2, value: '3' },
            { id: 3, value: '-' }
        ],
        row2: [
            { id: 4, value: '4' },
            { id: 5, value: '5' },
            { id: 6, value: '6' },
            { id: 7, value: '+' }
        ],
        row3: [
            { id: 8, value: '7' },
            { id: 9, value: '8' },
            { id: 10, value: '9' },
            { id: 11, value: '*' }
        ],
        row4: [
            { id: 12, value: 'C' },
            { id: 13, value: '0' },
            { id: 14, value: '=' },
            { id: 15, value: '/' }
        ]
    }
})
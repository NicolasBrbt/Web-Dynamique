Vue.component('key',{
    props: ['data'],
    template: `
    <div class="key">
    <input type="button" v-bind:value "data.value v-on:click="-onclick"/>"
    </div>`,
    methods: {
        onclick: function(event){

        }
    }
})

Vue.component('keyboard',{
    props: ['keys'],
    template: `
    <div id="keyboard" class="container">
    <key v-for="key in keys" v-bind:data="key" v-bind:key="key.id"></key>
    </div>`
})

Vue.component('calculatrice',{
    props: [],
    template: `<div id="calculatrice classe="frame">
    `
})

var calculatrice= new Vue({
    el:'#app-calculatrice'
})
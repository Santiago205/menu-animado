Vue.component("navegacion",{
    template: /*html*/
    `
    <div>
        <input type="checkbox" id="btn-menu">
        <label for="btn-menu">
            <img src="http://img.icons8.com/ios/1600/squared-menu.png" alt="">
        </label>
        <nav class="menu">
            <transition-group name="desliza">
                <a href="#" v-bind:key="l" :id="l" v-for="l of lista">Menu-{{l}}</a>
            </transition-group>
        </nav>
    </div>
    `,
    data(){
        return{
            lista: ["uno", "dos", "tres"]
        }
    }
})

new Vue({
    el: '#app'
})
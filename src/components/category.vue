<template>
   <div class="category">
       <input @change="showBread" :checked="checked"  type="checkbox">
       <label for="">Bread</label>
       <button v-on:click="showBread">bread</button>
       <button>mutton</button>
       <button>honey</button>
       {{emptyboxes}}
       {{checked}}
        
         <div v-if="checked" class="">
       <div v-for="(emptybox,i) in someArray" :key="i" class="category-array">
        {{emptybox.brand}}
      
      <p>{{emptybox.category}}</p>
      <img :src="emptybox.img" alt="">
       </div>
         </div>
         <p><router-link to="/accordian">Accordian</router-link></p>
   </div>
</template>
<script>
import Castle from "./castle.jpg"

export default {
  data(){
      return{
          array:[
              {
                  category:'biscuit',
                  brand:'bread',
                  img:'https://picsum.photos/id/1005/600/200'
              },
                {
                  category:'honey',
                  brand:'parle',
                  img:'https://picsum.photos/id/1005/600/200'
              },
                {
                  category:'honey',
                  brand:'parle',
                  img:'https://picsum.photos/id/1005/600/200'
              },
              {
                  category:'cake',
                  brand:'red-velvet',
                   img:Castle
              }
          ],
          emptyboxes:[]

        ,
          someArray:""

          ,
          checked:false
      }
  },
  methods:{
      showBread(){
        this.checked=!this.checked
      if(this.checked){this.emptyboxes.push( this.array.find(item=>item.category ==='cake'));
      this.someArray=[...this.emptyboxes]
      
      }else{
          {this.emptyboxes.splice( this.array.filter(item=>item.category ==='cake'))
      
      }
      }
      }
      }
  
}
</script>

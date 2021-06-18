<template>
   <div class="category">
       <input @change="showBread" v-model="checked" type="checkbox">
       <label for="">Bread</label>
       <button v-on:click="showBread">bread</button>
       <button>mutton</button>
       <button>honey</button>
       {{emptybox}}
       {{checked}}
   </div>
</template>
<script>


export default {
  data(){
      return{
          array:[
              {
                  category:'biscuit',
                  brand:'bread'
              },
                {
                  category:'honey',
                  brand:'parle'
              },
                {
                  category:'honey',
                  brand:'parle'
              },
              {
                  category:'cake',
                  brand:'red-velvet'
              }
          ],
          emptybox:[

          ],
          checked:false
      }
  },
  methods:{
      showBread(){
          if(this.checked){
       this.emptybox.push( this.array.filter(item=>item.category ==='cake'))
      }
      }
  }
}
</script>

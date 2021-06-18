<template>
   <div class="category">
       <input @change="showBread" v-model="checked" type="checkbox">
       <label for="">Bread</label>
       <button v-on:click="showBread">bread</button>
       <button>mutton</button>
       <button>honey</button>
       {{emptyboxes}}
       {{checked}}
         {{emptyboxes.category}}
       <div v-for="(emptybox,i) in emptyboxes" :key="i" class="category-array">
        {{someArray}}
        
       </div>
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
      if(this.checked){const rey=this.emptyboxes.push( this.array.filter(item=>item.category ==='cake'));
      this.emptyboxes=rey
      
      }else{
          {this.emptyboxes.splice( this.array.filter(item=>item.category ==='cake'))
      
      }
      }
      }
      }
  
}
</script>

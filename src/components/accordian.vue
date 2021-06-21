<template>
    <div class="master-sort">
        <div class="sort">
            <p>sort by popularity <span> <button v-on:click="toggle=!toggle"><i class="fas fa-angle-down"></i></button></span></p>
            <input type="checkbox"><label for="popularity">popularity</label> <br>
            <input type="checkbox"><label for="Discount">Discount</label> <br>
            <input type="checkbox"><label for="Name">Name</label> <br>
            <input type="checkbox"><label for="Customer Top Rated">Customer Top Rated</label>
        </div>
        <div class="discount">
            <p>Discount <span> <button v-on:click="toggle=!toggle"><i v-if="!toggle" class="fas fa-angle-down"></i></button></span>
           <button><i v-if="toggle" v-on:click="toggle=!toggle" class="fas fa-window-close"></i></button>
             </p>
            <div v-if="toggle" class="toggle-element">
            <input type="checkbox"><label for="comparison">40% and above</label>
            <input type="checkbox"><label for="comparison">30% and above</label>
            <input type="checkbox"><label for="comparison">20% and above</label>
            <input type="checkbox"><label for="comparison">10% and above</label>
             <input type="checkbox"><label for="comparison">Upto 10%</label>
            </div>
        </div>
    </div>
</template>
<script>


export default {
  data(){
      return{
          toggle:false
      }
  }
}
</script>

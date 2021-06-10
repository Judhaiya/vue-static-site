<template>
    <div class="Feedback">
        <h2 class="f-heading">Feedback from our customers</h2>
        <div class="display-grid">

        <div v-for="(resort,i) in hotel" :key="i" class="card">
         <p>{{resort.HotelName}}</p>
         <p>{{resort.feedback}}</p>
        </div>
        </div>
     
    </div>
</template>
<script>
 

export default {
    computed:{
        hotel(){
            return this.$store.state.hotel
        }
    }
        
    
}
</script>
<style>
.Feedback{
    margin-top:2rem;
}
.display-grid{
   
   display:grid;
   grid-template-columns: 1fr 1fr 1fr;
 
 }
 .card{
   background-color: rgba(255, 130, 242, 0.8);
  
   text-align: center;
   padding:20px;
   margin:2rem;
 }
 .f-heading{
     text-align: center;
 }
</style>
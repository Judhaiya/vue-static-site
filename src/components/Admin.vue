<template>
    <div class="Admin">
        <div class="admin-container">
        <h3 class="admin-heading">Register the Hotel name along with feedback</h3>
        
      <form class= "form" action="">
          <label for="hotelName">HotelName</label><br>
          <input v-model="userFeedback.HotelName" type="text"><br>
          <label for="feedback">feedback</label><br>
          <textarea v-model=" userFeedback.feedback" name="" id="" cols="30" rows="10"></textarea><br>
          <button v-on:click.prevent="add">Submit</button>

      </form>
    </div>
    </div>
</template>
<script>


export default {
  data(){
     return{
         userFeedback:{
             HotelName:"",
            feedback:""
         }
     }
},
methods:{
 add:function(){
     this.$store.state.hotel.push(this.userFeedback);
       this.userFeedback = {
             HotelName:"",
            feedback:""
         }
 }
}
}
</script>
<style>
.Admin{
     display:flex;
    justify-content: center;
     align-items: center;
     margin-top:2rem;
}
.admin-heading{
    margin-bottom:2rem ;
}
</style>


<template>
    <div class="contact-wrapper">
        <h3>Add Contact</h3>
        <form action="" class="form-wrapper">
            <input v-model="storeNum" class="add" type="text">
            <button v-on:click.prevent="addNum" class="add">Add</button>
        </form>
       <div v-for="(storeContact,i) in storeContacts" :Key="i" class="contact-info">
        <p>{{storeContact}}</p>
        <button v-on:click="del(i)"  class="del"><i class="fas fa-user-minus"></i></button>
        <button v-on:click="edi" ><i class="fas fa-user-edit"></i></button>
        <form v-if="editMode" action="">
            <input v-model="beforeEdit" type="text" class="editContact"><br>
            <button v-on:click.prevent="cancel" class="cancel">Cancel</button>
            <button v-on:click.prevent="store" class="submit">Submit</button>
        </form>
       
       </div>
    </div>
</template>
<script>


export default {
   data(){
       return{
           storeContacts:[],
           storeNum:"",
           editMode:false,
           beforeEdit:"",
           
        

       }
   },
   methods:{
    addNum:function(){
     this.storeContacts.push(this.storeNum)
     this.storeNum=""
     
    },
    del:function(i){
        this.storeContacts.splice(i)
    },
   
   
   cancel:function(){
      this.editMode = false;
     
      
   },
   edi:function(){
   this.editMode=true
   }
   

}
}
</script>
<style>
.editMode{
    display:block;
}
.form-wrapper{
    display:flex;
    align-items: center;
    justify-content: center;
    min-height:20vh;
}
.contact-info{
    display:flex;
      align-items: center;
    justify-content: center;


}
.contact-wrapper{
    text-align: center;
}

</style>
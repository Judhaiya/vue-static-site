<template>
    <div class="contact-wrapper">
        <h3>Add Contact</h3>
        <form action="" class="form-wrapper">
            <input v-model="storeNum.contact" class="add" type="text">
            <button v-on:click.prevent="addNum" class="add">Add</button>
        </form>
       <div  v-for="(storeContact,i) in storeContacts" :Key="i" class="contact-info">
        <div   class="wrapper-for-storecontact">
        <p>{{storeContact.contact}}</p>
        <button v-on:click="del(i)"  class="del"><i class="fas fa-user-minus"></i></button>
        <button v-on:click="edi" ><i class="fas fa-user-edit"></i></button>
        </div>
        <div v-if="editMode"  class="wrapper">
        <form action="">
            <div  class="form-container">
            <input v-model.lazy="storeContact.contact"  type="text" class="editContact"><br>
            <button v-on:click.prevent="cancel(i)" class="cancel">Cancel</button>
            <button v-on:click.prevent="store" class="submit">Submit</button>
            </div>
        </form>
        </div>
       </div>
    </div>
</template>
<script>


export default {
   data(){
       return{
           storeContacts:[],
           storeNum:{
               contact:""
           },
           editMode:false,
        
           
        

       }
   },
   methods:{
    addNum:function(){
    if(this.storeNum.contact==""){
       return null
         }else{
             this.storeContacts.push(this.storeNum);
          this.storeNum = {
          contact:""
         }
    }
    },
    del:function(i){
        this.storeContacts.splice(i)
        console.log(i)
    },
   
   
   cancel:function(){
 
 
   this.editMode=false;
   

  
/*const found=this.storeContacts.findIndex(something)*/
  
   },
   edi:function(){
   
   this.editMode=true
  

   
   },
   store:function(){
    
        this.storeNum.contact;
          this.storeNum = {
          contact:""
         }
          this.editMode=false;
      
    
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
.viewMode{
    display:block;
}

</style>
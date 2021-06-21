<template>
    <div class="contact-wrapper">

       {{storeContacts}}
        <h3>Add Contact</h3>
        <form action="" class="form-wrapper">
            <input v-model="storeNum.contact" class="add" type="text">
            <button v-on:click.prevent="addNum" class="add">Add</button>
        </form>
       <div  v-for="(storeContact,i) in storeContacts" :Key="i" class="contact-info">
        <div  class="wrapper-for-storecontact">
        <p>{{storeContact.contact}}</p>
        <button v-on:click="del(storeContact.id)"  class="del"><i class="fas fa-user-minus"></i></button>
        <button v-on:click="edi(storeContact.id)" ><i class="fas fa-user-edit"></i></button>
        </div>
        <div   class="wrapper">
        <form action="">
            <div  v-if="editMode"  class="form-container">
            <input v-model.lazy="storeContact.contact"  type="text" class="editContact"><br>
            <button v-on:click.prevent="cancel(storeContact.id)" class="cancel">Cancel</button>
            <button v-on:click.prevent="store" class="submit">Submit</button>
            </div>
        </form>
       
        </div>
        
       </div>

    </div>
</template>
<script>
import uniqueId from 'lodash.uniqueid';

export default {
   data(){
       return{
           storeContacts:[],
           storeNum:{
               contact:"",
               id:uniqueId('todo-'),
             
            
              
           },
         
      
           editMode:false
        

       }
         
   },

   methods:{
    addNum:function(){
    if(this.storeNum.contact==""){
       return null
         }else{
             this.storeContacts.push({contact:this.storeNum.contact,id:uniqueId('todo-')});
          this.storeNum = {
         contact:"",
         
         }
         }
    }
   ,
    del:function(i){
          const itemIndex = this.storeContacts.findIndex(item => item.id === i)
          this.storeContacts.splice(itemIndex,1)
    }
   ,
   
   cancel:function(Key){
       
   const found = this.storeContacts.find(element => element.id === Key);
   if(found){
       this.editMode=false
   }
   }
  
  
  

  
/*const found=this.storeContacts.findIndex(something)*/
  
   ,
   edi:function(Key){
       this.editMode=!this.editMode
    const found = this.storeContacts.filter(element => element.id === Key)
   
   if (found)
   {this.editMode=true}
  

   
   },
   store:function(){
    
        this.storeNum.contact;
       
          this.storeNum = {
          contact:"",
          
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
    font-family: 'Open Sans', sans-serif;
}
.viewMode{
    display:block;
}

</style>
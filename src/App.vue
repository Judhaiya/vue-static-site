<template>
  <div id="app">
   
   <router-view/>
 
  
  </div>
</template>

<script>


import AOS from 'aos';
import 'aos/dist/aos.css'; 


export default {
  name: 'App',
  
  data(){
      return{
        tourStack:[],

      
        userInput: {
        title: "",
        Describe: "",
        location: "",
      },
        
       add:function(){
           this.tourStack.push(
             this.userInput
           )
        }
      
  }
 
}}
AOS.init();
</script>

<style>



*{
    padding:0;
    margin:0;
    box-sizing: border-box;
}
a{
    text-decoration:none;
}
header{
    padding:0 16px;
    box-shadow: 0px 2px 4px 0px rgb(0 0 0 / 14%)
}
nav{
    width:100%;
    max-width:1140px;
    padding:14px 15px;
    margin:0 auto;
    display:flex;
    align-items: center;
    justify-content: space-between;
}
.right-small-screen{
    display:none;
}
.right-side a,.fa-search,.book-button{
   padding:0 10px;
}
.brand{
    font-family: 'Limelight', cursive;
    color:#5bc9e2;
}
.nav-link,.fa-search{
    color:#8f9397;
}
.book-button{
    background-color:#5bc9e2 ;
    color:#fff;
    padding:4px 8px;
    border:none;
    outline:none;
}
.form{
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
.popup{
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
}
@media screen and (max-width:1200px){
 nav{
     padding:14px 0;
 }
}
@media screen and (max-width:992px){

 nav{
   max-width:980px;
   padding:15px 24px;
}
.service-container{
    max-width:980px;
    margin:0 auto;
}
.right-side{
    display:none;
} 
.popular-destination{
    margin:0;
}
.right-small-screen{
    display:block;
}
.container{
    max-width:980px;
    margin:0 auto;
    padding:0 30px;
}
.price-card{
    background-color: gray;
    color:white;
}
}
@media screen and (max-width:768px){
    nav{
        max-width: 720px;
        padding:14px 30px;
    }
    .container{
        padding:0;
    }
    .description-container{
        display:block;
        margin-top:20px;
    }
    .right-side{
        display:none;
    } 
    header{
        box-shadow: 0px 2px 4px 0px rgb(0 0 0 / 14%)
    }
    .right-small-screen{
        display:block;
    }
    .left-popular-cities h4 {
        font-size:24px;
    }
    .popular-destination{
        max-width:720px;
        margin:0 auto;
    }

    .service-container{
        max-width:720px;
        margin:0 auto;
        padding:0 30px;
    }
   
    .cities-pic-container{
        display:grid;
        grid-template-columns:1fr ;
    }
    .left-image{
       
        width:100%;
        height:180px;
        padding:0 15px ;
        margin-bottom:15px ;
    }
    .right-image{
        display:grid;
        grid-template-columns:1fr ;
     }
     .ser-explan{
        margin:0 0 48px;
    }
    .major-features-section{
        display:grid;
        grid-template-columns: 1fr;
    }
    .feature-lines{
        line-height:28px;
    }
    .book-card,.ticket-book,.amazing-tour{
        padding:48px 28px;
    }
    .feature-lines{
        font-size: 16px;
    }
    .container{
        max-width:720px;
        margin:0 auto;
        padding:0 30px;
    }
    .hotel-container{
        display:grid;
        grid-template-columns:1fr ;
        grid-row-gap:24px;
    }
    .card-stack{
        display:grid;
        grid-template-columns:1fr 1fr 1fr ;
        grid-column-gap:20px;
        grid-row-gap:20px;
        margin-top:30px;
    }
    .num,.num-card h3,.fa-subway{
        line-height: 40px;
    }
    .price-grid{
        grid-template-columns:1fr 1fr;
        grid-row-gap:30px;
        text-align: center;
    }
    .price-card{
        background-color: gray;
        color:white;
    }
}
@media screen and (max-width:576px){

    .right-side{
        display:none;
    }
    .left-popular-cities h4 {
        font-size:24px;
    }
    header{
        box-shadow: 0px 2px 4px 0px rgb(0 0 0 / 14%)
    }
    .right-small-screen{
        display:block;
    }
    .description-container{
        display:block;
        margin-top:20px;
    }
    .cities-pic-container{
        display:grid;
        grid-template-columns:1fr ;
    }
    .left-image{
       
        width:100%;
        height:180px;
        padding:0 15px ;
        margin-bottom:15px ;
    }
    .right-image{
       display:grid;
       grid-template-columns:1fr ;
    }
    .ser-explan{
        margin:0 0 48px;
    }
    .major-features-section{
        display:grid;
        grid-template-columns: 1fr;
    }
    .feature-lines{
        line-height:28px;
    }
    .service-container,.popular-destination{
        max-width:540px;
        margin:0 auto;
        padding:0 15px;
    }
    nav{
        max-width:540px;
        padding:14px 0;
    }
    .container{
        max-width:540px;
        margin:0 auto;
        padding:0 15px;
    }
    .hotel-container{
        display:grid;
        grid-template-columns:1fr ;
        grid-row-gap:24px;
    }
    .card-stack{
        display:grid;
        grid-template-columns:1fr 1fr ;
        grid-column-gap:20px;
        grid-row-gap:20px;
        margin-top:30px;
    }
    .num,.num-card h3,.fa-subway{
        line-height: 40px;
    }
    .price-grid{
        grid-template-columns:1fr ;
        grid-row-gap:30px;
        text-align: center;
    }
}
</style>

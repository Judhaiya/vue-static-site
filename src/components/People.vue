<template>
  <div class="People-wrapper">
       
    <div class="People">
        <h3 class="people-heading">People behind the scenes</h3>
      <div class="display-grid">
        <div class="people-info" v-for="(info, i) in peopleInfo" :key="i">
          <p>{{ info.name.first }}  {{info.name.last}}</p>
          <img v-bind:src="info.picture.large" alt="" />

          <p>{{info.location.city }}</p>
          <p>{{info.email }}</p>
          {{imges}}
        
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios"

export default {
  data() {
    return {
      peopleInfo:"",
      imges: "apple",
      savedInfo:""
    };
  },
  mounted() {

   const getData= JSON.parse(localStorage.getItem('people'));
   this.peopleInfo=getData
  
   if(localStorage.getItem('people')==""){
   axios.get("https://randomuser.me/api/?results=10")
   .then(results=>results.data.results = this.peopleInfo)
   }
     
     
     
     
   
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.display-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
}
.People-wrapper {
  width: 100%;
}
.People {
  width: 100%;
  padding: 60px 30px;
  text-align:center !important;
}
.people-info {
  background-color: beige;
  text-align: center;
  padding: 40px;
  color:cadetblue;
}
.people-info {
  line-height: 2rem;
}
.people-heading{
    line-height:4rem ;
}
</style>

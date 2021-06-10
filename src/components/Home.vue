<template>
    <div class="Home">
     <Nav />
    <Populardes />
    <Services />
    </div>
</template>
<script>
import Nav from "./Nav.vue";
import Populardes from "./Populardes.vue";
import Services from "./Services.vue";

export default ({
  name:"Home",
  components:{
      Nav,
      Populardes,
      Services
  }
})
</script>

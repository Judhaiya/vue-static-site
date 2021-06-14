    <template>
      <header>
       <nav>
           <div class="left-side">
           <a class="brand" href="#">TRAVELGO</a>
           </div>
           <div class="right-side">
               <a class="nav-link" href="#">Home</a>
               <a class="nav-link active" ><router-link to="/Feedback">Feedback</router-link></a>
               <a class="nav-link" ><router-link to="/people">People</router-link></a>
               <a href="nav-link"><router-link to="/contact">Contact</router-link></a>
              <a class="nav-link" href="#">Cars</a>
               <a class="nav-link active"><router-link to="/Admin">Admin</router-link></a>
               <a class="nav-link" href="#">Pages</a>
               
               <i class="fas fa-search"></i>
               <button class="book-button">Online Booking</button>
           </div>
           <div class="right-small-screen">
            <i class="fas fa-bars"></i>
           </div>
       </nav>
    </header>
</template>

<script>
 
export default {
  name: 'Nav',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a{
  color:#8f9397 !important;
}

</style>

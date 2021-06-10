<template>
     <section class="services-section">
       <div class="service-container">
           <div class="ser-explan">
               <h3 class="service-heading">Our Services</h3>
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
           </div>
           <div class="major-features-section" data-aos="fade-up">
             <div class="book-card" data-aos="fade-up-small-screen">
                <i class="fas fa-hotel"></i>
                 <h4 class="feature-heading">Hotel booking</h4>
                 <p class="feature-lines">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt omnis nisi corporis? Consequatur obcaecati quaerat dolores laudantium. Quae voluptatem accusantium pe</p>
             </div>
             <div class="ticket-book" data-aos="fade-up">
                <i class="fas fa-newspaper"></i>
                 <h4 class="feature-heading">Ticket booking</h4>
                 <p class="feature-lines">Lorem ipsum dolor sit amet, consectetur adipisicing elit. laudantium quia doloremque natus aut laborum architecto sunt nulla mollitia? Quod inventore debitis ex aut non ducimus iure </p>
             </div>
             <div class="amazing-tour " data-aos="fade-up">
                <i class="fas fa-inbox"></i>
                 <h4 class="feature-heading">Amazing tour</h4>
                 <p class="feature-lines">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta illo quo aut quam incidunt nemo est ex impedit  omnis veritatis consequuntur nostrum, beatae blanditiis? Facere accusamus est labore fugit </p>
             </div>
           </div>
       </div>
   </section>
</template>
<script>
export default {
    name:"Services"
    
}

</script>
<style>
.services-section{
    padding:80px 0;
    background-color:#f7f8f9 ;
}

.service-container{
    width:100%;
    max-width: 1140px;
    padding:0 15px;
    margin:0 auto;
}
.ser-explan{
    text-align: center;
    margin:0 190px 48px;
    
}
.service-heading{
    padding-bottom:20px;
}
.major-features-section{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap:30px;
}
.book-card,.ticket-book,.amazing-tour{
    text-align: center;
    padding:48px 20px;
}
.ticket-book{
    background-color:gold ;
    padding:48px 20px;
}
.fa-newspaper,.fa-hotel,.fa-inbox{
    color:#5bc9e2;
    font-size:30px;
    padding-bottom:20px;
}
.feature-heading{
    line-height:48px;
}
.feature-lines{
    color:#6c757d;
}
</style>

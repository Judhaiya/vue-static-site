<template>
<section class="popular-destination">
<div class="container">
    <div class="description-container">
        <div class="left-popular-cities">
            <p class="brand-color">Most popular cities</p>
            <h4>popular Destination</h4>
        </div>
        <div class="right-cities">
            <p>see all cities
              <span><i class="fas fa-angle-double-right"></i></span></p>
        </div>
    </div>
    <div class="cities-pic-container">
        <div class="left-image" data-aos="fade-right">
            <p class="d-name">United States</p>
            <p>81 Cities</p>
        </div>
        <div class="right-image" data-aos="fade-left">
           <div class="img-wrapper one-img"><p class="d-name">Australia</p></div>
            <div class="img-wrapper two-img"><p class="d-name">Maldives</p></div>
            <div class="img-wrapper three-img"><p class="d-name">Greece</p></div>
            <div class="img-wrapper four-img"><p class="d-name">Ireland</p></div>
        </div>
    </div>
</div>
</section>
</template>
 <script>
   
 export default {
     name:'Populardes'
     }
 
</script>
<style>
.popular-destination{
    padding:20px 0 60px;
}
.container{
    width:100%;
    max-width:1140px;
    margin:0 auto;
    padding:0 15px;
}
.description-container{
    display:flex;
    justify-content: space-between;
    margin-bottom:48px;
}
.brand-color{
    line-height:24px ;
    color:#5bc9e2;
}
.cities-pic-container{
    display:grid;
    grid-template-columns:1fr 1fr ;
    grid-column-gap:30px;
    min-height:400px ;
}
.left-image{
    background-image:linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.2)),url("./castle.jpg");
    width:100%;
    height:400px;
    background-position: center;
    background-size:cover ;
    border-radius: 5px;
    position:relative;
}
.left-image:hover{
    background-image: linear-gradient( #b20a2c69, #b9a91d6e),url("./castle.jpg");
}
.right-image{
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap:30px;
    min-height:440px ;
   
}
.img-wrapper{
    width:100%;
    height:180px;
    background-position: center;
    background-size:cover ;
    margin-bottom:20px;
    border-radius:5px ;
    position:relative;
}

.one-img{
    background-image:linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.2)), url('./greece.jpg');
}
.one-img:hover{
    background-image: linear-gradient( #b20a2c69, #b9a91d6e),url('./greece.jpg');
}
.two-img{
    background-image:linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.2)),url('./castle.jpg') ;
}
.two-img:hover{
    background-image: linear-gradient( #b20a2c69, #b9a91d6e),url('castle.jpg') ;
}
.three-img{
    background-image:linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.2)),url('./maldives.jpg') ;
}
.three-img:hover{
    background-image: linear-gradient( #b20a2c69, #b9a91d6e),url('./maldives.jpg');
}
.four-img{
    background-image:linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.2)),url('./greece.jpg') ;
    
   
}
.four-img:hover{
    background-image: linear-gradient( #b20a2c69, #b9a91d6e),url('greece.jpg') ;
}
.d-name{
    position:absolute;
    color:#fff;
    font-weight: 600;
    left:10px;
    bottom:30px;
    
}

</style>
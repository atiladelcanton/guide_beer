<template>
        <div class="col-sm-4 col-md-3  mt-3 mb-3">
            <a href="">
                <div class="card  h-100">
                <div :style="{'background-image':'url('+beer.image_url+')'} " class="img-beer"></div>
                <div class="card-body">
                    <p class="card-text">{{beer.name}}</p>
                    <small>
                        <ul class="details">
                            <li><strong>Graduação Alcoólica: </strong>{{beer.abv}}</li>
                            <li><strong>Amargor: </strong>{{beer.ibu}}</li>
                            <li><strong>Primeira Fabricação:</strong>{{beer.first_brewed}}</li>
                        </ul>
                    </small>
                </div>
            </div>
            </a>
        </div>
</template>

<script>

export default {
    name:"CardBeer",
    props:["beer" ]
 }
</script>
<style scoped>
a{
    text-decoration: none;
}
a:hover{
    text-decoration: none;
}
.card{
    border-radius: 4px;
    background: #fff;
    box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
    transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
    cursor: pointer;
}
.card:hover{
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
}
.img-beer{
    width: 100%;
    background-size: contain;
    height: 200px;
    background-repeat: no-repeat; 
    background-position: center 2px;
}
.card-text{
    text-align: center;
    font-weight: bold;
}
.details{
        list-style-type: none;
            padding: 0;
}
.details > li {
    display: flex;
    justify-content: space-between;
}
</style>
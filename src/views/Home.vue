<template>
  <div>
    <div class="text-center mt-4">
        <img src="../assets/beer.png">
        <h1>GUIDE BEER</h1>
    </div>
        <InputSearch />
        <div class="row">
              <CardBeer v-for="beer in beers" :key="beer.id" :beer="beer"/>
        </div>
  </div>
</template>

<script>
import InputSearch from "../components/InputSearch";
import CardBeer from "../components/CardBeer";
import BeerService from "../services/beers/BeerService";

const beerService = BeerService.build();

export default {
 
  name: 'Home',
    data: () =>({
      beers: []
  }),
  components:{
    InputSearch,
    CardBeer
  },
  methods:{
    fetchBeers(page=1,per_page=10){
      beerService.search({page:page,per_page:per_page})
      .then(success => {
        if (Array.isArray(success.rows)) {
        this.beers = success.rows
        return
      }
      this.beers = [];
      })
    }
  },
  created(){
    this.fetchBeers(1,8);

  }
}
</script>
<style scoped>
  h1{
    color:#FFF;
  }
</style>
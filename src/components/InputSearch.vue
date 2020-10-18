<template>
    <div>
        <!-- START INPUT SEARCH -->
            <div class="row">
                    <div class="col-md mt-4">
                        <div class="inner-form">
                                <div class="input-field second-wrap">
                                    <input type="text" placeholder="Find Beer">
                                </div>
                                <div class="input-field third-wrap">
                                    <button class="btn-search">
                                        <span class="fa fa-search"></span>
                                    </button>
                                </div>
                        </div>
                    </div>
            </div> 
        <!-- END INPUT SEARCH -->   
    </div>
</template>
<script>
export default {
    name:"InputSearch"
}
</script>
<style scoped>
.inner-form{
    background: #fff;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center;
    box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
    border-radius: 3px;
}
.input-field{
    height: 68px;

}
.second-wrap{
        flex-grow: 1;
}
.third-wrap{
    width: 74px;
}
.input-field > input{
        height: 100%;
        background: transparent;
        border: 0;
        display: block;
        width: 100%;
        padding: 10px 32px;
        font-size: 16px;
        color: #555;
}
.btn-search{
    height: 100%;
    width: 100%;
    white-space: nowrap;
    color: #fff;
    border: 0;
    cursor: pointer;
    background: #63c76a;
    transition: all .2s ease-out, color .2s ease-out;
}

</style>
<template>
    <div>

    <Header/>
    <div class="row">
    <div class="col-lg-9 col-md-9 col-sm-9">
        <router-view> </router-view>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-3">
        <Sidebar/>
    </div>
    </div>
    <Footer/>
    

    </div>
</template>
<script>
    import Header from "./components/default/Header";
    import Footer from "./components/default/Footer";
    import Sidebar from "./components/default/Sidebar";
    import $ from 'jquery';
    

       export default {

    components: {
            Header,
            Footer,
            Sidebar,

        }

    }
</script>
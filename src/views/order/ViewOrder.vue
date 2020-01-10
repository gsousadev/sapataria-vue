<template>
    <div class="row justify-content-center">
        <div class="col-12 col-lg-10">
            <Breadcrumb :currentPageName="headerTitle"></Breadcrumb>
            <div class="row justify-content-center">
                <div class="col-12">
                    <h4 class="bg-primary p-2 text-white rounded">{{headerTitle}}</h4>

                    <div class="bg-white p-3 mt-3 rounded">
                        <h4>Informações do Pedido</h4>
                        <hr/>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Breadcrumb from "@/components/Breadcramb";
    import FormTwoColumns from "@/components/FormTwoColumns";
    import InputHelper from "@/helpers/inputHelper";
    import OutputHelper from "@/helpers/outputHelper";
    import axios from "axios";

    export default {
        components: {
            Breadcrumb: Breadcrumb,
        },

        created() {
            this.getOrderInfo();
        },

        data() {
            return {
                OutputHelper,
                headerTitle: "Visualizar Pedido",
                redirectUrl: "/pedidos/listar",
                orderId: this.$route.params.id,
                orderInfo: {}
            };
        },
        methods: {
            getOrderInfo(){
                axios.get(`${process.env.VUE_APP_API_URL}/order/${this.orderId}`)
                    .then(response => {
                        this.orderInfo = response.data.data;
                        console.log(this.orderInfo);
                    }).catch(error => {
                    console.log(error.message)
                });
            }
        }
    };
</script>
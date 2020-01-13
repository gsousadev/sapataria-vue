<template>
    <div class="row justify-content-center">
        <div class="col-12 col-lg-10">
            <Breadcrumb :currentPageName="headerTitle"></Breadcrumb>
            <div class="row justify-content-center">
                <div class="col-12">
                    <form v-on:submit.prevent="submitForm()">
                        <h4 class="bg-primary p-2 text-white rounded">{{headerTitle}}</h4>
                        <div class="row my-3">
                            <div class="col-12 col-sm-6">
                                <div class="form-group">
                                    <label :for="inputs.name.name">{{inputs.name.label}}</label>
                                    <input
                                            :type="inputs.name.type"
                                            class="form-control"
                                            :id="inputs.name.name"
                                            :name="inputs.name.name"
                                            v-model="customerInfo.nome"
                                    />
                                </div>
                            </div>
                            <div class="col-12 col-sm-6">
                                <div class="form-group">
                                    <label :for="inputs.cpf.name">{{inputs.cpf.label}}</label>
                                    <input
                                            :type="inputs.cpf.type"
                                            class="form-control"
                                            :id="inputs.cpf.name"
                                            :name="inputs.cpf.name"
                                            v-model="customerInfo.cpf"
                                            :disabled="inputs.cpf.disabled"
                                            v-mask="'###.###.###-##'"
                                    />
                                </div>
                            </div>
                            <div class="col-12 col-sm-6">
                                <div class="form-group">
                                    <label :for="inputs.zip_code.name">{{inputs.zip_code.label}}</label>
                                    <input
                                            :type="inputs.zip_code.type"
                                            class="form-control"
                                            :id="inputs.zip_code.name"
                                            :name="inputs.zip_code.name"
                                            v-model="customerInfo.cep"
                                            @keyup="getCepInfo()"
                                            v-mask="'#####-###'"
                                    />
                                </div>
                            </div>
                            <div class="col-12 col-sm-6">
                                <div class="form-group">
                                    <label :for="inputs.street.name">{{inputs.street.label}}</label>
                                    <input
                                            :type="inputs.street.type"
                                            class="form-control"
                                            :id="inputs.street.name"
                                            :name="inputs.street.name"
                                            v-model="customerInfo.rua"
                                    />
                                </div>
                            </div>
                            <div class="col-12 col-sm-6">
                                <div class="form-group">
                                    <label :for="inputs.number.name">{{inputs.number.label}}</label>
                                    <input
                                            :type="inputs.number.type"
                                            class="form-control"
                                            :id="inputs.number.name"
                                            :name="inputs.number.name"
                                            v-model="customerInfo.numero_residencia"
                                    />
                                </div>
                            </div>
                            <div class="col-12 col-sm-6">
                                <div class="form-group">
                                    <label :for="inputs.city.name">{{inputs.city.label}}</label>
                                    <input
                                            :type="inputs.city.type"
                                            class="form-control"
                                            :id="inputs.city.name"
                                            :name="inputs.city.name"
                                            v-model="customerInfo.cidade"
                                    />
                                </div>
                            </div>
                            <div class="col-12 col-sm-6">
                                <div class="form-group">
                                    <label :for="inputs.phone_1.name">{{inputs.phone_1.label}}</label>
                                    <input
                                            :type="inputs.phone_1.type"
                                            class="form-control"
                                            :id="inputs.phone_1.name"
                                            :name="inputs.phone_1.name"
                                            v-model="customerInfo.telefone_1"
                                    />
                                </div>
                            </div>
                            <div class="col-12 col-sm-6">
                                <div class="form-group">
                                    <label :for="inputs.phone_2.name">{{inputs.phone_2.label}}</label>
                                    <input
                                            :type="inputs.phone_2.type"
                                            class="form-control"
                                            :id="inputs.phone_2.name"
                                            :name="inputs.phone_2.name"
                                            v-model="customerInfo.telefone_2"
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="row justify-content-center">
                            <div class="col-12 col--4">
                                <button
                                        type="submit"
                                        class="btn btn-primary d-block text-white"
                                >{{textSubmitButton}}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Breadcrumb  from "@/components/Breadcramb";
    import axios       from "axios";
    import InputHelper from "@/helpers/inputHelper";

    export default {
        components: {
            Breadcrumb: Breadcrumb
        },

        created() {
            this.customerInfo.cpf = InputHelper.cleanVal(this.$route.query.cpf);
            if (this.$route.params.id) {
                this.getCustomerInfo();
            }
        },

        data() {
            return {
                customerId: this.$route.params.id,
                headerTitle: 'Cadastro de Cliente',
                textSubmitButton: 'Cadastrar',
                customerInfo: {
                    cpf: '',
                    cidade: '',
                    nome: '',
                    cep: '',
                    rua: '',
                    numero_residencia: '',
                    telefone_1: '',
                    telefone_2: ''

                },
                inputs: {
                    name: {
                        type: "text",
                        label: "Nome",
                        name: "nome",
                    },
                    cpf: {
                        type: "text",
                        label: "CPF",
                        name: "cpf",
                        regex: RegExp("([0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2})$"),
                        disabled: false,
                    },
                    zip_code: {
                        type: "text",
                        label: "CEP",
                        name: "cep",
                        value: "",
                        regex: RegExp("([0-9]{5,5}[-]?[0-9]{3})$")
                    },
                    street: {
                        type: "text",
                        label: "Rua",
                        name: "rua",
                    },
                    number: {
                        type: "number",
                        label: "Número",
                        name: "numero_residencia",
                    },
                    city: {
                        type: "text",
                        label: "Cidade",
                        name: "cidade",
                    },
                    phone_1: {
                        type: "text",
                        label: "Telefone 1",
                        name: "telefone_1",
                    },
                    phone_2: {
                        type: "text",
                        label: "Telefone 2",
                        name: "telefone_2",
                    }
                },
                requestUrl: '/customer',
                redirectUrl: '/pedidos/cadastrar'
            };
        },
        methods: {

            disabledFieldsToEdit() {
                this.inputs.cpf.disabled = true;
            },

            getDataToSend(){
                for(let key in this.customerInfo){
                    this.customerInfo[key] = InputHelper.cleanVal(this.customerInfo[key]);
                }
            },

            submitForm() {
                this.getDataToSend();
                if (this.customerId) {
                    axios
                        .put(`${process.env.VUE_APP_API_URL}${this.requestUrl}${this.customerId}`, this.customerInfo)
                        .then(response => {
                            const responseBody = response.data;
                            console.log(responseBody);
                            alert(responseBody.message);
                            this.$router.push({
                                path: this.redirectUrl,
                                query: {cpf: this.inputs.cpf.value}
                            });
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                } else {
                    axios
                        .post(process.env.VUE_APP_API_URL + this.requestUrl, this.customerInfo)
                        .then(response => {
                            const responseBody = response.data;
                            console.log(responseBody);
                            alert(responseBody.message);
                            this.$router.push({
                                path: this.redirectUrl,
                                query: {cpf: this.inputs.cpf.value}
                            });
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                }
            },

            getCepInfo() {
                let unmaksCep = this.customerInfo.cep.replace("-", "");
                if (unmaksCep.length == 8) {
                    let url = `https://viacep.com.br/ws/${unmaksCep}/json/`;
                    axios.get(url)
                         .then((response) => {
                             this.customerInfo.rua = response.data.logradouro;
                             this.customerInfo.cidade   = response.data.localidade;
                             InputHelper.setValidInputs(this.inputs.zip_code.name);
                             InputHelper.setValidInputs(this.inputs.street.name);
                             InputHelper.setValidInputs(this.inputs.city.name);
                         })
                         .catch(function (error) {
                             console.log(error);
                         });
                }
            },

            getCustomerInfo() {
                axios.get(`${process.env.VUE_APP_API_URL}/customer/${this.customerId}`)
                     .then(response => {
                         this.customerInfo = response.data.data;
                         this.disabledFieldsToEdit();
                         this.setEditTitles();
                         this.setEditRoute();
                     }).catch(error => {
                    console.log(error.message)
                });
            },

            setEditTitles() {
                this.headerTitle      = 'Atualização Cadastral de Cliente';
                this.textSubmitButton = 'Atualizar';
            },

            setEditRoute() {
                this.requestUrl  = '/customer/';
                this.redirectUrl = '/clientes/listar';
            }
        }
    };
</script>
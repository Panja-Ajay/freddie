<template>
    <div>
        <div style="padding: 10px 0px 0px 50px;">
            <router-link to="/">{{homeName}}</router-link>
        </div>
        <div style="display: flex; justify-content: center;margin-top: 5%;">
            <vs-card>
                <template #title>
                    <h3 style="text-align: center;">User Form</h3>
                </template>
                <template #text>
                    <div class="center content-inputs" style="margin-top: 30px;">
                        <vs-input v-model="form.name" placeholder="Name" w="12" />
                    </div>
                    <div class="center content-inputs" style="margin-top: 30px;">
                        <vs-input v-model="form.mobile" placeholder="Mobile" />
                    </div>
                    <div class="center content-inputs" style="margin-top: 30px;">
                        <vs-input v-model="form.email" placeholder="Email" />
                    </div>
                    <div class="center content-inputs" style="margin-top: 30px;">
                        <vs-input v-model="form.address" placeholder="Address" />
                    </div>
                    <vs-button @click="submitForm" style="margin: auto;margin-top: 25px;">Submit</vs-button>
                    <div style="margin-top: 20px;">
                        <p>Note: These fields will be saved using</p>
                        <p>state management</p>
                    </div>
                </template>
            </vs-card>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            homeName: '<-- Home',
            form: {
                name: '',
                mobile: '',
                email: '',
                address: ''
            }
        }
    },
    methods: {
        ...mapActions(["storeForm"]),
        submitForm() {
            if(this.form.name == '' || this.form.mobile == '' || this.form.email == '' || this.form.address == '') {
                alert('Please Fill all fields');
                return false
            }
            this.storeForm(this.form);
            this.$router.push('/')
        }
    },
}
</script>

<style scoped>
    
</style>
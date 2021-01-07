<template>
    <div>
        <div style="padding: 10px 0px 0px 50px;">
            <router-link to="/">{{homeName}}</router-link>
        </div>
        <div style="display: flex; justify-content: center;margin-top: 10%;">
            <vs-card>
                <template #title>
                    <h3 style="text-align: center;">User Profile </h3>
                </template>
                <template #text>
                     <div class="center content-inputs" style="margin-top: 30px;">
                        <vs-input v-model="profile.name" placeholder="Name" />
                    </div>
                    <div class="center content-inputs" style="margin-top: 30px;">
                        <vs-input v-model="profile.email" placeholder="Email" />
                    </div>
                    <div class="center content-inputs" style="margin-top: 30px;">
                        <vs-input v-model="profile.mobile" placeholder="Mobile" />
                    </div>
                    <vs-button @click="submit" style="margin: auto;margin-top: 25px;">Submit</vs-button>
                    <div style="margin-top: 20px;">
                        <p>Note: These fields will save in</p>
                        <p>local Storage</p>
                    </div>
                </template>
            </vs-card>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            homeName: '<-- Home',
            profile: {
                name: '',
                mobile: '',
                email: ''
            }
        }
    },
    methods: {
        submit() {
            if(this.profile.mobile == '' || this.profile.email == '' || this.profile.name == '') {
                alert("Please fill all fields");
                return false
            }
            localStorage.mobile = this.profile.mobile
            localStorage.email = this.profile.email
            localStorage.name = this.profile.name
            this.$router.push('/')
        }
    },
}
</script>

<style scoped>
    .profile {
        max-width: 22.5rem;
        margin: 0 auto;
        position: relative;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
    }
</style>
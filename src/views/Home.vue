<template>
  <div class="home">
    <div style="text-align: center;">
      <h1 v-if="name != ''"> Hi {{ name }}, Welcome</h1>
      <p v-else>Please fill the Profile Page --></p>
    </div>
    <div style="clear: both;float: right;padding: 10px 50px 0px 0px;">
      <p><router-link to="/profile">{{profileName}}</router-link></p>
      <p><router-link to="/form">{{fillform}}</router-link></p>
    </div>
    <div style="margin: 100px 0 0 100px;"><input v-model="search" placeholder="Search For image" /></div>
    <div style="margin: 5px 100px 100px 100px;display: grid;grid-template-columns: 1fr 1fr 1fr 1fr 1fr;border: 1px solid black;height: auto;">
      <div v-for="list in filteredLists" :key="list.id" style="padding: 20px;">
        <img width="150px" height="150px" :src="list.img" :alt="list.name">
        <p style="margin-top: 5px;text-align: center;">{{ list.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    filteredLists() {
      return this.Lists.filter((list) => {
        return list.name.match(this.search)
      })
    }
  },
  data() {
    return {
      profileName: 'Profile -->',
      fillform: 'Fill the Form -->',
      name: '',
      search: '',
      Lists: [
        { id: 1, name: 'jerry', img: 'https://i.pinimg.com/originals/61/b8/7b/61b87bc81689ce1489c1dead295be426.jpg' },
        { id: 2, name: 'tom', img: 'https://i.pinimg.com/originals/92/a6/2f/92a62f0221f58fe503a15fcb13f5c107.png' },
        { id: 3, name: 'dog', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr3MFKKM9ogqHxDn0BkivifbKwf_CnQhb7Pg&usqp=CAU' },
        { id: 4, name: 'minion', img: 'https://i.pinimg.com/originals/7f/75/6b/7f756bcb3481db56650768cc5fc0cf50.jpg' },
        { id: 5, name: 'duck', img: 'https://i.pinimg.com/originals/d1/d2/66/d1d26618a7876afa7b99f2afebf6c790.jpg' },
        { id: 6, name: 'car', img: 'https://static.autox.com/uploads/2019/03/Mahindra-XUV500-Exterior-Image-1-.jpg' },
        { id: 7, name: 'bike', img: 'https://media.zigcdn.com/media/model/2019/Sep/bullet-trials-500-right-side-view_360x240.jpg' },
        { id: 8, name: 'laptop', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZjnnmbX7uA4fpISEs6x6aPEQMBKLpWMa8vQ&usqp=CAU' },
        { id: 9, name: 'mobile', img: 'https://images-na.ssl-images-amazon.com/images/I/71QE00iB9IL._SL1500_.jpg' },
        { id: 10, name: 'tv', img: 'https://i2-prod.mirror.co.uk/incoming/article18781136.ece/ALTERNATES/s615b/0_4-Sony-Bravia-KDL32WE613.jpg' }
      ]
    }
  },
  mounted() {
    if (localStorage.name) {
      this.name = localStorage.name;
    }
  },
  components: { }
}
</script>
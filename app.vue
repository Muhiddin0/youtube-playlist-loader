<template>
  <section>
    <div class="container home">
      <div class="grid">
        <img src="~/assets/images/loader.svg" alt="">
      </div>
      <div class="grid loader">
        <label class="downloader" for="">
          <input ref="input" v-model="url" type="text">
          <button @click="loading" class="btn btn-load">Yuklash</button>
        </label>
      </div>
    </div>
  </section>


  <section>
    <div id="result" class="container result">
      <Download :key="index" :video="video" v-for="video, index in videos" />
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      url: '',
      videos: [],
    }
  },
  methods: {
    // https://web-production-ccb0.up.railway.app/?url=https://www.youtube.com/watch?v=Gw6UnYG-nU0 
    async loading(e) {
      let btn = e.target
      let input = this.$refs['input']
      if (!e) return

      this.url = this.url.replace("https://www.youtube.com/playlist?list=", "")

      const response = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&playlistId=${this.url}&key=AIzaSyCLf_fM1Kb9rZhY_iGB01i95wy5bsvDmwE`);
      this.videos = response.data.items
      console.log(response.data.items);
    },
  }
}
</script>
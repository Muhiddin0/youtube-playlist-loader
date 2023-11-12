<template>
    <div class="result-box">
        <img style="width: 220px; height: 120px;" :src="$props.video.snippet.thumbnails.standard.url" alt="">
        <h1>{{ $props.video.snippet.title }}</h1>

        <div class="btn-box">
            <a :href="link.url" v-for="link in links" :class="link ? 'load' : 'notload'">
                {{ link.quality }}
            </a>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            links: []
        }
    },
    async mounted() {
        let video = this.$props.video
        let video_id = video.snippet.resourceId.videoId
        let playlist_id = video.snippet.playlistId
        let youtube_vide = `https://www.youtube.com/watch?v=${video_id}&list=${playlist_id}`
        let api_url = `https://web-production-ccb0.up.railway.app/?url=${youtube_vide}`

        const resonse = await axios.get(api_url, { headers: "no-cors" })
        this.links = resonse.data.urls
        console.log(resonse.data.urls);
        console.log(this.links);
    },
    props: ['video']
}
</script>

<style scoped>
a {
    padding: 5px 10px;
    text-align: center;
    list-style: none;
    text-decoration: 0;
    border-radius: 0;
    color: #fff;
    font-size: 1.2em;
    border-radius: 5px;
}

a.notload {
    background: pink;
}

a.load {
    background: red;
}

.btn-box {
    display: flex;
    gap: 10px;
}
</style>
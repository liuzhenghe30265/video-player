<template>
  <div
    class="">
    <button
      @click="handleClick">播放</button>
    <figure
      ref="videoContainer"
      data-fullscreen="false">
      <video
        ref="video"
        autoplay>
        Your
        browser
        is
        too
        old
        which
        doesn't
        support
        HTML5
        video.
      </video>
    </figure>
  </div>
</template>

<script>
import flvjs from 'flv.js'
export default {
  name: 'VideoPlayerFlvLive',

  data () {
    return {
      flvPlayer: null
    }
  },

  created () {

  },

  mounted () {
    this.$nextTick(() => {
      if (flvjs.isSupported()) {
        const flvPlayer = flvjs.createPlayer({
          type: 'flv',
          isLive: true,
          url: 'https://sample-videos.com/video123/flv/720/big_buck_bunny_720p_1mb.flv',
        });
        flvPlayer.attachMediaElement(this.$refs.video)
        flvPlayer.load()
        // flvPlayer.play()
        this.flvPlayer = flvPlayer

      }
    })
  },

  methods: {
    handleClick () {
      console.log('......this.flvPlayer', this.flvPlayer)
      this.flvPlayer.play()
    }
  }
}
</script>

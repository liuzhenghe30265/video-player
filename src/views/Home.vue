<template>
  <video-player
    class="video-player vjs-custom-skin"
    ref="videoPlayer"
    :playsinline="true"
    :options="playerOptions">
  </video-player>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      playerOptions: {
        width: '600',
        height: '400',
        sources: [{ // 流配置，数组形式，会根据兼容顺序自动切换
          type: 'rtmp/hls',
          src: 'rtmp://58.200.131.2:1935/livetv/hunantv'
        }],
        poster: "", // 封面地址
        techOrder: ['flash'],
        notSupportedMessage: '此视频暂无法播放，请稍后再试',
        autoplay: true, //如果true,浏览器准备好时开始回放
        controls: true,
        muted: false, // 默认情况下将会消除任何音频
        loop: false, // 导致视频一结束就重新开始
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据，auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        // aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值，值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true  //全屏按钮
        }
      }
    }
  }
}
</script>

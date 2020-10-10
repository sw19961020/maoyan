<template>
    <div>
        小视频
        <button @click="tiao">详情</button>
    </div>
</template>

<script>
export default {
  methods: {
    tiao () {
      this.$router.push('/smalldetial')
    }
  }
}
</script>

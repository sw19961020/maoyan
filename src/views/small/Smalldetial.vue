<template>
    <div>
        小视频详情
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations('showModule', ['hide', 'show'])
  },
  mounted () {
    this.hide()
  },
  destroyed () {
    this.show()
  }
}
</script>

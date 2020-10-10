<template>
    <div>
        <router-view></router-view>
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
  dextroyed () {
    this.show()
  }
}
</script>

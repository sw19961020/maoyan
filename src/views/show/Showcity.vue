<template>
    <div>
        showcity
    </div>
</template>

<script>
import http from '@/util/ajax.js'
export default {
  mounted () {
    http({
      url: 'https://show.maoyan.com/maoyansh/myshow/ajax/performances/0;st=0;p=1;s=20;tft=0;marketLevel=0?sellChannel=13&cityId=1&lng=0&lat=0',
      method: 'get'
    }).then(res => {
      console.log(res.data)
    })
  }
}
</script>

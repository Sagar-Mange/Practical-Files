<template>
<div id="none">
  <registrationForm> </registrationForm>
  <method> </method>
  <watcher> </watcher>
  <computed> </computed>
</div>
</template>

<script>

import registrationForm from './components/registrationForm.vue'
import method from '@/components/method.vue'
import watcher from '@/components/watcher.vue'
import computed from '@/components/computed.vue'

export default {
  components: {
    'registrationForm': registrationForm,
    'method': method,
    'watcher': watcher,
    'computed': computed
  },
  data () {
    return {
    }
  }
}
</script>

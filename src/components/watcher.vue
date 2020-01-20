<template>
    <div>
      <input value="changename" type="submit" @click.prevent="changename"> {{firstname}} {{lastname}}
      {{firstname}}
      {{firstname}}
    </div>
</template>

<script>
export default {
  data () {
    return {
      firstname: 'saaagar',
      lastname: 'mange',
      message: ''
    }
  },
  methods: {
    changename: function () {
      this.firstname = 'Sagar'
      this.lastname = 'Mange'
    }
  },
  watch: {
    firstname: function () {
      console.log('watcher called this times', this.firstname, this.lastname)
      return this.firstname
    }
    // message: function (sagar) {
    //   this.message = sagar.reverse()
    //   console.log('watcher1 called this times', this.message)
    //   return this.message
    // }
  }
}
</script>
<style scoped>

</style>

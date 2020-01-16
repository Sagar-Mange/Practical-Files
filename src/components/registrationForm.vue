<template>
<div>
  <form id="validated-form">
        <div class="temp">
        <h1 style="padding-top:2%">REGISTRATION FORM</h1>
        <hr><br>
        <label for="name" class="label">Your Name</label>
        <input class="input" type="text" id="name" v-model="user.name">
        <p class="error" v-if="!nameIsValid">* Name Field is Invalid</p>
        </div>

        <div class="temp">
        <label for="email" class="label">Your Email</label>
        <input class="input" type="email" id="email" v-model="user.email">
        <p class="error" v-if="!emailIsValid">* Email Field is Invalid</p>
        </div>

        <div class="temp">
        <label for="mobile" class="label">Mobile No.</label>
        <input class="input" number v-model="user.mobile" type="tel" id="mobile">
        <p class="error" v-if="!mobileIsValid">* Mobile No.is Invalid</p>
        </div>

        <div class="temp">
        <label for="password" class="label">Password</label>
        <input class="input" type="password" id="password" v-model="user.password">
        <p class="error" v-if="!passwordIsValid">* Password Field is Invalid</p>
        </div>

        <div class="temp">
        <input id='submitted' class="button" value="Submit" type="submit" @click.prevent="submitForm"/>
        </div>
    </form>
    <div style="display:none" id="preview">
        <p id="preview1"> Your Name: {{user.name}}</p>
        <p id="preview2"> Your Email: {{user.email}}</p>
        <p id="preview3"> Mobile No.: {{user.mobile}}</p>
        <p id="preview4"> Password: {{user.password}}</p>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        name: '',
        email: '',
        mobile: '',
        password: ''
        // focused: false
        // attemptSubmit: false
      }
    }
  },

  computed: {
    nameIsValid () {
      return !!this.user.name
    },

    emailIsValid () {
      return !!this.user.email
    },

    mobileIsValid () {
      return this.user.mobile.length != null && this.user.mobile.length === 10
    },

    passwordIsValid () {
      return !!this.user.password
    },

    formIsValid () {
      return this.nameIsValid && this.emailIsValid && this.mobileIsValid && this.passwordIsValid
    }
  },

  methods: {
    submitForm () {
      if (this.formIsValid) {
        document.getElementById('submitted').onclick = alert('Form Is Valid & Submitted')
        // console.log('Form Submitted', this.user)
        document.getElementById('preview').style.display = 'block'
      } else {
        document.getElementById('submitted').onclick = alert('Form Is Invalid')
        // console.log('Form Is Invalid')
      }
      console.log('name :', this.user.name)
      console.log('email :', this.user.email)
      console.log('mobile :', this.user.mobile)
      console.log('password :', this.user.password)
    }
  }
}
</script>

<style scoped>
.temp{
  margin:2%;
  font-family: sans-serif;
  text-align:center;
  font-size: 23px;
  background-color: #EAECEE ;
  position: relative;
}

.label{
  padding-right: 2%;
}

.input{
  border-radius: 4px%;
  padding:5px 12px;
  width:20%;
  padding:.6%;
 }

#preview{
  padding:5px 12px;
  margin:30px 0;
  border:1px
}

.button {
  padding:5px;
  width:7%;
  border-radius: 4px%;
  font-size:15px;
}

.error{
  font-family: 'Lucida Sans';
  color: red;
  font-size: 17px;
  text-align: center
}
/*
 input:invalid {
  border: 8px solid red;
} */

input:hover, input:active {
  font-family: monospace;
  border: 2px solid black;
}
</style>

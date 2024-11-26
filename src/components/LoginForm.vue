<template>
  <div class="container-xxl py-5">
    <div class="row justify-content-center">
      <div class="col-6">
        <div class="text-center mb-5">
            <img src="../../public/assets/dist/img/logo.png" height="50" class='mb-4 rounded-circle'/>
            <h3>Sign In</h3>
        </div>
        <p class="login-box-msg">Sign in to start your session</p>
        <form method="post">
            <div class="input-group mb-3">
                <input type="email" class="form-control" placeholder="Email" name="email" id="email" v-model="formData.email"/>
                <div class="input-group-append">
                    <div class="input-group-text">
                        <span class="fas fa-envelope"></span>
                    </div>
                </div>
            </div>
            <div class="input-group mb-3">
                <input v-model="formData.password" type="password" class="form-control" placeholder="Password" name="password" />
                <div class="input-group-append">
                    <div class="input-group-text">
                        <span class="fas fa-lock"></span>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-8">
                    <div class="icheck-primary">
                    <input type="checkbox" id="remember"/>
                    <label htmlFor="remember">
                        Remember Me
                    </label>
                    </div>
                </div>
                <div class="col-4">
                    <button @click="login" type="button" class="btn btn-primary btn-block">Sign In</button>
                </div>
            </div>
        </form>
        <div class="social-auth-links text-center mb-3">
            <p>- OR -</p>
            <a href="#" class="btn btn-block btn-danger">
                <i class="fab fa-google-plus mr-2"></i> Sign in using Google+
            </a>
        </div>
        <p class="mb-1">
            <Link to="#">I forgot my password</Link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import DataService from "../services/DataService";
  import router from '@/router';
export default {
  name: "LoginForm",
  data() {
    return {
      formData: {
          email: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      var data = {
          email: this.formData.email,
        password: this.formData.password
      };
      DataService.login(data)
      .then(response => {
        console.log(response.data.data.token)
        if(response.data.data.token)
          sessionStorage.setItem('uid', response.data.data.token);
        else
          alert(response.data.error)
          
          router.push({ name: 'home' });
          window.location.href='/home';
      })
      .catch(e => {
        console.log(e);
      });
    }
  },
};
</script>

<style scoped>
.container {
  max-width: 400px;
  margin: 0 auto;
}
.text-center {
  text-align: center;
}
</style>
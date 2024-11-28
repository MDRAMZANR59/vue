<template>
  <div class="container-xxl bdimage py-5">
    <div class="row justify-content-center">
      <div class="col-6 bg">
        <div class="text-center bg-image mb-5" >
            <img src="../../public/assets/dist/img/logo.png" height="50" class='mb-4 mt-2 rounded-circle'/>
            <h3 class="font-weight-bolder h2" >Sign In</h3>
        </div>
        <p class="login-box-msg font-weight-bolder h4">Sign in to start your session</p>
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
                <div class="col-8 clear-flex"></div>
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
.bdimage{
  background-image: url('../../public/assets/dist/img/BgImage.jpg');
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
}
.bg{
  background-color: rgba(240, 248, 255, 0.47);
  border-radius: 3%;
}
</style>
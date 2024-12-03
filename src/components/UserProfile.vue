<template>
  <!-- Content Header (Page header) -->
  <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>User Profile</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active">User Profile</li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>
    <!-- Main content -->
    <section className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <!-- Profile Image -->
            <div className="card card-primary card-outline">
              <div className="card-body box-profile">
                <div className="text-center">
                  <img class="profile-user-img img-fluid img-circle" :src="'http://127.0.0.1:8000/adduser/'+userName.photo" alt="User profile picture"/>
                </div>
                <h3 className="profile-username text-center">{{ uid ? userName.name : 'User Name' }}</h3>
                <ul className="list-group list-group-unbordered mb-3">
                  <li className="list-group-item">
                    <b>Dasignation:</b> <a className="float-right">{{ uid ? userName.role.role_name : 'Designation' }}</a>
                  </li>
                  <li className="list-group-item">
                    <b>Nid No:</b> <a className="float-right">{{ uid ? userName.nid : 'Empolyee Id' }}</a>
                  </li>
                  <li className="list-group-item">
                    <b>Account Info</b>
                    <h6><i class="fas fa-user-circle"></i> {{ uid ? userName.name : 'User Name' }}</h6>
                    <h6><i class="fas fa-map-marker-alt"></i> {{ uid ? userName.upozila : 'Upozila' }} - {{ uid ? userName.zipCode : 'Zip Code' }}, <br/> &nbsp; &nbsp; &nbsp;{{ uid ? userName.districts : 'Districts' }}, {{ uid ? userName.country : 'Country' }} </h6>
                  </li>
                </ul>
                <a href="#" className="btn btn-primary btn-block"><b>Edit Profile</b></a>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->

            <!-- About Me Box -->
           
          </div>
          <div className="col-md-6">
            <!-- Profile Image -->
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">About User</h3>
              </div>
              <!-- /.card-header -->
              <div className="card-body">
                <strong><i className="fas fa-book mr-1"></i> Contect</strong>
                <p className="text-muted">
                  <i className="fas fa-phone-alt mr-1"></i><small>+88 {{ uid ? userName.phone : 'Phone' }}</small><br/>
                  <i className="fas fa-envelope mr-1"></i><small>{{ uid ? userName.email : 'Email' }}</small>
                </p>
                <hr/>
                  <template v-if="uid===3 && userName && userName.department">
                    <strong><i class="fas fa-bars"></i> Others</strong>
                    <p class="text-muted"><strong>Department:</strong> {{ userName.department }}</p>
                    <p class="text-muted"><strong>Expart:</strong> {{ userName.expart }}</p>
                  </template>
              </div>
            </div>
          

          </div>
        </div>
      </div>
    </section>
</template>
<script>
  import axios from 'axios';  // Correctly import axios at the top of your script

  export default {
    name: 'UserProfile',
    data() {
        console.log(JSON.parse(sessionStorage.getItem('userName')))
        return {
            // open Sidebar
            openMenu: '',
            // dropdown
            uid: sessionStorage.getItem('uid'),
            userName: JSON.parse(sessionStorage.getItem('userName')),
        };
    },
    methods: {
        handleMenuClick(menu) {
            this.openMenu = this.openMenu === menu ? '' : menu;
        },
        logout() {
            this.uid = "";  // Clear uid
            this.userName = null;  // Clear userName
            sessionStorage.removeItem('uid'); // Clear sessionStorage
            sessionStorage.removeItem('userName'); // Clear sessionStorage
            this.$router.push('/'); // Redirect to home or login page
        },
        fetchUserProfile() {
            axios.get('/api/user-profile', { params: { userId: this.uid } })
              .then(response => {
                // Assuming the response contains the photo URL
                this.userName = response.data;
                // Ensure photo URL is complete, otherwise use fallback
                if (!this.userName.photo) {
                  this.userName.photo = 'path/to/default-photo.jpg'; // fallback photo
                }
              })
              .catch(error => {
                console.error("Error fetching user profile:", error);
              });
        }
    }
  }
</script>


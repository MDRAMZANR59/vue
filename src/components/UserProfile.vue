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
          <div className="col-md-3">
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
                  <template v-if="uid && userName && userName.department">
                    <strong><i class="fas fa-bars"></i> Others</strong>
                    <p class="text-muted"><strong>Department:</strong> {{ userName.department }}</p>
                    <p class="text-muted"><strong>Expart:</strong> {{ userName.expart }}</p>
                  </template>
              </div>
              <!-- /.card-body -->
            </div>
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Login History</h3>
              </div>
              <!-- /.card-header -->
              <div className="card-body">
                <div>
                  <strong><i className="fas fa-book mr-1"></i> Now Loged Time</strong>
                  <p className="text-muted"> 05:30:20<br/></p>
                </div>
                <div>
                  <strong><i className="fas fa-book mr-1"></i> Now Loged Last Week</strong>
                  <p className="text-muted"> 05:30:20<br/></p>
                </div>
                <div>
                  <strong><i className="fas fa-book mr-1"></i> Loged Time This Month</strong>
                  <p className="text-muted"> 05:30:20<br/></p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9 ">
            <div className="card table-responsive ">
              <div className="card-header p-2">
                <ul className="p-0 nav-pills">
                  <li className="nav-item list-unstyled"><a className="nav-link active" href="#activity" data-toggle="tab">Running Project</a></li>
                </ul>
              </div>
              <div className="card-body p-0">
                <section className="table-responsive content">
                  <table className=" table table-striped projects">
                    <thead className='text-nowrap'>
                        <tr className="text-center">
                            <th className="ps-1 pe-1">SL</th>
                            <th className="ps-1 pe-1">Team Leader</th>
                            <th className="ps-1 pe-1">Project Name</th>
                            <th className="ps-1 pe-1">Id</th>
                            <th className="ps-1 pe-1">Progress</th>
                            <th className="ps-1 pe-1">Start Date</th>
                            <th className="ps-1 pe-1">Estimated End Date</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr>
                            <td className="p-1">01</td>
                            <td className="p-1">
                                <img src="../../public/assets/dist/img/avatar2.png" className="Thumbnail img-fluid mx-auto" width="50px" /><br/>
                                <a href="#" className="d-block text-center" >Jons Endarson</a>
                            </td>
                            <td className="p-1"><a href="#" >Pc App Debolopment</a></td>
                            <td className="p-1"><a href="#" >A5X78P2</a></td>
                            <td className="project_progress stripped">
                                <div className="progress progress-sm">
                                    <div className="progress-bar bg-green" role="progressbar" aria-valuenow="57" aria-valuemin="0" aria-valuemax="100" :style="{width:'57%'}" ></div>
                                </div>
                                <small>57% Complete</small>
                            </td>
                            <td className="project-state ps-0 pe-0">
                                <span className="badge badge text-dark">10/05/2024</span>
                            </td>
                            <td className="project-state ps-0 pe-0">
                                <span className="badge badge text-dark">10/05/2024</span>
                            </td>
                        </tr>
                    </tbody>
                  </table>
                </section>
              </div>
            </div>
            <div className="card">
              <div className="card-header p-2">
                <ul className=" p-0 nav-pills">
                  <li className="nav-item list-unstyled"><a className="nav-link active" href="#activity" data-toggle="tab">My Project</a></li>
                </ul>
              </div>
              <div className="card-body p-0">
                <section className="table-responsive content">
                  <table className="table table-striped projects">
                    <thead className='text-nowrap'>
                      <tr className="text-center">
                        <th className="ps-1 pe-1">SL</th>
                        <th className="ps-1 pe-1">Team Leader</th>
                        <th className="ps-1 pe-1">Project Name</th>
                        <th className="ps-1 pe-1">Project Id</th>
                        <th className="ps-1 pe-1">Progress</th>
                        <th className="ps-1 pe-1">Start Date</th>
                        <th className="ps-1 pe-1">Estimated End Date</th>
                        <th className="ps-1 pe-1">Status</th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      <tr>
                        <td className="p-1">01</td>
                        <td className="p-1">
                            <img src="../../public/assets/dist/img/avatar4.png" className="Thumbnail img-fluid mx-auto" width="50px" /><br/>
                            <a href="#" className="d-block text-center" >Jons Endarson</a>
                        </td>
                        <td className="p-1"><a href="#" >Pc App Debolopment</a></td>
                        <td className="p-1"><a href="#" >A5X78P2</a></td>
                        <td className="project_progress stripped">
                            <div className="progress progress-sm">
                                <div className="progress-bar bg-green" role="progressbar" aria-valuenow="57" aria-valuemin="0" aria-valuemax="100"  :style="{width:'57%'}"></div>
                            </div>
                            <small>57% Complete</small>
                        </td>
                        <td className="project-state ps-0 pe-0">
                            <span className="badge badge text-dark">10/05/2024</span>
                        </td>
                        <td className="project-state ps-0 pe-0">
                            <span className="badge badge text-dark">10/05/2024</span>
                        </td>
                        <td className="p-1"><a href="#" >Dalivary</a></td>
                      </tr>
                    </tbody>
                  </table>
                </section>
              </div>
            </div>
            <div v-if="uid && userName.role_id === '4'" className="card ">
              <div className="card-header p-2">
                <ul className=" p-0 nav-pills">
                  <li className="nav-item list-unstyled"><a className="nav-link active" href="#activity" data-toggle="tab">Complain/Suggestion</a></li>
                </ul>
              </div>
              <div className="card-body p-0">
                <section className="content">
                  <form>
                      <div className="mb-12 col-md-12">
                          <label className="me-2" htmlFor="complain"><input type="radio" name="complain" id="complain" />  Complain</label>
                          <label htmlFor="suggestion"><input type="radio" name="complain" id="suggestion" />Suggestion</label>
                          <textarea
                              required
                              placeholder="Write Your Complain Or Suggestion"
                              className='form-control'
                              id="complainSuggestion"
                              name="complainSuggestion"
                          ></textarea>
                          <button type="submit" className="btn btn-primary mt-3">Sent</button>
                      </div>
                    </form>
                </section>
              </div>
            </div>
            <div v-if="uid && userName.role_id === '1'||'2'" className="card ">
              <div className="card-header p-2">
                <ul className=" p-0 nav-pills">
                  <li  className="nav-item list-unstyled"><a className="nav-link active" href="#activity" data-toggle="tab">Complain/Suggestion</a></li>
                </ul>
              </div>
              <div className="card-body p-0">
                <section className="content table-responsive">
                  <table className="table table-striped projects">
                    <thead className='text-nowrap'>
                      <tr className="text-center">
                        <th className="ps-1 pe-1">SL</th>
                        <th className="ps-1 pe-1">Customer Id</th>
                        <th className="ps-1 pe-1">Massage</th>
                        <th className="ps-1 pe-1">Massage Type</th>
                        <th className="ps-1 pe-1">Status</th>
                        <th className="ps-1 pe-1">Sent Time</th>
                        <th className="ps-1 pe-1">Action</th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      <tr>
                        <td className="p-1">01</td>
                        <td className="p-1">05</td>
                        <td className="p-1"><a>Massge In Modal</a></td>
                        <td className="p-1">Complain</td>
                        <td className="project_progress stripped">Readed</td>
                        <td className="project-state ps-0 pe-0">
                            <span className="badge badge text-dark">10/05/2024</span>
                        </td>
                        <td className="p-1">
                          <button type='button' className='btn btn-danger' >Delete</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </section>
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


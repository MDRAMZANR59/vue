<template>
    <aside class="main-sidebar sidebar-dark-primary elevation-4" style="min-height:100vh">
        <a href="#" class="brand-link">
            <img src="../../../public/assets/dist/img/logo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
            <span class="brand-text font-weight-light">Code Crafter</span>
        </a>
        <!-- Sidebar -->
        <div class="sidebar">
            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                <div class="image">
                    <img src="../../../public/assets/dist/img/user4-128x128.jpg" class="img-circle elevation-2" alt="User Image">
                </div>
                <div class="navbar-nav ml-auto">
    <div class="nav-item dropdown">
        <a href="#" class=" ms-3 nav-link dropdown-toggle" data-bs-toggle="dropdown">
            <!-- Display the user's full name if logged in, otherwise show 'User Account' -->
            {{ uid ? userName.name : 'User Account' }}
        </a>
        <div class="nav-item dropdown-menu ">
            <!-- Show Profile and Logout if user is logged in -->
            <a v-if="uid" href="/userprofile" class="dropdown-item">Profile</a>
            <a v-if="uid" href="javascript:void(0)" class="dropdown-item" @click="logout">Logout</a>
        </div>
    </div>
</div>
            </div>
            <!-- SidebarSearch Form -->
            <div class="form-inline">
                <div class="input-group" data-widget="sidebar-search">
                    <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">
                    <div class="input-group-append">
                        <button class="btn btn-sidebar">
                            <i class="fas fa-search fa-fw"></i>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Sidebar Menu -->
            <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    <li class="nav-item menu-open">
                        <a href="/home" class="nav-link active">
                            <i class="nav-icon fas fa-tachometer-alt"></i>
                            <p>
                                Dashboard
                                <i class="right fas fa-angle-left"></i>
                            </p>
                        </a>
                    </li>

                    <li :class="['nav-item', { 'menu-open': openMenu === 'user' }]">
                        <a href="javascript:void(0)" class="nav-link" @click="handleMenuClick('user')">
                            <i class="nav-icon fas fa-user"></i>
                            <p>
                                User
                                <i class="fas fa-angle-left right"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <a href="http://127.0.0.1:3000/user/addUser" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Add User</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="http://127.0.0.1:3000/user/userList" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>User List</p>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li :class="['nav-item', { 'menu-open': openMenu === 'customerNote' }]">
                        <a href="javascript:void(0)" class="nav-link" @click="handleMenuClick('customerNote')">
                            <i class="nav-icon fas fa-sticky-note"></i>
                            <p>
                                Customer Note
                                <i class="fas fa-angle-left right"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <a href="http://127.0.0.1:3000/customerNote/addNote" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Customer Note Add</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="http://127.0.0.1:3000/customer/customerList" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Note List</p>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li :class="['nav-item', { 'menu-open': openMenu === 'customer' }]">
                        <a href="javascript:void(0)" class="nav-link" @click="handleMenuClick('customer')">
                            <i class="nav-icon fas fa-restroom"></i>
                            <p>
                                Customer's
                                <i class="fas fa-angle-left right"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <a href="http://127.0.0.1:3000/customer/customerAdd" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Customer Add</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="http://127.0.0.1:3000/customer/customerList" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Customer List</p>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li :class="['nav-item', { 'menu-open': openMenu === 'project' }]">
                        <a href="javascript:void(0)" class="nav-link" @click="handleMenuClick('project')">
                            <i class="nav-icon fas fa-folder"></i>
                            <p>
                                Project
                                <i class="fas fa-angle-left right"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <a href="http://127.0.0.1:3000/project/projectAdd" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Add Project</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="http://127.0.0.1:3000/project/projectList" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Project List</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="http://127.0.0.1:3000/project/DeliveryProject" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Delivary Project</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="http://127.0.0.1:3000/project/CancalingProject" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Cancaled Project</p>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li :class="['nav-item', { 'menu-open': openMenu === 'mail' }]">
                        <a href="javascript:void(0)" class="nav-link" @click="handleMenuClick('mail')">
                            <i class="nav-icon fas fa-envelope"></i>
                            <p>
                                Mail
                                <i class="fas fa-angle-left right"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <a href="http://127.0.0.1:3000/mail/mailBox" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Mail Box</p>
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li class="nav-header">EXAMPLES</li>
                    <li class="nav-item">
                        <a href="http://127.0.0.1:3000/service/serviceAdd" class="nav-link">
                            <i class="fas fa-circle nav-icon"></i>
                            <p>
                                Service Add
                            </p>
                        </a>
                    </li>
                    <li :class="['nav-item', { 'menu-open': openMenu === 'serviceList' }]">
                        <a href="javascript:void(0)" class="nav-link" @click="handleMenuClick('serviceList')">
                            <i class="nav-icon fas fa-envelope"></i>
                            <p>
                                Service List
                                <i class="fas fa-angle-left right"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <a href="http://127.0.0.1:3000/service/serviceList/AndroidAppDevolopment" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Android App Development</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="http://127.0.0.1:3000/service/serviceList/WebAppDevolopment" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Web Application Development</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="http://127.0.0.1:3000/service/serviceList/PcAppDevolopment" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>PC App Development</p>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    </aside>
</template>

<script>
export default {
    name: 'Sidebar',
   
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
    }
};
</script>
<style scoped>
.nav-item .dropdown-menu {
    min-width: 150px;
    position: absolute !important;
    transform: none !important;
}
</style>


<template>
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <a href="index3.html" class="brand-link">
            <img src="../../../public/assets/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
            <span class="brand-text font-weight-light">AdminLTE 3</span>
        </a>
        <!-- Sidebar -->
        <div class="sidebar">
            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                <div class="image">
                    <img src="../../../public/assets/dist/img/user4-128x128.jpg" class="img-circle elevation-2" alt="User Image">
                </div>
                <div class="info">
                    <a href="#" class="d-block">Alexander Pierce</a>
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
                        <a href="#" class="nav-link active">
                            <i class="nav-icon fas fa-tachometer-alt"></i>
                            <p>
                                Dashboard
                                <i class="right fas fa-angle-left"></i>
                            </p>
                        </a>
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
                                <a href="/customerNote/addNote" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Customer Note Add</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="/customerNote/noteList" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Note List</p>
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li class="nav-header">EXAMPLES</li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <i class="nav-icon far fa-envelope"></i>
                            <p>
                                Mailbox
                                <i class="fas fa-angle-left right"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <a href="pages/mailbox/mailbox.html" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Inbox</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="pages/mailbox/compose.html" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Compose</p>
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
    props: {
        msg: String
    },
    data() {
        return {
            openMenu: ''
        };
    },
    methods: {
        handleMenuClick(menu) {
            this.openMenu = this.openMenu === menu ? '' : menu;
        }
    }
};
</script>


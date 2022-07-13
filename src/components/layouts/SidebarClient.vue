<template>
    <aside class="sidebar" id="sidebar">
        <h1 class="logo d-none d-lg-block d-md-block">
            <a class="header__logo" href="#"><img src="../../assets/icons/logo-famos-pink.png" alt="logo-famos" /></a>
        </h1>
        <nav class="sidemenu">
            <ul>
                <li v-bind:class="{ 'current-menu-item': $route.path == '/client' }">
                    <router-link to="/client">
                        <div class="icon">
                            <img src="../../assets/icons/ic-home.png" /><img class="hover"
                                src="../../assets/icons/ic-home-hover.png" />
                        </div>
                        <span>Beranda</span>
                    </router-link>
                </li>
                <li v-bind:class="{ 'current-menu-item': $route.path == '/client/project' }">
                    <router-link to="/client/project">
                        <div class="icon">
                            <img src="../../assets/icons/ic-proyek.png" /><img class="hover"
                                src="../../assets/icons/ic-proyek-hover.png" />
                        </div>
                        <span>Proyek</span>
                    </router-link>
                </li>
                <li v-bind:class="{ 'current-menu-item': $route.path == '/client/brief' }">
                    <router-link to="/client/brief">
                        <div class="icon">
                            <img src="../../assets/icons/ic-brief.png" /><img class="hover"
                                src="../../assets/icons/ic-brief-hover.png" />
                        </div>
                        <span>Brief</span>
                    </router-link>
                </li>
                <hr>
            </ul>
        </nav>
        <div class="d-none d-lg-block d-md-block">
            <div class="need-help">
                <a href="#">Butuh bantuan ?</a>
            </div>
            <div class="user-account dropright" aria-expanded="true">
                <a class="user-account__pp" href="#"><img
                        src="../../assets/icons/Avatar-03.png" style="height: 47px; width: 47px" /></a>
                <div class="user-account__name">
                    <span>Mohammad Fatoni Anggris</span>
                </div>
                <div class="dropdown-menu user-acnt_menu">
                    <ul>
                        <li>
                            <a href="#" data-toggle="modal"
                                data-target="#userSettings">
                                <span>Sunting Profil</span>
                            </a>
                        </li>
                        <li onclick="javascript:location.href=&##39;">
                            <a href="javascript:void(0)">
                                <span>Log Out</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="d-block d-lg-none d-md-none menu_mob">
            <div class="user-account dropright" aria-expanded="true">
                <a class="user-account__pp" href="#"><img
                        src="../../assets/icons/Avatar-06.png" /></a>
                <div class="user-account__name">
                    <span>Mohammad Fatoni Anggris</span>
                </div>
            </div>
            <div class="mobile-logout-container mt-4">
                <span onclick="javascript:location.href=&#39;#39;">Keluar</span>
            </div>
            <div class="need-help">
                <a href="#">Butuh bantuan ?</a>
            </div>
        </div>
    </aside>
</template>

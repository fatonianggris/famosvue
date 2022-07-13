<template>
    <main style="min-height: calc(100vh - 99.475px); padding-top: 76px;">
        <div class="client-content">
            <div class="client-home">
                <div class="row wrapper_banner">
                    <div class="col-md-10">
                        <section class="welcome-banner animate--in" id="anno-1">
                            <div class="text">
                                <h2>Hai <img src="../../assets/icons/ic-hand-wave.png"> Selamat <span
                                        id="greet">Siang</span> Famos</h2>
                                <p>Talenta kreatif sedang menunggu anda dari seluruh<br> penjuru Indonesia.</p>
                                <router-link to="/client/addbriefclient" class="btn btn-primary"
                                    style="font-weight: 500;padding:8px 16px">
                                    <img style="height: 16px; width:16px;display:inline;margin-right:5px"
                                        src="../../assets/icons/ic-plus-btn.png"> Tulis Brief
                                </router-link>
                            </div>
                            <div class="img"><img src="../../assets/icons/dashboard-image-banner.png"></div>
                        </section>
                    </div>
                    <div class="col-md-2">
                        <div class="card-white guide">
                            <div class="top">
                                <div class="icon"><img src="../../assets/icons/ic-dontknow.png"></div>
                                <div class="text">
                                    <h4>Belum tau cara menulis brief dengan mudah &amp; jelas?</h4>
                                </div>
                            </div>
                            <div class="bottom"><a class="btn btn-link" href="#" target="_blank">Baca guide disini</a>
                            </div>
                        </div>
                    </div>
                </div>
                <section class="prjct-in-prgress">
                    <div class="section_title">
                        <h3>Proyek Sedang Berjalan</h3>
                        <div class="show-more">
                            <router-link to="/client/project"> Lihat Semua</router-link>
                        </div>
                    </div>
                    <div class="row" id="list_project">
                        <!-- <div style="width:200px; margin:0 auto;">Belum ada data proyek</div> -->
                        <div class="col-md-6">
                            <div class="prjct-card blank">
                                <div class="row">
                                    <div class="col-md-3"><img src="../../assets/icons/empty_project.png"
                                            alt="img-empty"></div>
                                    <div class="col-md-8 offset-md-1">
                                        <div class="text">
                                            <h4>Anda Belum Memiliki Proyek</h4>
                                            <p>Yuk Bikin Briefnya Terlebih Dahulu</p>
                                            <router-link to="/client/addbriefclient" class="btn-brief-grey">Tulis Brief
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="brief">
                    <div class="section_title">
                        <h3>Daftar Brief</h3>
                        <div class="show-more">
                            <router-link to="/client/brief"> Lihat Semua </router-link>
                        </div>
                    </div>
                    <div class="row" id="list_brief">
                        <div class="col-md-3">
                            <router-link to="/client/detailbrief" style="text-decoration: none; color: inherit;">
                                <div class="card-white yellow">
                                    <div class="top">
                                        <div class="icon"><img src="../../assets/icons/ic-yuk-bayar.png">
                                        </div>
                                        <div class="text">
                                            <h4 style="color: #ffc107">famos</h4>
                                            <p>Talenta telah menerima tawaran Anda. Segera lakukan pembayaran untuk
                                                melanjutkan proyek.</p>
                                        </div>
                                        <div class="tag"><span style="background: #ffc107">Ongoing</span></div>
                                    </div>
                                    <div class="bottom">
                                        <router-link to="/client/detailbrief" class=" btn btn-white bg-warning">Lihat
                                        </router-link>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </main>
</template>

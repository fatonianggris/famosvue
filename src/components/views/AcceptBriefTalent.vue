<template>
    <header class="header no-sidebar" id="header">
        <div class="header-container">
            <div class="row">
                <div class="col left">
                    <h1 class="logo"><a class="header__logo" href="https://famoscompany.com/clients/home"><img
                                src="../../assets/icons/logo-famos-orange.png" alt="logo-famos"></a>
                    </h1>
                </div>
                <div class="col right">
                    <div class="user-header">
                        <ul>
                            <li class="notif"><a href="https://famoscompany.com/clients/brief/complete/124#"><img
                                        id="loceng_icon"
                                        src="../../assets/icons/ic-bell-black.png"></a>
                                <div class="header-notif__box">
                                    <div class="n-wrapper">
                                        <div class="pertime"><span class="t-notif" id="notif_head">Pemberitahuan (1)
                                            </span></div>
                                        <!-- <div class="pertime"><span class="t-notif"> Belum ada Pemberitahuan</span></div> -->
                                        <div id="notif_box">
                                            <div class="notif-item new">

                                                <div class="box-text">
                                                    <a class="title"
                                                        href="https://famoscompany.com/clients/pembayaran/detail/69">Yeay!
                                                        Kami sudah menemukan Talenta untuk kamu</a>
                                                    <p class="content">Brief berhasil diterima , dan sudah dilihat oleh
                                                        Talenta , harap lunasi Pembayaran #F0F4B di menu pembayaran atau
                                                        click notif ini </p>
                                                    <div class="time">11 hours ago</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="nav-mobile"><span></span><span></span></div>
                </div>
            </div>
        </div>
    </header>
    <main style="min-height: calc(100vh - 99.262px); padding-top: 80px;">
        <div class="client-content write-brief-confirm">
            <div class="client-brief">
                <div class="brief-confirm__img"><img src="../../assets/icons/brief-write-confirm.png" />
                </div>
                <div class="brief-confirm__text">
                    <h2 class="text-success">Selamat! Kamu Mendapatkan Brief Baru.</h2>
                    <p>
                        Kamu dapat memantau detail proyek dan mengirim hasil pengerjaan.
                    </p>
                </div>
                <div class="bref-confirm__btn"><a class="btn btn-success" href="javascript:void(0)"
                        onclick="submitComplete('done')">Selesai</a>
                    <!-- <a class="btn btn-border grey" href="#cancelConfirm" data-toggle="modal" data-target="#cancelConfirm">Batalkan</a> -->
                </div>
            </div>
        </div>
    </main>
    <footer class="footer" id="footer">
        <div class="footer__main">
            <div class="container">
                <div class="footer__text">
                    <div class="cpyright">Allright Reserved © Famos Company</div><a href="#">Kebijakan Privasi</a>
                </div>
            </div>
        </div>
    </footer>
</template>

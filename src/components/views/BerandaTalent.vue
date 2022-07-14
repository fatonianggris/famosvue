<template>
    <main style="min-height: calc(100vh - 99.475px); padding-top: 76px">
        <div class="client-content">
            <div class="client-home">
                <div class="row wrapper_banner">
                    <div class="col-md-10">
                        <section class="welcome-banner animate--in" id="anno-1">
                            <div class="text">
                                <h2>
                                    Hai
                                    <img src="../../assets/icons/ic-hand-wave.png" />
                                    Selamat <span id="greet">Malam</span> Mohammad Fatoni
                                    Anggris
                                </h2>
                                <p class="d-none d-md-block d-xl-block">
                                    Kemudahan untuk Kamu bekerja dari mana saja <br />
                                    dan memperoleh jangkauan Klien dari seluruh Indonesia.
                                </p>
                                <p class="d-block d-md-none d-xl-none">
                                    Kemudahan untuk Kamu bekerja dari mana saja dan memperoleh
                                    jangkauan Klien dari seluruh Indonesia
                                </p>
                                <a class="btn btn-primary" style="font-weight: 500; padding: 8px 16px" href="#"><img
                                        style="
                          height: 16px;
                          width: 16px;
                          display: inline;
                          margin-right: 5px;
                        " src="../../assets/icons/ic-plus-btn.png" />
                                    Buat Works</a>
                            </div>
                            <div class="img">
                                <img src="../../assets/icons/dashboard-image-banner.png" />
                            </div>
                        </section>
                    </div>
                    <div class="col-md-2">
                        <div class="card-white guide">
                            <div class="top">
                                <div class="icon">
                                    <img src="../../assets/icons/ic-book.png" />
                                </div>
                                <div class="text">
                                    <h4>Belum tau cara menulis Works?</h4>
                                </div>
                            </div>
                            <div class="bottom">
                                <a class="btn btn-link" href="#" target="_blank">Baca guide disini</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row pb-5">
                    <div class="col-md-6 pb-4">
                        <div class="card-white total-pendapatan">
                            <p>Total Pendapatan</p>
                            <div class="dropdown bootstrap-select select input-sm">
                                <select class="select input-sm" id="pendapatan-year" onchange="load_morris_chart()"
                                    tabindex="-98">
                                    <option value="2019">2019</option>
                                    <option value="2020">2020</option>
                                    <option value="2021">2021</option>
                                    <option value="2022" selected>2022</option>
                                </select><button type="button" class="btn dropdown-toggle btn-light"
                                    data-toggle="dropdown" role="button" data-id="pendapatan-year" title="2022">
                                    <div class="filter-option">
                                        <div class="filter-option-inner">
                                            <div class="filter-option-inner-inner">2022</div>
                                        </div>
                                    </div>
                                </button>
                                <div class="dropdown-menu" role="combobox">
                                    <div class="inner show" role="listbox" aria-expanded="false" tabindex="-1">
                                        <ul class="dropdown-menu inner show"></ul>
                                    </div>
                                </div>
                            </div>
                            <div id="pendapatan-chart" style="height: 400px"></div>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="card-white card-saldo p-0">
                            <div class="card-body">
                                <p>
                                    <img src="../../assets/icons/saldo.png" class="card-title-img" />
                                    Saldo Saat Ini
                                </p>
                                <h3 class="mb-3">Rp0</h3>
                                <p>Belum ada Riwayat Wallet</p>
                                <a href="#" class="btn btn-info bg-blue">Tarik Dana</a>
                            </div>
                        </div>
                        <div class="card-white card-proyek p-0 d-none d-md-block d-lg-block d-xl-block">
                            <div class="card-body">
                                <img src="../../assets/icons/proyek-yellow.png" class="proyek-img" />
                                <div class="proyek-text">
                                    <h4 class="text-yellow">0</h4>
                                    <p>Sedang Berjalan</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card-white card-penarikan p-0">
                            <div class="card-body">
                                <p>Riwayat Penarikan</p>
                                <table class="table">
                                    <tbody>
                                        <tr>
                                            <td colspan="2">Belum ada riwayat penarikan</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="card-white card-proyek p-0 d-block d-md-none d-lg-none d-xl-none">
                            <div class="card-body">
                                <img src="../../assets/icons/proyek-yellow.png" class="proyek-img" />
                                <div class="proyek-text">
                                    <h4 class="text-yellow">0</h4>
                                    <p>Sedang Berjalan</p>
                                </div>
                            </div>
                        </div>
                        <div class="card-white card-proyek p-0">
                            <div class="card-body">
                                <img src="../../assets/icons/proyek-green.png" class="proyek-img" />
                                <div class="proyek-text">
                                    <h4 class="text-green">0</h4>
                                    <p>Selesai</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<template>
    <main style="min-height: calc(100vh - 99.475px); padding-top: 76px;">
        <div class="client-content">
            <div class="client-brief">
                <div class="page-title">
                    <h2>Brief <img src="../../assets/icons/search.png" alt="" class="d-inline d-lg-none d-md-none"
                            style="float:right;margin-top:5px" data-toggle="modal" data-target="#modal-search"></h2>
                </div>

                <div class="proyek-list_filter">
                    <form action="https://famoscompany.com/clients/brief#">
                        <div class="row">
                            <div class="col col-7">
                                <div class="form-group form-search">
                                    <label>&nbsp;</label>
                                    <input class="form-control inputCari" type="text"
                                        placeholder="Cari proyek anda disini …"><a class="btn btn-primary"
                                        href="javascript:void(0)" onclick="cariBrief()">Cari</a>
                                </div>
                            </div>
                            <div class="col-12 col-md-3">
                                <label>Filter :</label>
                                <div class="dropdown bootstrap-select form-control select"><select
                                        class="form-control select" id="list_brief" onchange="cariBrief()"
                                        tabindex="-98">
                                        <option value="" selected>Semua Brief</option>
                                        <option value="applied">Disetujui</option>
                                        <option value="brief">Belum Selesai</option>
                                        <option value="canceled">Tidak Disetujui</option>
                                        <option value="complete">Menunggu Konfirmasi</option>
                                    </select><button type="button" class="btn dropdown-toggle btn-light bs-placeholder"
                                        data-toggle="dropdown" role="button" data-id="list_brief" title="Semua Brief">
                                        <div class="filter-option">
                                            <div class="filter-option-inner">
                                                <div class="filter-option-inner-inner">Semua Brief</div>
                                            </div>
                                        </div>
                                    </button>
                                    <div class="dropdown-menu " role="combobox">
                                        <div class="inner show" role="listbox" aria-expanded="false" tabindex="-1">
                                            <ul class="dropdown-menu inner show"></ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="blank-all"></div>
                <section class="brief sec_filter" style="display: none;">
                    <div class="section_title">
                        <h3>Hasil Pencarian</h3>
                    </div>
                    <div class="blank"></div>
                    <div class="row" id="list_filter">

                        <!-- <div style="width:300px; margin:0 auto;">Data pencarian tidak ada</div> -->
                    </div>
                </section>
                <section class="brief sec_applied">
                    <div class="section_title">
                        <h3>Daftar Brief</h3>
                    </div>
                    <div class="row" id="list_applied">
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
                <section class="brief sec_draft" style="display: none;">
                    <div class="section_title">
                        <h3>Brief Belum Selesai</h3>
                    </div>
                    <div class="row" id="list_draft">

                        <!-- <div style="width:200px; margin:0 auto;">Belum ada data brief</div> -->
                    </div>
                </section>
                <section class="brief sec_cancel" style="display: none;">
                    <div class="section_title">
                        <h3>Brief Tidak Disetujui</h3>
                    </div>
                    <div class="row" id="list_cancel">

                        <!-- <div style="width:200px; margin:0 auto;">Belum ada data brief</div> -->
                    </div>
                </section>
                <section class="brief sec_complete" style="display: none;">
                    <div class="section_title">
                        <h3>Menunggu Konfirmasi</h3>
                    </div>
                    <div class="row" id="list_complete">

                        <!-- <div style="width:200px; margin:0 auto;">Belum ada data brief</div> -->
                    </div>
                </section>
            </div>
        </div>
    </main>
</template>

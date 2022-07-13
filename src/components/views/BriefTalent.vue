<template>
    <main style="min-height: calc(100vh - 99.262px); padding-top: 76px;">
        <div class="client-content">
            <div class="client-brief">
                <div class="page-title">
                    <h2>Brief <img src="./Famos Talenta _ Daftar Brief_files/search.png" alt=""
                            class="d-inline d-lg-none d-md-none" style="float:right;margin-top:5px" data-toggle="modal"
                            data-target="#modal-search"></h2>
                </div>

                <div class="proyek-list_filter">
                    <form action="https://famoscompany.com/talentas/brief#">
                        <div class="row">
                            <div class="col-12 col-md-7">
                                <div class="form-group form-search">
                                    <label>&nbsp;</label>
                                    <input class="form-control inputCari" type="text"
                                        placeholder="Cari brief anda disini …"><a class="btn btn-primary"
                                        href="javascript:void(0)" onclick="cariBrief()">Cari</a>
                                </div>
                            </div>
                            <div class="col-12 col-md-3">
                                <label>Filter :</label>
                                <div class="dropdown bootstrap-select form-control select"><select
                                        class="form-control select" id="list_brief" onchange="cariBrief()"
                                        tabindex="-98">
                                        <option value="" selected>Semua Brief</option>
                                        <option value="applied">Brief Masuk </option>
                                        <option value="canceled">Tidak Disetujui</option>
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
                <section class="brief sec_applied">
                    <div class="section_title" id="title_brief_in">
                        <h3>Brief Masuk</h3>
                    </div>
                    <div class="row" id="list_applied">
                        <!-- <div style="width:200px; margin:0 auto;">Belum ada data brief</div> -->
                        <div class="col-md-3">
                            <router-link to="/talent/detailbrief" style="text-decoration: none; color: inherit;">
                                <div class="card-white pink rejected">
                                    <div class="top">
                                        <div class="icon brief-icon">
                                            <img src="../../assets/icons/ic-progres.png">
                                        </div>
                                        <div class="text">
                                            <h4 class="text-orange mt-2">
                                                <router-link to="/talent/detailbrief">
                                                    Judul Proyek Famos
                                                </router-link>
                                            </h4>
                                            <p>Desain Grafis</p>
                                        </div>
                                    </div>
                                    <div class="bottom">
                                        <h4 class="mb-0">Rp2.000.000</h4>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                    </div>
                    <div class="section_title mt-4" id="title_brief_rejected">
                        <h3>Brief Ditolak</h3>
                    </div>
                    <div class="row" id="list_rejected">
                        <div style="width:200px; margin:0 auto;">Belum ada data brief</div>
                    </div>
                </section>
            </div>
        </div>
    </main>
</template>

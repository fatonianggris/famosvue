<template>
    <main style="min-height: calc(100vh - 99.262px); padding-top: 76px; padding-bottom: 76px;">
        <div class="client-content">
            <div class="client-dashboard">
                <div class="page-title">
                    <h2>Proyek <img src="../../assets/icons/ic-book.png" alt="" class="d-inline d-lg-none d-md-none"
                            style="float:right;margin-top:5px" data-toggle="modal" data-target="#modal-search"></h2>

                </div>
                <section class="proyek-list">
                    <div class="proyek-list_filter">
                        <form action="#">
                            <div class="row">
                                <div class="col col-7">
                                    <div class="form-group form-search">
                                        <label>&nbsp;</label>
                                        <input class="form-control inputCari" type="text"
                                            placeholder="Cari proyek anda disini …"><a class="btn btn-primary"
                                            href="javascript:void(0)" onclick="cariProyek()">Cari</a>
                                    </div>
                                </div>
                                <div class="col-12 col-md-3">
                                    <label>Filter :</label>
                                    <div class="dropdown bootstrap-select form-control select"><select
                                            class="form-control select" id="list_filter" onchange="cariProyek()"
                                            tabindex="-98">
                                            <option value="">Semua Proyek</option>
                                            <option value="progress">Sedang Berjalan</option>
                                            <option value="finished">Sudah Selesai</option>
                                        </select><button type="button"
                                            class="btn dropdown-toggle btn-light bs-placeholder" data-toggle="dropdown"
                                            role="button" data-id="list_filter" title="Semua Proyek">
                                            <div class="filter-option">
                                                <div class="filter-option-inner">
                                                    <div class="filter-option-inner-inner">Semua Proyek</div>
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
                    <div class="proyek-list_table" id="list_project">
                        <div class="blank mt-5">
                            <div class="blank-state">
                                <div class="box-img"><img src="../../assets/icons/empty_project.png" alt="img-empty">
                                </div>
                                <div class="box-text">
                                    <h3>Anda Belum Memiliki Proyek</h3>
                                    <p>Yuk Bikin Briefnya Terlebih Dahulu</p>
                                    <router-link to="/client/addbriefclient" class="btn-brief-grey">Tulis Brief
                                    </router-link>
                                </div>
                            </div>
                        </div>
                        <table id="tbl_project" style="display: none;">
                            <thead>
                                <tr>
                                    <th width="20%">NAMA PROYEK</th>
                                    <th width="20%">NO. TRANSAKSI</th>
                                    <th width="25%">PROGRES</th>
                                    <th width="15%">STATUS</th>
                                    <th width="20%">KEAHLIAN</th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                        <div class="pagination">
                            <ul id="nav">
                            </ul>
                        </div>
                    </div>

                </section>
            </div>
        </div>
    </main>
</template>

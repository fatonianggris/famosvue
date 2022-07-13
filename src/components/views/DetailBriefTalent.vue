<template>
    <main style="min-height: calc(100vh - 99.262px); padding-top: 76px;">
        <div class="client-content">
            <div class="client-dashboard">
                <div class="row pb-5">
                    <div class="col-md-9">
                        <div class="panel" style="box-shadow: none !important;">
                            <div class="project-title" style="background:#FDE9F3;">
                                <div class="back"><a class="btn-back"
                                        href="https://famoscompany.com/talentas/dashboard">
                                        <div class="ic"><img src="../../assets/icons/ic-caret-right.svg">
                                        </div>
                                    </a></div>
                                <h3>Tester Copywriting</h3>
                            </div>
                            <section class="proyek__wrap-detail">
                                <div class="proyek__tab">
                                    <ul class="nav nav-tabs" role="tablist">
                                        <li class="nav-item"><a class="nav-link active" id="overview-tab"
                                                data-toggle="tab" href="#overview" role="tab">Overview</a>
                                        </li>
                                    </ul>
                                    <div class="tab-content" id="prjectContent">
                                        <div class="tab-pane fade show active" id="overview" role="tabpanel">
                                            <section class="proyek__detail">
                                                <h5>Penjelasan Lengkap</h5>
                                                <div>
                                                    <p>
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text ever since the 1500s, when an unknown printer took a galley
                                                        of type and scrambled it to make a type specimen book. It has
                                                        survived not only five centuries, but also the leap into
                                                        electronic typesetting, remaining essentially unchanged. It was
                                                        popularised in the 1960s with the release of Letraset sheets
                                                        containing Lorem Ipsum passages, and more recently with desktop
                                                        publishing software like Aldus PageMaker including versions of
                                                        Lorem Ipsum
                                                    </p>
                                                </div>
                                            </section>
                                            <section class="proyek__detail">
                                                <h5>File Example, Asset *</h5>
                                                <a class="btn btn-white btn-upload" style="margin-top: 0;"
                                                    data-toggle="modal"
                                                    href="https://famoscompany.com/clients/brief/detail/123#upldFile184">Download
                                                    File </a>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card-white card-saldo p-0">
                            <div class="card-body">
                                <p class="text-warning"><b>Terima Sebelum 22/10/22</b></p>
                                <div class="img mb-10">
                                    <img src="../../assets/icons/dashboard-image-banner.png" />
                                </div>
                                <p class="text-center"> <b>Apalah kamu ingin menerima projek ini?</b></p>
                                <div class="row text-center p-10">
                                    <div class="col-sm-6">
                                        <router-link to="/talent/acceptbrief" class="btn btn-success">
                                            Terima
                                        </router-link>
                                    </div>
                                    <div class="col-md-6">
                                        <router-link to="/talent/rejectbrief" class="btn btn-danger">
                                            Tolak
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

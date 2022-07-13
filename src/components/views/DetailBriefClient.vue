<template>
    <main style="min-height: calc(100vh - 99.262px); padding-top: 76px;">
        <div class="client-content detail-bayar">
            <div class="client-dashboard pembayaran-detail">
                <div class="row">
                    <div class="col-md-8">
                        <div class="panel">
                            <div class="pembayaran-title">
                                <div class="back"><a class="btn-back"
                                        href="https://famoscompany.com/clients/pembayaran">
                                        <div class="ic"><img src="../../assets/icons/ic-caret-right.svg"></div>
                                    </a></div>
                                <h3>Detail Brief</h3>
                                <div class="deadlinebayar"><span>Deadline 13 Juli 2022</span></div>
                            </div>
                            <section class="pembayaran-detail__bank" style="margin-bottom: 0 !important;">
                                <div class="col-md-12 col-12" style="padding: 0 !important;">
                                    <div class="pilih-bank">
                                        <label><b>Penjelasan Lengkap</b></label>
                                        <!-- <span>Pilih Bank agar pembayaran lebih mudah.</span> -->
                                        <small>
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
                                        </small>
                                    </div>
                                </div>
                                <hr>
                                <div class="upload-bukti mt-5">
                                    <label>File Example, Asset *</label><span>File Tambahan Projek</span>
                                    <!-- <div class="uploadfile"><a class="btn btn-white btn-upload" data-toggle="modal" href="#upldFile">Tambahkan File</a></div> -->
                                    <a class="btn btn-white btn-upload" style="margin-top: 0;" data-toggle="modal"
                                        href="#">Download
                                        File </a>
                                </div>
                            </section>
                            <div class="pembayaran-note">
                                <p>Sementara ini metode pembayaran hanya bisa dilakukan dengan Bank Transfer.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="panel panel-rincian">
                            <div class="rincian-pembayaran">
                                <h4>Rincian Pembayaran</h4>
                                <hr>
                                <label>famos</label>
                                <div class="row">
                                    <div class="col"><b>Label <br></b></div>
                                    <div class="col"><b>Rp 2.000.000,00</b></div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col"><b>Total all Category Price </b></div>
                                    <div class="col"><b>Rp 2.000.000,00</b></div>
                                </div>

                                <div class="row">
                                    <div class="col col-7"><b>Fee Product (10%)</b>

                                    </div>
                                    <div class="col col-5"><b>Rp 200.000,00</b></div>
                                </div>
                                <div class="row">
                                    <div class="col"><b>Service (5%)</b>

                                    </div>
                                    <div class="col"><b>Rp 100.000,00</b></div>
                                </div>


                                <hr>
                                <div class="row total-pembayaran">
                                    <div class="col"><b>Total</b></div>
                                    <div class="col"><b>Rp 2.300.000,00</b></div>
                                </div>
                                <div class="row">
                                    <div class="col"><small><a target="_blank"
                                                href="#"
                                                style="text-decoration: underline;color:black">Unduh Tagihan</a></small>
                                    </div>
                                    <div class="col"></div>
                                </div>
                                <input type="hidden" id="voucher_used" value="0" name="">
                                <div class="btn-wrap">

                                    <a onclick="doSubmit()" class="btn btn-primary btn-block btn-confirm"
                                        href="javascript:void(0)">Konfirmasi Pembayaran</a>
                                </div>
                                <!-- <div class="error-msg"><span>Unggah bukti pembayaran untuk melanjutkan</span></div> -->
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

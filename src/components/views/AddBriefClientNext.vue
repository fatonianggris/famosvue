<template>
    <header class="header no-sidebar" id="header">
        <div class="header-container">
            <div class="row">
                <div class="left">
                    <h1 class="logo"><a class="header__logo" href="https://famoscompany.com/clients/home"><img
                                src="../../assets/icons/logo-famos-orange.png" alt="logo-famos"></a>
                    </h1>
                </div>
                <div class="col right">
                    <div class="user-header">
                        <ul>
                            <li class="notif"><a href="https://famoscompany.com/clients/brief/complete/124#"><img
                                        id="loceng_icon" src="../../assets/icons/ic-bell-black.png"></a>
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
    <main style="min-height: calc(100vh - 99.262px); padding-top: 64px; padding-bottom: 64px;">
        <div class="client-content">
            <div class="client-brief write-brief">
                <div class="page-title">
                    <h2>Layanan apa yang anda cari?</h2>
                    <p>Mohon lakukan pengisian data secara lengkap dan jelas.</p>
                </div>
                <div class="steps offset-1 mb-10">
                    <ul>
                        <li class="active">
                            <u>1</u><span>Key Details</span>
                        </li>
                        <li class="active">
                            <u>2</u><span>Contact Details</span>
                        </li>
                    </ul>
                </div>
                <div class="form">
                    <div class="contact-list"><a class="btn btn-primary btn-add-contact"
                            href="https://famoscompany.com/clients/brief/contact/124#addContact" data-toggle="modal"
                            data-target="#addContact">Buat Kontak Baru</a>
                        <ul id="list_contact">
                            <li id="li" class="selected">
                                <div class="card-contact" onclick="dipilih(43)">
                                    <div class="card-contact__name"><span>famos
                                            <u class="tag">Utama</u></span><span id="label-43"
                                            class="slctd">Dipilih</span></div>
                                    <div class="card-contact__detail">
                                        <ul>
                                            <li>Jabatan : Management Level</li>
                                            <li>famos ● anonixmous@gmail.com</li>
                                        </ul>
                                    </div>
                                    <div class="card-contact__action">
                                        <div class="left"><a class="btn-link" style="text-decoration:underline"
                                                href="javascript:void(0)" data-toggle="modal" data-target="#editContact"
                                                onclick="dataUpdate(43)">Ubah</a><a class="btn-link"
                                                style="text-decoration:none" href="javascript:void(0)"
                                                onclick="setFirst(43)">Atur Sebagai Utama</a></div>
                                        <div class="right"><a class="btn-delete" href="javascript:void(0)"
                                                onclick="deleteList(43)">
                                                <div class="ic"><img src="../../assets/icons/ic-delete.png"
                                                        style="transform:scale(0.8)"></div>
                                            </a></div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <input id="contact_selected" size="15" name="contact_selected" type="hidden" value="43">
                    </div>
                    <div class="form-footer">
                        <div class="row">
                            <div class="col-md-3 col-6 order-3 order-md-1  mb-20">
                                <a class="btn btn-border primary btn-block" href="javascript:void(0)"
                                    onclick="submitModal(&#39;save&#39;)" data-toggle="modal"
                                    data-target="#ConfirmNotif">Simpan</a>
                            </div>
                            <div class="col-md-3 offset-md-3 offset-0 col-6 order-2 order-md-2">
                                <a class="btn btn-grey btn-block"
                                    href="https://famoscompany.com/clients/brief/detail/124">Kembali</a>
                            </div>
                            <div class="col-md-3 col-12 order-1 order-md-3">
                                <a class="btn btn-primary btn-block" href="javascript:void(0)"
                                    onclick="submitModal(&#39;next&#39;)" data-toggle="modal"
                                    data-target="#ConfirmNotif">Kirim</a>
                            </div>
                            <input id="btn_submit" size="15" name="btn_submit" type="hidden" value="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <div class="modal" id="userSettings" tabindex="-1" style="">
        <div class="modal-dialog modal-dialog--centered modal-settings">
            <div class="modal-content"><a class="close" href="https://famoscompany.com/clients/brief/detail/123#"
                    data-dismiss="modal" aria-label="Close"><img
                        src="../../assets/icons/ic-xclose.svg"></a>
                <div class="modal-body">
                    <div class="modal-asside">
                        <div class="modal-title">
                            <h3>Pengaturan</h3>
                        </div>
                        <div class="settings-tab" style="height: 87%;">
                            <ul class="nav nav-tabs" id="settingsTab" role="tablist">
                                <li class="nav-item nav-tab__item" role="presentation"><a
                                        class="nav-tab__link nav-link active" id="sunting-tab" data-toggle="tab"
                                        href="https://famoscompany.com/clients/brief/detail/123#sunting" role="tab"
                                        aria-controls="sunting" aria-selected="true">
                                        <span><img src="../../assets/icons/ic-sunting.png">
                                            <span>Sunting Profil</span></span>
                                    </a></li>
                                <!-- <li class="nav-item nav-tab__item" role="presentation"><a class="nav-tab__link nav-link" id="notifikasi-tab" data-toggle="tab" href="#notifikasi" role="tab" aria-controls="notifikasi" aria-selected="true"><span><img src="https://famoscompany.com:443/assets/front-end/client-site/images/ic-pengaturan-notif.png" /> Pengaturan Notifikasi</span></a></li> -->
                                <li class="nav-item nav-tab__item" role="presentation"><a class="nav-tab__link nav-link"
                                        id="kontak-tab" data-toggle="tab"
                                        href="https://famoscompany.com/clients/brief/detail/123#kontak" role="tab"
                                        aria-controls="kontak" aria-selected="true"><span>
                                            <span>Rincian Kontak</span></span></a></li>
                                <li class="nav-item nav-tab__item" role="presentation"><a class="nav-tab__link nav-link"
                                        id="npwp-tab" data-toggle="tab"
                                        href="https://famoscompany.com/clients/brief/detail/123#npwp" role="tab"
                                        aria-controls="npwp" aria-selected="true"><span>
                                            <span>NPWP</span></span></a></li>
                            </ul>

                        </div>
                        <div style="position:relative;width:100%;background:red">
                            <a href="https://famoscompany.com/clients/logout"
                                style="position:absolute;bottom:0;right:0;left:0;margin:auto;text-align:center"
                                class="link-primary">Keluar</a>
                        </div>
                    </div>
                    <div class="modal-container">
                        <h4 id="tab_title">Sunting Profile</h4>
                        <div class="tab-content" id="settingsTabContent">
                            <div class="tab-pane fade show active" id="sunting" role="tabpanel"
                                aria-labelledby="sunting-tab">
                                <div class="msg_update_profile" id="msg-update-profile"></div>
                                <div class="edit-profile">
                                    <form>
                                        <div class="eprofile">
                                            <div class="eprofile__pp"><img
                                                    src="../../assets/icons/default.png"></div>
                                            <div class="eprofile__name"><b>Famos</b><br>
                                                <a href="https://famoscompany.com/clients/brief/detail/123#modalAvatar"
                                                    data-target="#modalAvatar" data-toggle="modal">Ganti Foto Profil</a>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Nama Lengkap</label>
                                                    <input class="form-control" type="text" placeholder="Nama Depan"
                                                        id="nama_inp" value="Famos">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Nomor HP</label>
                                                    <input class="form-control" type="text" placeholder="Nomor HP"
                                                        id="nomor_inp" value="83483473847">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mt-5">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Username</label>
                                                    <input class="form-control" type="text" placeholder="Username"
                                                        value="famos" disabled>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Email</label>
                                                    <input class="form-control" type="text" placeholder="Email"
                                                        value="anonixmous@gmail.com" disabled>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mt-5">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Password</label>
                                                    <input class="form-control" type="password" placeholder="Password"
                                                        id="password_inp" value="famos">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Ulangi Password</label>
                                                    <input class="form-control" type="password"
                                                        placeholder="Ulangi Password" id="password2_inp" value="famos">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-action text-center">
                                            <button class="btn btn-primary btn-medium btn-save-setting" type="button"
                                                onclick="update_profile()">Simpan Perubahan</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="notifikasi" role="tabpanel" aria-labelledby="notifikasi-tab">
                                <div class="notfication-settings">
                                    <div class="settings-item">
                                        <div class="left"><b>Pesan</b>
                                            <p>Beritahu saya jika ada pesan baru</p>
                                        </div>
                                        <div class="right">
                                            <div class="checks">
                                                <div class="custom-control custom-checkbox">
                                                    <input class="custom-control-input" id="slctNotife" type="checkbox"
                                                        name="slct-notif">
                                                    <label class="custom-control-label" for="slctNotife">Email</label>
                                                </div>
                                                <div class="custom-control custom-checkbox">
                                                    <input class="custom-control-input" id="slctNotifs" type="checkbox"
                                                        name="slct-notif">
                                                    <label class="custom-control-label" for="slctNotifs">SMS</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="settings-item">
                                        <div class="left"><b>Proyek</b>
                                            <p>Beritahu saya jika match dengan Talenta baru</p>
                                            <p>Beritahu saya jika decline dengan Talenta baru</p>
                                            <p>Beritahu saya jika ada update progres</p>
                                        </div>
                                        <div class="right">
                                            <div class="checks">
                                                <div class="custom-control custom-checkbox">
                                                    <input class="custom-control-input" id="slctNotife" type="checkbox"
                                                        name="slct-notif">
                                                    <label class="custom-control-label" for="slctNotife">Email</label>
                                                </div>
                                                <div class="custom-control custom-checkbox">
                                                    <input class="custom-control-input" id="slctNotifs" type="checkbox"
                                                        name="slct-notif">
                                                    <label class="custom-control-label" for="slctNotifs">SMS</label>
                                                </div>
                                            </div>
                                            <div class="checks">
                                                <div class="custom-control custom-checkbox">
                                                    <input class="custom-control-input" id="slctNotife" type="checkbox"
                                                        name="slct-notif">
                                                    <label class="custom-control-label" for="slctNotife"></label>
                                                </div>
                                                <div class="custom-control custom-checkbox">
                                                    <input class="custom-control-input" id="slctNotifs" type="checkbox"
                                                        name="slct-notif">
                                                    <label class="custom-control-label" for="slctNotifs"></label>
                                                </div>
                                            </div>
                                            <div class="checks">
                                                <div class="custom-control custom-checkbox">
                                                    <input class="custom-control-input" id="slctNotife" type="checkbox"
                                                        name="slct-notif">
                                                    <label class="custom-control-label" for="slctNotife"></label>
                                                </div>
                                                <div class="custom-control custom-checkbox">
                                                    <input class="custom-control-input" id="slctNotifs" type="checkbox"
                                                        name="slct-notif">
                                                    <label class="custom-control-label" for="slctNotifs"></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="settings-item">
                                        <div class="left"><b>Pembayaran</b>
                                            <p>Beritahu saya status pembayaran</p>
                                            <p>Ingatkan saya tagihan pembayaran</p>
                                        </div>
                                        <div class="right">
                                            <div class="checks">
                                                <div class="custom-control custom-checkbox">
                                                    <input class="custom-control-input" id="slctNotife" type="checkbox"
                                                        name="slct-notif">
                                                    <label class="custom-control-label" for="slctNotife">Email</label>
                                                </div>
                                                <div class="custom-control custom-checkbox">
                                                    <input class="custom-control-input" id="slctNotifs" type="checkbox"
                                                        name="slct-notif">
                                                    <label class="custom-control-label" for="slctNotifs">SMS</label>
                                                </div>
                                            </div>
                                            <div class="checks">
                                                <div class="custom-control custom-checkbox">
                                                    <input class="custom-control-input" id="slctNotife" type="checkbox"
                                                        name="slct-notif">
                                                    <label class="custom-control-label" for="slctNotife"></label>
                                                </div>
                                                <div class="custom-control custom-checkbox">
                                                    <input class="custom-control-input" id="slctNotifs" type="checkbox"
                                                        name="slct-notif">
                                                    <label class="custom-control-label" for="slctNotifs"></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-action"><a class="btn btn-primary btn-save-setting"
                                            href="https://famoscompany.com/clients/brief/detail/123#">Simpan
                                            Perubahan</a></div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="kontak" role="tabpanel" aria-labelledby="kontak-tab">
                                <div class="contact-list"><a class="btn btn-primary btn-medium btn-save-setting"
                                        href="https://famoscompany.com/clients/brief/detail/123#addContact"
                                        data-toggle="modal" data-target="#addContact">Buat Kontak Baru</a>
                                    <ul class="list_contact_template">
                                        <li id="li-template-43">
                                            <div class="card-contact" onclick="dipilih_template(43)">
                                                <div class="card-contact__name"><span>famos
                                                        <u class="tag">Utama</u></span><span id="label-43"
                                                        class="slctd">Dipilih</span></div>
                                                <div class="card-contact__detail">
                                                    <ul>
                                                        <li>Jabatan : Management Level</li>
                                                        <li>famos</li>
                                                    </ul>
                                                </div>
                                                <div class="card-contact__action">
                                                    <div class="left"><a class="btn-link"
                                                            style="text-decoration:underline" href="javascript:void(0)"
                                                            data-toggle="modal" data-target="#editContact"
                                                            onclick="dataUpdate(43)">Ubah</a><a class="btn-link"
                                                            style="text-decoration:underline" href="javascript:void(0)"
                                                            onclick="setFirstHome(43)">Atur Sebagai Utama</a></div>
                                                    <div class="right"><a class="btn-delete" href="javascript:void(0)"
                                                            onclick="deleteListHome(43)">
                                                            <div class="ic"><img
                                                                    src="../../assets/icons/ic-delete.png">
                                                            </div>
                                                        </a></div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="npwp" role="tabpanel" aria-labelledby="npwp-tab">
                                <form>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label>Nomor NPWP</label>
                                                <input class="form-control" id="no_npwp" name="no_npwp" type="text"
                                                    placeholder="NPWP">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label>Nama Perusahaan</label>
                                                <input class="form-control" id="nama_perusahaan" name="nama_perusahaan"
                                                    type="text" placeholder="Nama Perusahaan">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label>Alamat Perusahaan</label>
                                                <textarea name="alamat_perusahaan" id="alamat_perusahaan" rows="5"
                                                    class="form-control"></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row mt-3">
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label>Unggah NPWP <br> <small>Pastikan berkas yang anda unggah terlihat
                                                        jelas.</small></label>
                                                <input id="files_img_1" onchange="check_img(1)"
                                                    class="btn btn-white btn-upload" type="file"
                                                    style="margin-top: 0 !important;">
                                                <div id="files_1" class="filename notif_upload-1 mt-3 ml-3"
                                                    style="display:none">1 file diunggah &nbsp;<img
                                                        style="display:inline;"
                                                        src="../../assets/icons/ic-brief-need-confirm.png">
                                                </div>
                                            </div>
                                            <small class="link_doc" style="display: none;"> <a class="link_doc"
                                                    id="doc_npwp"
                                                    href="https://famoscompany.com/clients/brief/detail/123"
                                                    style="display: none;"></a></small>
                                        </div>
                                    </div>

                                    <div class="row mt-3">
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label>Unggah PKP <br> <small>Pastikan berkas yang anda unggah terlihat
                                                        jelas.</small></label>
                                                <input id="files_img_2" onchange="check_img(2)"
                                                    class="btn btn-white btn-upload" type="file"
                                                    style="margin-top: 0 !important;">
                                                <div id="files_2" class="filename notif_upload-2 mt-3 ml-3"
                                                    style="display:none">1 file diunggah &nbsp;<img
                                                        style="display:inline;"
                                                        src="../../assets/icons/ic-angle-down.png">
                                                </div>
                                            </div>
                                            <small class="link_doc" style="display: none;"> <a class="link_doc"
                                                    id="doc_pkp"
                                                    href="https://famoscompany.com/clients/brief/detail/123"
                                                    style="display: none;"></a></small>
                                        </div>
                                    </div>

                                    <div class="form-action mt-5">
                                        <button class="btn btn-primary btn-medium btn-save-setting"
                                            onclick="update_npwp()" id="simpan_data" type="button">Simpan</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="modal" id="addContact" tabindex="-1" style="">
        <div class="modal-dialog modal-dialog--centered modal-add-rincian-contact">
            <div class="modal-content"><a class="close" href="https://famoscompany.com/clients/brief/detail/123#"
                    data-dismiss="modal" aria-label="Close"><img
                        src="../../assets/icons/ic-xclose.svg"></a>
                <div class="modal-body">
                    <div class="modal-title">
                        <h3>Buat Rincian Kontak Baru</h3>
                    </div>
                    <form class="valthis" novalidate>
                        <div class="form-group">
                            <label>Nama Pengirim<i>*</i></label>
                            <input class="form-control input_contact" type="text"
                                placeholder="Tulis jawaban anda disini …" name="contact_name" required>
                            <div class="err-msg"></div>
                        </div>
                        <div class="form-group">
                            <label>Jabatan/Posisi Pekerjaan<i>*</i></label>
                            <div class="dropdown bootstrap-select form-control select input_contact"><select
                                    class="form-control select input_contact" title="Pilih Jabatan" name="jabatan"
                                    required tabindex="-98">
                                    <option class="bs-title-option" value=""></option>
                                    <option>C- Level</option>
                                    <option>Management Level</option>
                                    <option>Staff / Employee</option>
                                    <option>SME’s Bussines Owner</option>
                                    <option>Others</option>
                                </select><button type="button" class="btn dropdown-toggle btn-light bs-placeholder"
                                    data-toggle="dropdown" role="button" title="Pilih Jabatan">
                                    <div class="filter-option">
                                        <div class="filter-option-inner">
                                            <div class="filter-option-inner-inner">Pilih Jabatan</div>
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
                        <div class="form-group">
                            <label>Nomer Telepon/Whatsapp<i>*</i></label>
                            <input class="form-control input_contact" type="text"
                                placeholder="Tulis jawaban anda disini …" name="contact_no" required>
                            <div class="err-msg"></div>
                        </div>
                        <div class="form-group">
                            <label>Email Pengirim<i>*</i></label>
                            <input class="form-control email_contact" type="text" value="anonixmous@gmail.com"
                                placeholder="Tulis jawaban anda disini …" name="contact_email" required>
                            <div class="err-msg"></div>
                        </div>
                        <div class="form-action">
                            <button class="btn btn-primary" id="simpan_kontak" type="submit" name="btn_submit"
                                value="save_contact">Simpan</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

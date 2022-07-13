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
    <main style="min-height: calc(100vh - 99.475px); padding-top: 64px; padding-bottom: 64px;">
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
                        <li>
                            <u>2</u><span>Contact Details</span>
                        </li>
                    </ul>
                </div>
                <div class="form">
                    <form class="valthis" id="formfield" action="https://famoscompany.com/clients/brief/submit_write"
                        method="post" novalidate>
                        <hr class="divider">
                        <div class="form-group">
                            <label>Nama Perusahaan <i>*</i></label><small>Jika Anda tidak diwakili oleh sebuah
                                perusahaan, masukkan nama merek Anda.</small>
                            <input class="form-control" type="text" name="nama_perusahaan"
                                placeholder="Tulis Nama Perusahaan Anda disini …" required value=""
                                aria-required="true">
                            <div class="err-msg"></div>
                            <div class="form-tooltip">
                                <div class="box-icon">
                                    <div class="icon"><img src="../../assets/icons/ic-lamp.png" alt="icon"></div>
                                </div>
                                <div class="box-text">
                                    <p>Tuliskan nama perusahaan yang Anda miliki atau nama merek</p>
                                </div>
                            </div>
                        </div>
                        <hr class="divider">
                        <div class="form-group">
                            <label>Penjelasan Lengkap <i>*</i></label>
                            <small>Beri tahu kami apa yang Anda butuhkan! Penjelasan detail lebih membantu kami.
                                Pastikan untuk memasukkan informasi seperti: tujuan proyek desain, apa yang harus
                                dimasukkan dalam proses kreatif, persyaratan khusus dalam pembuatan proyek desain,
                                kendala/permasalahan yang ingin diselesaikan dengan proyek desain ini dll.</small>
                            <div class="dropdown bootstrap-select select bidang_perusahaan bs3" style="width: 100%;">
                                <textarea class="form-control" type="text" name="nama_perusahaan" rows="5"
                                    placeholder="Tulis Nama Perusahaan Anda disini …" required value=""
                                    aria-required="true"></textarea>
                            </div>
                            <div class="err-msg"></div>
                            <div class="form-tooltip">
                                <div class="box-icon">
                                    <div class="icon"><img src="../../assets/icons/ic-lamp.png" alt="icon"></div>
                                </div>
                                <div class="box-text">
                                    <p>Tuliskan secara lengkap apa yang Anda butuhkan mulai dari tujuan proyek,
                                        persyaratan dalam proyek, hingga permasalahan yang ingin diselesaikan dalam
                                        proyek yang Anda ambil</p>
                                </div>
                            </div>
                        </div>
                        <hr class="divider">
                        <div class="form-group">
                            <label>Files, examples and assets </label><small>Berikan aset kepada kami (Opsional)
                                Tambahkan penjelasan singkat lalu lampirkan file / contoh di bawah ini (misalnya: logo,
                                brand guidelines, color code, moodboard).</small>
                            <div class="upload-bukti">
                                <input class="btn btn-white btn-upload" type="file" name="bukti_tf" />
                            </div>
                            <div class="err-msg"></div>
                            <div class="form-tooltip">
                                <div class="box-icon">
                                    <div class="icon"><img src="../../assets/icons/ic-lamp.png" alt="icon"></div>
                                </div>
                                <div class="box-text">
                                    <p>Unggah file yang berisi contoh maupun asset dengan ukuran 12 mb dengan jenis file
                                        berupa ZIP/RAR yang Anda miliki dan tambahkan penjelasan singkat. Pastikan nama
                                        file sesuai dengan isi dan , contoh : logo, brand guidelines, color code, dan
                                        moodboard. Anda juga dapat memasukkan link berupa gdrive lho.</p>
                                </div>
                            </div>
                        </div>
                        <hr class="divider">
                        <div class="form-footer">
                            <p class="note">* Wajib diisi</p>
                            <div class="group-button " style="display: inline;">
                                <!-- <a class="btn btn-primary disabled" href="#">Berikutnya</a> -->
                                <input class="form-control" type="hidden" name="id" value="0">
                                <button class="btn btn-border primary" type="submit" data-toggle="modal"
                                    data-target="#ConfirmNotif" name="btn_submit" value="save">Simpan</button>
                                <button class="btn btn-primary" type="submit" name="btn_submit" value="next"
                                    data-toggle="modal" data-target="#ConfirmNotif">Berikutnya</button>
                                <input id="btn_submit" size="15" name="btn_submit" type="hidden" value="">
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </main>
</template>


<template>
    <section class="login-page login-page--talenta">
        <div class="container">
            <div class="login-page__wrap">
                <div class="login-page__left">
                    <div class="login-page__img"><img src="../../assets/icons/pink.png"></div>
                </div>
                <div class="login-page__right"><a
                        onclick="window.location.href=&#39;https://famoscompany.com/login&#39;" class="back"
                        href="https://famoscompany.com/famos-talenta#"><img
                            src="../../assets/icons/ic-arrow-left.svg"></a><a class="close"
                        href="https://famoscompany.com/"><img src="../../assets/icons/ic-cancel.svg"></a>
                    <div class="login-page__form">
                        <h2 class="title">Masuk sebagai Talenta</h2>
                        <form action="https://famoscompany.com/talentas/login/do_login" method="POST">
                            <div class="form-group">
                                <label>Username/Nama/Email</label>
                                <input class="form-control" name="username" type="text"
                                    placeholder="Masukkan Username/Nama/Email">
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <input class="form-control" name="password" type="password"
                                    placeholder="Masukkan Password">
                                <img src="../../assets/icons/ic-password-show.png" id="toggle-password">
                            </div>
                            <div class="form-action">
                                <button class="btn btn-border-talenta btn-block" type="submit">Masuk</button><span
                                    class="forgot"><a href="https://famoscompany.com/famos-talenta#">Lupa
                                        Password?</a></span>
                            </div>
                        </form>
                        <div class="login-cta">
                            <p>Belum memiliki akun ? <a href="https://famoscompany.com/register-talenta">daftar
                                    disini</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { Test } from '../../assets/js/main';

export default {
    name: 'Testing',
    mounted() {
        // IMPORTANT to create instance of a class
        const myTestInstance = new Test();
        myTestInstance.testing();
    }
}
</script>


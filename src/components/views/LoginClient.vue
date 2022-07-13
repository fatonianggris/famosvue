
<template>
    <main>
        <section class="login-page login-page--klien">
            <div class="container">
                <div class="login-page__wrap">
                    <div class="login-page__left">
                        <div class="login-page__img"><img
                                src="https://famoscompany.com:443/assets/front-end/landing-page/images/login/orange.png" />
                        </div>
                    </div>
                    <div class="login-page__right"><a class="back" href="https://famoscompany.com:443/login"><img
                                src="https://famoscompany.com:443/assets/front-end/landing-page/images/ic-arrow-left.svg" /></a><a
                            class="close" href="https://famoscompany.com:443/"><img
                                src="https://famoscompany.com:443/assets/front-end/landing-page/images/ic-cancel.svg" /></a>
                        <div class="login-page__form">
                            <h2 class="title">Masuk sebagai Klien</h2>
                            <form action="https://famoscompany.com:443/clients" method="post">
                                <div class="form-group">
                                    <label>Username/Email</label>
                                    <input name="username" class="form-control" type="text"
                                        placeholder="Masukkan Username/Email" value="" />
                                </div>
                                <div class="form-group toggle-password-container">
                                    <label>Password</label>
                                    <input name="password" class="form-control" type="password"
                                        placeholder="Masukkan Password" />
                                    <img src="../../assets/icons/ic-password-show.png" id="toggle-password">
                                </div>
                                <div class="form-action">
                                    <router-link to="/client" style="text-decoration: none; color: inherit;">
                                        <button class="btn btn-border-klien btn-block" type="submit">Masuk</button>
                                    </router-link>
                                    <span class="forgot">
                                        <a href="#">Lupa Password?</a>
                                    </span>
                                </div>
                            </form>
                            <div class="login-cta">
                                <p>Belum memiliki akun ? <a href="https://famoscompany.com:443/clients/register">daftar
                                        disini</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
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


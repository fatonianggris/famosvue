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
                            class="close" href="#"><img
                                src="https://famoscompany.com:443/assets/front-end/landing-page/images/ic-cancel.svg" /></a>
                        <div class="login-page__form">
                            <h2 class="title">Masuk sebagai Klien</h2>
                            <form action="#" method="post">
                                <div class="form-group">
                                    <label>Username/Email</label>
                                    <input name="username" class="form-control" type="text"
                                        placeholder="Masukkan Username/Email" value="" />
                                </div>
                                <div class="form-group toggle-password-container">
                                    <label>Password</label>
                                    <input name="password" class="form-control" type="password"
                                        placeholder="Masukkan Password" />
                                    <img src="https://famoscompany.com:443/assets/front-end/client-site/images/ic-password-show.png"
                                        id="toggle-password">
                                </div>
                                <div class="form-action">
                                    <button class="btn btn-border-klien btn-block" type="submit">Masuk</button>
                                    <!-- <span class="or">atau</span>
                    <button class="btn btn-black btn-block" type="button"> <img class="icon" src="https://famoscompany.com:443/assets/front-end/landing-page/images/ic-google.png" /><span>Masuk dengan Google</span></button> -->
                                    <span class="forgot">
                                        <a href="#">Lupa Password?</a>
                                    </span>
                                </div>
                            </form>
                            <div class="login-cta">
                                <p>Belum memiliki akun ? <a href="#">daftar
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

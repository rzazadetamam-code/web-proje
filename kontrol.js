// 1. GİRİŞ (LOGIN) KONTROLÜ
function loginKontrol() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    // Ödev kuralı: Kullanıcı adı = Mail, Şifre = Öğrenci No
    if (user === "g211210001@sakarya.edu.tr" && pass === "g211210001") {
        alert("Giriş Başarılı! Hoş geldiniz.");
        window.location.href = "giris_basarili.html?user=" + user.split('@')[0];
        return false;
    } else {
        alert("Hatalı kullanıcı adı veya şifre!");
        return false;
    }
}

// 2. İLETİŞİM FORMU DENETLE VE GÖNDER (Vanilla JS)
function jsDenetleVeGonder() {
    var ad = document.getElementById("ad").value;
    var soyad = document.getElementById("soyad").value;
    var email = document.getElementById("email").value;
    var tel = document.getElementById("tel").value;
    var konu = document.getElementById("konu").value;
    var mesaj = document.getElementById("mesaj").value;

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var telPattern = /^[0-9]+$/;

    // Denetleme Başlangıcı
    if (ad === "" || soyad === "" || email === "" || tel === "" || konu === "" || mesaj === "") {
        alert("JS Mesajı: Lütfen formu eksiksiz doldurunuz!");
        return false;
    }
    if (!emailPattern.test(email)) {
        alert("JS Mesajı: Geçerli bir e-mail formatı giriniz!");
        return false;
    }
    if (!telPattern.test(tel)) {
        alert("JS Mesajı: Telefon numarası sadece rakamlardan oluşmalıdır!");
        return false;
    }

    // Denetleme Başarılıysa Gönderim (Yönlendirme)
    alert("JS Mesajı: Denetleme Başarılı! Bilgileriniz Sonuç Sayfasına Gönderiliyor...");
    window.location.href = `sonuc.html?ad=${ad}&soyad=${soyad}&email=${email}&tel=${tel}&konu=${konu}&mesaj=${mesaj}&metot=VanillaJS`;
}

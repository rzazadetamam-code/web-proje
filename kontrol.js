// LOGIN KONTROLÜ
function loginKontrol() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if (user === "g211210001@sakarya.edu.tr" && pass === "g211210001") {
        alert("Giriş Başarılı!");
        window.location.href = "giris_basarili.html?user=" + user.split('@')[0];
        return false;
    } else {
        alert("Hatalı kullanıcı adı veya şifre!");
        return false;
    }
}

// İLETİŞİM JS DENETLE VE GÖNDER
function jsDenetleVeGonder() {
    // ID-lər vasitəsilə məlumatları alırıq
    var ad = document.getElementById("ad").value.trim();
    var soyad = document.getElementById("soyad").value.trim();
    var email = document.getElementById("email").value.trim();
    var tel = document.getElementById("tel").value.trim();
    var konu = document.getElementById("konu").value;
    var mesaj = document.getElementById("mesaj").value.trim();

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var telRegex = /^[0-9]+$/;

    if (ad === "" || soyad === "" || email === "" || tel === "" || konu === "" || mesaj === "") {
        alert("JS: Boş alan bırakmayınız!");
        return false;
    }
    if (!emailRegex.test(email)) {
        alert("JS: E-posta formatı hatalı!");
        return false;
    }
    if (!telRegex.test(tel)) {
        alert("JS: Telefon sadece rakam olmalı!");
        return false;
    }

    alert("JS: Başarılı! Sonuç sayfasına aktarılıyor...");
    
    // Veriləri URL-ə yapışdırıb göndəririk
    var url = `sonuc.html?ad=${encodeURIComponent(ad)}&soyad=${encodeURIComponent(soyad)}&email=${encodeURIComponent(email)}&tel=${encodeURIComponent(tel)}&konu=${encodeURIComponent(konu)}&mesaj=${encodeURIComponent(mesaj)}&metot=VanillaJS`;
    
    window.location.href = url;
}

// GİRİŞ KONTROLÜ
function loginKontrol() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if (user === "g211210001@sakarya.edu.tr" && pass === "g211210001") {
        window.location.href = "giris_basarili.html?user=" + user.split('@')[0];
        return false;
    } else {
        alert("Hatalı kullanıcı adı veya şifre!");
        return false;
    }
}

// İLETİŞİM JS KONTROLÜ
function jsKontrolEt() {
    var ad = document.getElementById("ad").value;
    var soyad = document.getElementById("soyad").value;
    var email = document.getElementById("email").value;
    var tel = document.getElementById("tel").value;
    var konu = document.getElementById("konu").value;
    var mesaj = document.getElementById("mesaj").value;

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var telPattern = /^[0-9]+$/;

    if (ad == "" || soyad == "" || email == "" || tel == "" || konu == "" || mesaj == "") {
        alert("JS: Boş alan bırakmayınız!");
        return false;
    }
    if (!emailPattern.test(email)) {
        alert("JS: Email formatı hatalı!");
        return false;
    }
    if (!telPattern.test(tel)) {
        alert("JS: Telefon sadece rakam olmalı!");
        return false;
    }

    alert("JS: Onaylandı! Bilgileriniz gönderiliyor...");
    window.location.href = `sonuc.html?ad=${ad}&soyad=${soyad}&email=${email}&tel=${tel}&konu=${konu}&mesaj=${mesaj}&metot=JavaScript`;
}
    alert("JavaScript Mesajı: Kontrol başarılı! Form gönderilmeye hazır.");
    return true;
}

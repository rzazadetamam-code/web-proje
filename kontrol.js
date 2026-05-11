// İLETİŞİM JS DENETLEME
function jsDenetleVeGonder() {
    var ad = document.getElementById("ad").value.trim();
    var soyad = document.getElementById("soyad").value.trim();
    var email = document.getElementById("email").value.trim();
    var tel = document.getElementById("tel").value.trim();
    var konu = document.getElementById("konu").value;
    var mesaj = document.getElementById("mesaj").value.trim();

    if (ad === "" || soyad === "" || email === "" || tel === "" || konu === "" || mesaj === "") {
        alert("JS: Lütfen formu eksiksiz doldurunuz!");
        return false;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("JS: Geçerli bir e-mail giriniz!");
        return false;
    }

    if (isNaN(tel) || tel === "") {
        alert("JS: Telefon sadece rakam olmalıdır!");
        return false;
    }

    alert("JS: Denetleme başarılı! Gönderiliyor...");
    window.location.href = `sonuc.html?ad=${ad}&soyad=${soyad}&email=${email}&tel=${tel}&konu=${konu}&mesaj=${mesaj}&yontem=VanillaJS`;
}

// LOGIN KONTROLÜ (Əgər login səhifəsində də istifadə edirsənsə)
function loginKontrol() {
    var user = document.getElementById("username").value.trim();
    var pass = document.getElementById("password").value.trim();

    // Ödev kuralı: Kullanıcı adı mail, şifre numaran olmalı
    if (user === "g211210001@sakarya.edu.tr" && pass === "g211210001") {
        // Uğurlu giriş: İstifadəçi adını (mailin ön hissəsini) növbəti səhifəyə ötürürük
        var ogrenciNo = user.split('@')[0];
        window.location.href = "giris_basarili.html?no=" + ogrenciNo;
        return false; // Formun öz-özünə refresh olmasını maneə törədir
    } else {
        alert("Hatalı kullanıcı adı veya şifre!");
        return false;
    }
}

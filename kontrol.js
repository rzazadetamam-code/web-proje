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
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    if (user === "g211210001@sakarya.edu.tr" && pass === "g211210001") {
        window.location.href = "giris_basarili.html?user=" + user.split('@')[0];
        return false;
    } else {
        alert("Hatalı giriş!");
        return false;
    }
}

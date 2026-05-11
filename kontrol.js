// 1. GİRİŞ (LOGIN) KONTROLÜ
// Ödev kuralı: Kullanıcı adı = Mail, Şifre = Öğrenci No
function loginKontrol() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

 if (user === "b251210592@sakarya.edu.tr" && pass === "b251210592") {
        alert("Hoş geldiniz b251210592!");
        window.location.href = "index.html";
        return false;
    } else {
        alert("Hatalı kullanıcı adı (email) veya şifre!");
        return false;
    }
}

// 2. İLETİŞİM FORMU KONTROLÜ
function formuKontrolEt() {
    var ad = document.forms["iletisimFormu"]["ad"].value;
    var soyad = document.forms["iletisimFormu"]["soyad"].value;
    var email = document.forms["iletisimFormu"]["email"].value;
    var mesaj = document.forms["iletisimFormu"]["mesaj"].value;

    if (ad == "" || soyad == "" || email == "" || mesaj == "") {
        alert("Lütfen tüm alanları doldurunuz!");
        return false;
    }
    
    alert("Mesajınız başarıyla iletildi!");
    return true;
}

// 1. İletişim Formu Kontrolü
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

// 2. Login (Giriş) Kontrolü
function loginKontrol() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    // 'user' kismina kendi ogrenci numarani (mis: g211210001) yaz
   if (user === "g211210001" && pass === "123") {
        alert("Hoş geldiniz g211210001!");
        window.location.href = "index.html"; // Giriş uğurludursa ana səhifəyə göndərir
        return false; 
    } else {
        alert("Hatalı kullanıcı adı veya şifre!");
        return false;
    }
}

// ==========================================================
// 1. LOGIN (GİRİŞ) KONTROLÜ
// ==========================================================
function loginKontrol() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    // Ödev kuralı: Kullanıcı adı = Mail, Şifre = Öğrenci No
    // "g211210001" yazan yerleri kendi numaranla değiştirebilirsin
    if (user === "g211210001@sakarya.edu.tr" && pass === "g211210001") {
        // Hoş geldin mesajını yeni sayfaya gönderiyoruz
        window.location.href = "giris_basarili.html?user=" + user.split('@')[0];
        return false;
    } else {
        alert("Hatalı kullanıcı adı (email) veya şifre!");
        return false;
    }
}

// ==========================================================
// 2. İLETİŞİM FORMU (VANILLA JS) KONTROLÜ
// ==========================================================
function jsKontrolEt() {
    var ad = document.getElementById("ad").value;
    var soyad = document.getElementById("soyad").value;
    var email = document.getElementById("email").value;
    var tel = document.getElementById("tel").value;
    var konu = document.getElementById("konu").value;
    var mesaj = document.getElementById("mesaj").value;

    // Email ve Telefon formatı için kurallar (Regex)
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var telPattern = /^[0-9]+$/;

    // Boş alan kontrolü
    if (ad === "" || soyad === "" || email === "" || tel === "" || konu === "" || mesaj === "") {
        alert("JavaScript Mesajı: Lütfen formu eksiksiz doldurunuz!");
        return false;
    }

    // Email format kontrolü
    if (!emailPattern.test(email)) {
        alert("JavaScript Mesajı: Geçerli bir e-mail adresi giriniz!");
        return false;
    }

    // Telefon sadece rakam kontrolü
    if (!telPattern.test(tel)) {
        alert("JavaScript Mesajı: Telefon numarası sadece rakamlardan oluşmalıdır!");
        return false;
    }

    alert("JavaScript Mesajı: Kontrol başarılı! Form gönderilmeye hazır.");
    return true;
}

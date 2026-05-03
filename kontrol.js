document.getElementById('contactForm').addEventListener('submit', function(event) {
    var ad = document.getElementById('ad').value;
    var soyad = document.getElementById('soyad').value;
    var email = document.getElementById('email').value;
    var mesaj = document.getElementById('mesaj').value;

    if (ad === "" || soyad === "" || email === "" || mesaj === "") {
        alert("Lütfen tüm alanları doldurunuz!");
        event.preventDefault(); // Formun gönderilmesini engeller
    } else if (!email.includes("@")) {
        alert("Lütfen geçerli bir e-posta adresi giriniz!");
        event.preventDefault();
    } else {
        alert("Mesajınız başarıyla hazırlandı!");
    }
});

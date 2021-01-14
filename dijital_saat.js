var tabanZaman = document.getElementById("taban_zaman");
var tabanTarih = document.getElementById("taban_tarih");
function zamanBicimi(gelenZaman){
    var metneDonustur = gelenZaman.toString();
    if(metneDonustur.length === 1){
        return "0" + metneDonustur;
    }else{
        return metneDonustur;
    }
}
function tarihBicimi(gelenTarih){
    var metinYap = gelenTarih.toString();
    if(metinYap.length === 1){
        return "0" + metinYap;
    }else if(metinYap.length === 4){
        return metinYap;
    }
}
function zamaniGuncelle(){
    var tarih = new Date();
    var yil = tarih.getFullYear();
    var ay = tarih.getMonth();
    var gun = tarih.getDate();
    var saat = tarih.getHours();
    var dakika = tarih.getMinutes();
    var saniye = tarih.getSeconds();
    tabanZaman.textContent = zamanBicimi(saat) + "." + zamanBicimi(dakika) + "." + zamanBicimi(saniye);
    tabanTarih.textContent = tarihBicimi(gun) + "." + tarihBicimi(ay + 1) + "." + tarihBicimi(yil);
}
setInterval(zamaniGuncelle, 1000);

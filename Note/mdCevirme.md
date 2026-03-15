Bootstrap 5 Buton Özellikleri

Bootstrap 5, web projelerinde hızlı ve şık butonlar oluşturmayı sağlayan hazır sınıflar sunar. Bu konu anlatımında butonların temel özelliklerini, türlerini ve stillerini öğreneceğiz.

1. Temel Buton Kullanımı

Bootstrap'te bir buton oluşturmak için button veya a etiketini kullanabiliriz ve btn sınıfını eklememiz gerekir:

<button type="button" class="btn btn-primary">Primary Buton</button>

<a href="#" class="btn btn-secondary">Secondary Buton</a>

Önemli Sınıflar:

btn → Tüm Bootstrap butonlarının temel sınıfı

btn-primary → Mavi renkli ana buton

btn-secondary → Gri renkli ikincil buton

btn-success → Yeşil buton (başarı)

btn-danger → Kırmızı buton (uyarı/hata)

btn-warning → Sarı buton (dikkat)

btn-info → Açık mavi buton (bilgi)

btn-light → Açık renkli buton

btn-dark → Koyu renkli buton

btn-link → Link görünümlü buton

1. Buton Boyutları

Butonların farklı boyutlarda görünmesini sağlayabilirsiniz:

<button class="btn btn-primary btn-lg">Büyük Buton</button>

<button class="btn btn-primary btn-sm">Küçük Buton</button>

btn-lg → Büyük buton

btn-sm → Küçük buton

Varsayılan boyut için ekstra sınıf gerekmez

1. Buton Durumları

Butonların aktif veya devre dışı (disabled) olmasını sağlayabilirsiniz:

<button class="btn btn-primary" disabled>Devre Dışı</button>

<button class="btn btn-primary active">Aktif</button>

disabled → Tıklanamaz buton

active → Basılı görünümlü buton

1. Outline (Kontur) Butonlar

Outline butonlar, sadece kenar çizgisine sahip butonlardır ve arka planları şeffaftır:

<button class="btn btn-outline-primary">Primary Outline</button>

<button class="btn btn-outline-success">Success Outline</button>

btn-outline-\* sınıflarıyla kullanılır

Aynı renk seçenekleri (primary, secondary, danger vb.) geçerlidir

1. Buton Grupları

Birden fazla butonu yan yana gruplamak için btn-group sınıfını kullanabilirsiniz:

<div class="btn-group" role="group">

<button class="btn btn-primary">Sol</button>

<button class="btn btn-primary">Orta</button>

<button class="btn btn-primary">Sağ</button>

</div>

btn-group → Butonları yatay gruplar

role="group" → Erişilebilirlik (opsiyonel ama önerilir)

1. Toggle ve Checkbox Butonlar

Bootstrap, butonları toggle (aç/kapa) olarak kullanmaya uygundur:

<button class="btn btn-primary" data-bs-toggle="button" aria-pressed="false">

Toggle Buton

</button>

data-bs-toggle="button" → Butonun aktif/pasif olmasını sağlar

aria-pressed → Erişilebilirlik için kullanılır

1. Özet Tablo: Buton Sınıfları

Tür	Sınıf	Renk

Ana	btn-primary	Mavi

İkincil	btn-secondary	Gri

Başarı	btn-success	Yeşil

Tehlike	btn-danger	Kırmızı

Uyarı	btn-warning	Sarı

Bilgi	btn-info	Açık mavi

Koyu	btn-dark	Siyah / Koyu

Açık	btn-light	Beyaz / Açık

Link	btn-link	Bağlantı stili

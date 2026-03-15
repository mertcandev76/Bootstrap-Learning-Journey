# Başlık: Bootstrap 5 Resim ve Layout Örnekleri

Bootstrap 5 ile resimleri duyarlı hale getirme, kenarları yuvarlama, thumbnail yapma, ortalama, float ve figure kullanımı:

## 1. Duyarlı Resim (Responsive Image)

<img src="https://via.placeholder.com/400x200" class="img-fluid" alt="Duyarlı Resim">

_`img-fluid` sınıfı resmin ekran boyutuna göre otomatik küçülmesini sağlar._

## 2. Thumbnail Resim ve Kenarları Yuvarlama

<img src="https://via.placeholder.com/200" class="img-thumbnail rounded" alt="Thumbnail ve Yuvarlak Kenar">

`img-thumbnail` kenarlıklı küçük resim oluşturur, `rounded` kenarları yuvarlar.

## 3. Resmi Ortala

<div class="text-center">
    <img src="https://via.placeholder.com/250" class="img-fluid rounded" alt="Ortalanmış Resim">
</div>

`text-center` sınıfı ile resmi ortalayabilirsiniz.

## 4. Float Sınıfları

<img src="https://via.placeholder.com/150" class="float-start me-3 mb-3" alt="Sol Float">
<img src="https://via.placeholder.com/150" class="float-end ms-3 mb-3" alt="Sağ Float">

`float-start` sol, `float-end` sağa yaslar. `me-3` ve `ms-3` margin ekler.

## 5. Figure Kullanımı

<figure class="figure">
  <img src="https://via.placeholder.com/300" class="figure-img img-fluid rounded" alt="Figure Resim">
  <figcaption class="figure-caption text-center">Bu bir figure açıklamasıdır.</figcaption>
</figure>

`figure` ve `figcaption` ile resim + açıklama kullanabilirsiniz.

## 6. Hero / Jumbotron (Bootstrap 5)

<div class="p-5 mb-4 bg-light rounded-3">
  <div class="container-fluid py-5">
    <h1 class="display-5 fw-bold">Bootstrap 5 Hero Başlık</h1>
    <p class="col-md-8 fs-4">Bootstrap 5'te jumbotron yerine bu hero bölümü kullanılır.</p>
    <button class="btn btn-primary btn-lg" type="button">Daha Fazla Bilgi</button>
  </div>
</div>

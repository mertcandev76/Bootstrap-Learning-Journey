# Bootstrap Flexbox Yatay Hizalama

## justify-content Kullanımı

`justify-content` flexbox'ta **yatay hizalama** yapmak için kullanılır.

Bootstrap'ta `row` zaten **flex container** olduğu için `justify-content` sınıfları doğrudan kullanılabilir.

---

# Önemli Not

⚠️ **Boşluk yoksa hizalama olmaz.**

Çünkü `justify-content` sadece **kalan boş alanı dağıtır**.

Eğer kolonlar satırı tamamen dolduruyorsa hizalama değişmez.

---

# 1. Durum — Boşluk Yoksa justify-content Çalışmaz

Toplam kolon genişliği **12 ise** satır tamamen doludur.

Bu durumda `justify-content` etkisizdir.

Örnek:

```html
<div class="row">
  <div class="col-md-4">Resim</div>

  <div class="col-md-8">İçerik</div>
</div>
```

Burada:

```
4 + 8 = 12
```

Satır tamamen dolduğu için:

```
justify-content-center
justify-content-end
justify-content-between
```

gibi sınıflar **çalışmaz**.

---

# 2. Durum — Boşluk Varsa justify-content Çalışır

Kolonların toplamı **12’den küçükse** satırda boşluk oluşur.

Bu durumda `justify-content` kullanılabilir.

Örnek:

```html
<div class="row justify-content-center">
  <div class="col-md-3">Resim</div>

  <div class="col-md-8">İçerik</div>
</div>
```

Burada:

```
3 + 8 = 11
```

Satırda **1 kolonluk boşluk** vardır.

Bu yüzden `justify-content` çalışır.

---

# justify-content Sınıfları

| Class                   | Açıklama                      |
| ----------------------- | ----------------------------- |
| justify-content-start   | Elemanları sola hizalar       |
| justify-content-center  | Ortalar                       |
| justify-content-end     | Sağa hizalar                  |
| justify-content-between | İlk ve sonu kenara yapıştırır |
| justify-content-around  | Etrafına eşit boşluk verir    |
| justify-content-evenly  | Tüm boşlukları eşit dağıtır   |

Örnek:

```html
<div class="row justify-content-between">
  <div class="col-md-3">Item</div>
  <div class="col-md-3">Item</div>
</div>
```

---

# Gerçek Projede Responsive justify-content Kullanımı

Bootstrap'ta hizalama **responsive yapılabilir.**

Breakpoint'ler:

| Class                 | Açıklama       |
| --------------------- | -------------- |
| justify-content-sm-\* | 576px ve üstü  |
| justify-content-md-\* | 768px ve üstü  |
| justify-content-lg-\* | 992px ve üstü  |
| justify-content-xl-\* | 1200px ve üstü |

Örnek:

```html
<div class="row justify-content-center justify-content-lg-between">
  <div class="col-md-3">Item</div>
  <div class="col-md-3">Item</div>
</div>
```

Davranış:

Mobil:

```
Ortalanır
```

Desktop:

```
Kenarlara yayılır
```

---

# Farklı Satır Açmadan Sütunu Aşağıya İndirme

## w-100 Kullanımı

Bazı durumlarda **yeni bir row açmadan alt satıra geçmek** isteyebilirsin.

Bunun için `w-100` kullanılır.

`w-100` elementi **%100 genişlik** yapar ve satırı kırar.

Örnek:

```html
<div class="row">
  <div class="col-md-4">Kolon 1</div>
  <div class="col-md-4">Kolon 2</div>

  <div class="w-100"></div>

  <div class="col-md-4">Kolon 3</div>
</div>
```

Görünüm:

```
Kolon1  Kolon2

Kolon3
```

Bu teknik genelde:

- kart layoutlarında
- responsive tasarımlarda
- grid düzenlerinde

kullanılır.

---

# Özet

| Konu                       | Açıklama               |
| -------------------------- | ---------------------- |
| justify-content            | Flexbox yatay hizalama |
| Boşluk yoksa               | Hizalama çalışmaz      |
| Boşluk varsa               | Hizalama çalışır       |
| Responsive justify-content | Ekrana göre hizalama   |
| w-100                      | Yeni satıra geçirme    |

---

# İpucu

Bootstrap Grid sisteminde:

```
row → flex container
col → flex item
```

Bu yüzden `justify-content` **row elementine uygulanır.**

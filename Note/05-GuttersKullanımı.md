# Bootstrap 5: Gutters (Oluklar) Konu Anlatımı

Bootstrap 5'te **Gutters**, sütunlar (columns) arasındaki boşluğu ifade eder. Izgara (grid) sisteminin daha düzenli görünmesini sağlar.

## 1. Temel Mantık

Oluklar, `.row` sınıfına uygulanan negatif margin'ler ve sütunlardaki (`.col-*`) iç boşluklar (padding) ile oluşturulur.

## 2. Yatay Oluklar (.gx-\*)

Yatay boşluğu ayarlamak için kullanılır. `0` ile `5` arasında değer alır.

- **Sınıf:** `.gx-0`, `.gx-1`, ..., `.gx-5`
- **Örnek:** `<div class="row gx-5">...</div>`

## 3. Dikey Oluklar (.gy-\*)

Satırlar arasındaki dikey boşluğu ayarlamak için kullanılır.

- **Sınıf:** `.gy-0`, `.gy-1`, ..., `.gy-5`
- **Örnek:** `<div class="row gy-3">...</div>`

## 4. Tüm Yönlerde Oluklar (.g-\*)

Hem yatay hem de dikey boşluğu aynı anda vermek için kullanılır.

- **Sınıf:** `.g-0`, `.g-2`, ..., `.g-5`
- **Örnek:** `<div class="row g-4">...</div>`

## 5. Responsive (Duyarlı) Oluklar

Ekran boyutuna göre farklı boşluklar tanımlayabilirsiniz.

- `.g-sm-*`, `.g-md-*`, `.g-lg-*` gibi kırılma noktaları (breakpoints) kullanılabilir.
- **Örnek:** `<div class="row g-2 g-lg-5">` (Küçük ekranlarda 2, büyük ekranlarda 5 birim boşluk).

## 6. Olukları Tamamen Kaldırma (.g-0)

Sütunlar arasındaki tüm boşlukları sıfırlamak için kullanılır.

- **Sınıf:** `.g-0`
- **Örnek:** `<div class="row g-0">...</div>`

---

### Örnek Kod Yapısı

```html
<div class="container">
  <div class="row gx-5 gy-2">
    <div class="col-6">
      <div class="p-3 border bg-light">Sütun 1</div>
    </div>
    <div class="col-6">
      <div class="p-3 border bg-light">Sütun 2</div>
    </div>
  </div>
</div>
```

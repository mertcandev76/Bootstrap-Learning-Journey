# Bootstrap `invisible` ve `d-none` Farkı

Bootstrap’ta bir elementi gizlemek için iki farklı yöntem vardır:

- `invisible`
- `d-none`

Bu iki sınıf benzer görünse de **davranışları farklıdır.**

---

# 1. invisible

`invisible` sınıfı elementi **görünmez yapar fakat sayfada yer kaplamaya devam eder.**

Yani:

- element görünmez
- layout içindeki boşluk korunur

Örnek:

```html
<div class="invisible">Bu element görünmez ama yer kaplar</div>
```

---

# 2. d-none

`d-none` sınıfı elementi **tamamen gizler ve layouttan kaldırır.**

Yani:

- element görünmez
- sayfada hiçbir yer kaplamaz

Örnek:

```html
<div class="d-none">Bu element tamamen gizlenir</div>
```

---

# Görsel Fark

| Özellik               | invisible    | d-none     |
| --------------------- | ------------ | ---------- |
| Görünür mü            | ❌           | ❌         |
| Sayfada yer kaplar mı | ✅           | ❌         |
| Layout etkisi         | Boşluk kalır | Boşluk yok |

---

# Kullanım Tavsiyesi

`invisible` genelde:

- animasyon
- hover efektleri
- geçici gizleme

için kullanılır.

`d-none` ise:

- responsive gizleme
- element kaldırma
- conditional display

durumlarında kullanılır.

# Bootstrap Nesneleri Gizleme ve Açma (Display Utilities)

Bootstrap, elementleri **gizlemek veya görünür yapmak** için `display` utility sınıfları sağlar.

Bu sınıflar sayesinde **CSS yazmadan** elementlerin görünürlüğünü kontrol edebiliriz.

---

# 1. Display Sınıfları

Bootstrap’ta elementlerin görünürlüğünü kontrol etmek için `d-*` sınıfları kullanılır.

Genel kullanım:

```
d-{value}
```

| Class          | Açıklama                |
| -------------- | ----------------------- |
| d-none         | Elementi tamamen gizler |
| d-block        | Block element yapar     |
| d-inline       | Inline element yapar    |
| d-inline-block | Inline-block yapar      |
| d-flex         | Flex container yapar    |
| d-grid         | Grid container yapar    |

---

# 2. Elementi Gizleme

Bir elementi tamamen gizlemek için:

```html
<div class="d-none">Bu element görünmez</div>
```

`d-none` → element sayfada **hiç görünmez**.

---

# 3. Elementi Tekrar Görünür Yapma

```html
<div class="d-block">Bu element görünür</div>
```

Örnek:

```html
<div class="d-none d-block">Bu element tekrar görünür</div>
```

---

# 4. Responsive Gizleme ve Gösterme

Bootstrap’ta elementleri **ekran boyutuna göre gizlemek veya göstermek** mümkündür.

Genel kullanım:

```
d-{breakpoint}-{value}
```

---

# 5. Bootstrap Breakpointleri

| Breakpoint | Ekran           |
| ---------- | --------------- |
| sm         | küçük cihaz     |
| md         | tablet          |
| lg         | laptop          |
| xl         | büyük ekran     |
| xxl        | çok büyük ekran |

---

# 6. Responsive Gizleme

Örnek:

```html
<div class="d-md-none">Tablet ve büyük ekranlarda gizlenir</div>
```

Açıklama:

| Ekran   | Durum   |
| ------- | ------- |
| mobile  | görünür |
| tablet  | gizli   |
| desktop | gizli   |

---

# 7. Responsive Gösterme

```html
<div class="d-none d-md-block">Sadece tablet ve büyük ekranlarda görünür</div>
```

Açıklama:

| Ekran   | Durum   |
| ------- | ------- |
| mobile  | gizli   |
| tablet  | görünür |
| desktop | görünür |

---

# 8. Sadece Mobilde Gösterme

```html
<div class="d-block d-md-none">Sadece mobilde görünür</div>
```

---

# 9. Sadece Desktopta Gösterme

```html
<div class="d-none d-lg-block">Sadece büyük ekranlarda görünür</div>
```

---

# 10. Birden Fazla Responsive Kullanım

```html
<div class="d-none d-sm-block d-lg-none">
  Sadece küçük ve orta ekranlarda görünür
</div>
```

Açıklama:

| Ekran  | Durum   |
| ------ | ------- |
| mobile | gizli   |
| small  | görünür |
| medium | görünür |
| large  | gizli   |

---

# 11. Responsive Display Değerleri

| Class       | Açıklama             |
| ----------- | -------------------- |
| d-md-block  | md ve üstünde block  |
| d-lg-flex   | lg ve üstünde flex   |
| d-sm-inline | sm ve üstünde inline |
| d-xl-grid   | xl ve üstünde grid   |

---

# 12. Gerçek Proje Örneği

Mobilde menü gizleme:

```html
<div class="d-none d-md-block">Desktop Menü</div>

<div class="d-block d-md-none">Mobil Menü</div>
```

---

# 13. Navbar Kullanım Örneği

```html
<div class="d-flex">
  <div class="me-auto">Logo</div>

  <div class="d-none d-md-flex">Menü</div>
</div>
```

---

# Özet

| Sınıf                  | Açıklama           |
| ---------------------- | ------------------ |
| d-none                 | gizleme            |
| d-block                | görünür yapma      |
| d-flex                 | flex container     |
| d-grid                 | grid container     |
| d-{breakpoint}-{value} | responsive display |

---

# İpucu

Bootstrap’ta gizleme ve gösterme sınıfları özellikle şu yerlerde kullanılır:

- navbar menüler
- mobil tasarımlar
- sidebar
- responsive layout
- farklı cihazlar için farklı içerik

Bu sınıflar sayesinde **responsive tasarım çok kolay hale gelir.**

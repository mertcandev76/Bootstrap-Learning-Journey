# Bootstrap Icon Kullanımı

Bootstrap projelerinde ikon kullanmak için genellikle iki popüler kütüphane kullanılır:

- **Bootstrap Icons**
- **Font Awesome**

Bu ikonları kullanmadan önce projeye **Bootstrap CSS ve icon kütüphanelerini eklemek gerekir.**

---

# 1. Bootstrap Kurulumu

Bootstrap projeye iki şekilde eklenebilir:

- **Local (bootstrap.min.css dosyası indirerek)**
- **CDN kullanarak**

---

# 2. Local Bootstrap Kullanımı

Bootstrap dosyası projeye indirildikten sonra `css` klasörüne eklenir.

Örnek proje yapısı:

```
project
 ├── css
 │    └── bootstrap.min.css
 ├── js
 ├── index.html
```

HTML dosyasında şu şekilde çağrılır:

```html
<link rel="stylesheet" href="css/bootstrap.min.css" />
```

Bu yöntem:

- internet bağlantısı olmadan çalışır
- daha kontrollü projelerde kullanılır

---

# 3. Bootstrap CDN Kullanımı

Bootstrap'ı indirmeden direkt internet üzerinden kullanmak için CDN kullanılabilir.

```html
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
  rel="stylesheet"
/>
```

Avantajları:

- hızlı kurulum
- dosya indirmeye gerek yok

---

# 4. Bootstrap Icons Kurulumu

Bootstrap'ın kendi icon kütüphanesidir.

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
/>
```

Resmi site:

```
https://icons.getbootstrap.com
```

---

# 5. Font Awesome Kurulumu

Font Awesome daha geniş bir icon kütüphanesine sahiptir.

```html
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
/>
```

Resmi site:

```
https://fontawesome.com/icons
```

---

# 6. Gerçek Proje Head Yapısı

Birçok projede `<head>` bölümü şu şekilde olur:

```html
<head>
  <meta charset="UTF-8" />

  <title>Bootstrap Icons</title>

  <link rel="stylesheet" href="css/bootstrap.min.css" />

  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
  />

  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
  />
</head>
```

Bu şekilde projede:

- Bootstrap CSS
- Bootstrap Icons
- Font Awesome

birlikte kullanılabilir.

---

# 7. Bootstrap Icons Kullanımı

Bootstrap Icons `bi` sınıfı ile kullanılır.

```html
<i class="bi bi-house"></i>
<i class="bi bi-person"></i>
<i class="bi bi-heart"></i>
```

---

# 8. Font Awesome Icon Kullanımı

Font Awesome ikonları `fa` sınıfları ile kullanılır.

```html
<i class="fa-solid fa-house"></i>
<i class="fa-solid fa-user"></i>
<i class="fa-solid fa-heart"></i>
```

---

# 9. Buton İçinde Icon Kullanımı

Iconlar genellikle butonlarla birlikte kullanılır.

```html
<button class="btn btn-primary">
  <i class="bi bi-download"></i>
  İndir
</button>

<button class="btn btn-danger">
  <i class="fa-solid fa-trash"></i>
  Sil
</button>
```

---

# 10. Icon Boyutu ve Renk

Bootstrap utility classları kullanılabilir.

```html
<i class="bi bi-heart fs-1 text-danger"></i>

<i class="fa-solid fa-heart fs-1 text-danger"></i>
```

---

# Özet

| Kütüphane       | Kullanım      |
| --------------- | ------------- |
| Bootstrap       | CSS framework |
| Bootstrap Icons | bi class      |
| Font Awesome    | fa class      |
| fs-\*           | icon boyutu   |
| text-\*         | icon rengi    |
| me-\*           | icon boşluğu  |

---

# İpucu

Bootstrap Icons:

- Bootstrap ile uyumlu
- daha hafif

Font Awesome:

- çok daha fazla icon içerir

Bu yüzden birçok projede **iki icon kütüphanesi birlikte kullanılır.**

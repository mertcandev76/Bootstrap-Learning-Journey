# Bootstrap 5 Yararlı Araçlar 2 (Utilities)

Bootstrap, CSS yazmadan hızlı tasarım yapabilmek için birçok **utility class** sağlar.
Bu bölümde genişlik, yükseklik, viewport boyutları ve bazı yararlı yardımcı sınıfları inceleyeceğiz.

---

# 1. Genişlik (Width) Sınıfları

Bootstrap element genişliğini ayarlamak için `w-*` sınıflarını sağlar.

| Class  | Açıklama          |
| ------ | ----------------- |
| w-25   | %25 genişlik      |
| w-50   | %50 genişlik      |
| w-75   | %75 genişlik      |
| w-100  | %100 genişlik     |
| w-auto | otomatik genişlik |

Örnek:

```html
<div class="w-25 bg-primary text-white p-2">25%</div>
<div class="w-50 bg-success text-white p-2">50%</div>
<div class="w-75 bg-danger text-white p-2">75%</div>
<div class="w-100 bg-dark text-white p-2">100%</div>
```

---

# 2. Yükseklik (Height) Sınıfları

Element yüksekliğini ayarlamak için `h-*` sınıfları kullanılır.

| Class  | Açıklama           |
| ------ | ------------------ |
| h-25   | %25 yükseklik      |
| h-50   | %50 yükseklik      |
| h-75   | %75 yükseklik      |
| h-100  | %100 yükseklik     |
| h-auto | otomatik yükseklik |

Örnek:

```html
<div style="height:200px">
  <div class="h-25 bg-primary text-white">25%</div>
  <div class="h-50 bg-success text-white">50%</div>
</div>
```

> Not: Height sınıfları çalışabilmesi için parent elementin yüksekliği olmalıdır.

---

# 3. Viewport Genişlik ve Yükseklik

Viewport ekranın görünen alanıdır.

Bootstrap viewport utility sınıfları sağlar.

| Class      | Açıklama                 |
| ---------- | ------------------------ |
| vw-100     | ekran genişliğinin %100  |
| vh-100     | ekran yüksekliğinin %100 |
| min-vw-100 | minimum genişlik %100    |
| min-vh-100 | minimum yükseklik %100   |

Örnek:

```html
<div class="vh-100 bg-primary text-white">Tam ekran yükseklik</div>
```

---

# 4. Inline Elementlerde Dikey Hizalama

Inline veya inline-block elementleri hizalamak için `align-*` sınıfları kullanılır.

| Class             | Açıklama              |
| ----------------- | --------------------- |
| align-baseline    | baseline hizalama     |
| align-top         | üst hizalama          |
| align-middle      | orta hizalama         |
| align-bottom      | alt hizalama          |
| align-text-top    | metin üstüne hizalama |
| align-text-bottom | metin altına hizalama |

Örnek:

```html
<img src="img.jpg" class="align-top" />
<img src="img.jpg" class="align-middle" />
<img src="img.jpg" class="align-bottom" />
```

---

# 5. Link Renklendirme

Bootstrap linkler için `link-*` renk sınıfları sağlar.

| Class        | Açıklama  |
| ------------ | --------- |
| link-primary | mavi      |
| link-success | yeşil     |
| link-danger  | kırmızı   |
| link-warning | sarı      |
| link-info    | açık mavi |
| link-dark    | koyu      |

Örnek:

```html
<a href="#" class="link-primary">Primary link</a>
<a href="#" class="link-danger">Danger link</a>
```

---

# 6. Metin Kesme (Text Truncate)

Uzun metinleri kesmek için `text-truncate` kullanılır.

Bu sınıf:

- metni keser
- sonuna `...` ekler

Örnek:

```html
<div class="text-truncate" style="max-width:200px;">
  Bu çok uzun bir metindir ve container içine sığmaz.
</div>
```

---

# 7. Vertical Rule

Bootstrap'ta dikey çizgi oluşturmak için `vr` sınıfı kullanılır.

Örnek:

```html
<div class="d-flex">
  <div>Menü</div>

  <div class="vr mx-3"></div>

  <div>İçerik</div>
</div>
```

`vr` → vertical rule (dikey çizgi).

---

# 8. Videoları Duyarlı (Responsive) Hale Getirme

Bootstrap videoları responsive yapmak için `ratio` sınıfları sağlar.

| Class      | Oran         |
| ---------- | ------------ |
| ratio-1x1  | kare         |
| ratio-4x3  | klasik video |
| ratio-16x9 | widescreen   |
| ratio-21x9 | ultra geniş  |

Örnek:

```html
<div class="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/example"></iframe>
</div>
```

Bu sayede video:

- responsive olur
- ekran boyutuna göre ölçeklenir.

---

# Özet

| Utility       | Amaç               |
| ------------- | ------------------ |
| w-\*          | genişlik           |
| h-\*          | yükseklik          |
| vw / vh       | viewport boyutları |
| align-\*      | dikey hizalama     |
| link-\*       | link renkleri      |
| text-truncate | metin kesme        |
| vr            | dikey çizgi        |
| ratio         | responsive video   |

---

# İpucu

Bu utility sınıfları özellikle şu yerlerde kullanılır:

- card tasarımları
- navbar layout
- responsive video
- sidebar düzeni
- içerik hizalama

Bootstrap utility sistemi sayesinde **çok az CSS ile güçlü tasarımlar yapılabilir.**

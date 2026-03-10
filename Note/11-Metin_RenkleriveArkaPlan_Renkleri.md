# Bootstrap Metin Renkleri ve Arka Plan Renkleri

Bootstrap, metin ve arka plan renklerini hızlı bir şekilde değiştirmek için birçok **utility class** sağlar.
Bu sınıflar sayesinde ekstra CSS yazmadan renkleri kolayca uygulayabiliriz.

---

# 1. Metin Renkleri (Text Colors)

Bootstrap'ta metin rengini değiştirmek için `text-*` sınıfları kullanılır.

Genel kullanım:

```html
<p class="text-primary">Bu metin mavi renktedir.</p>
<p class="text-success">Bu metin yeşil renktedir.</p>
<p class="text-danger">Bu metin kırmızı renktedir.</p>
```

---

## Metin Renk Sınıfları

| Class          | Açıklama         |
| -------------- | ---------------- |
| text-primary   | Ana renk (mavi)  |
| text-secondary | İkincil renk     |
| text-success   | Başarı mesajları |
| text-danger    | Hata mesajları   |
| text-warning   | Uyarı mesajları  |
| text-info      | Bilgi mesajları  |
| text-light     | Açık renk        |
| text-dark      | Koyu renk        |
| text-muted     | Soluk metin      |
| text-white     | Beyaz metin      |
| text-black     | Siyah metin      |

Örnek:

```html
<p class="text-primary">Primary renk</p>
<p class="text-danger">Danger renk</p>
<p class="text-success">Success renk</p>
<p class="text-warning">Warning renk</p>
```

---

# 2. text-opacity Kullanımı

Bootstrap metinlerin **saydamlığını (opacity)** ayarlamak için `text-opacity-*` sınıflarını sağlar.

| Class            | Opacity      |
| ---------------- | ------------ |
| text-opacity-100 | %100 görünür |
| text-opacity-75  | %75 görünür  |
| text-opacity-50  | %50 görünür  |
| text-opacity-25  | %25 görünür  |

Örnek:

```html
<p class="text-primary text-opacity-100">Tam görünür metin</p>
<p class="text-primary text-opacity-75">Biraz saydam metin</p>
<p class="text-primary text-opacity-50">Yarı saydam metin</p>
<p class="text-primary text-opacity-25">Çok saydam metin</p>
```

---

# 3. Arka Plan Renkleri

Bootstrap arka plan rengini değiştirmek için `bg-*` sınıflarını sağlar.

Genel kullanım:

```html
<p class="bg-primary text-white">Mavi arka plan</p>
<p class="bg-success text-white">Yeşil arka plan</p>
<p class="bg-danger text-white">Kırmızı arka plan</p>
```

---

## Arka Plan Renk Sınıfları

| Class          | Açıklama          |
| -------------- | ----------------- |
| bg-primary     | Mavi arka plan    |
| bg-secondary   | Gri arka plan     |
| bg-success     | Yeşil arka plan   |
| bg-danger      | Kırmızı arka plan |
| bg-warning     | Sarı arka plan    |
| bg-info        | Açık mavi         |
| bg-light       | Açık arka plan    |
| bg-dark        | Koyu arka plan    |
| bg-white       | Beyaz arka plan   |
| bg-transparent | Şeffaf arka plan  |

Örnek:

```html
<div class="bg-primary text-white p-3">Bootstrap arka plan rengi</div>
```

---

# 4. Bootstrap Renk Çeşitleri

Bootstrap birçok bileşende kullanılan **standart renk sistemine sahiptir.**

Temel renkler:

| Renk      | Kullanım     |
| --------- | ------------ |
| primary   | Ana renk     |
| secondary | İkincil renk |
| success   | Başarı       |
| danger    | Hata         |
| warning   | Uyarı        |
| info      | Bilgi        |
| light     | Açık         |
| dark      | Koyu         |

Bu renkler Bootstrap'ta birçok yerde kullanılır:

- Buttons
- Alerts
- Badges
- Cards
- Text
- Background

Örnek:

```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-danger">Danger</button>
```

---

# Özet

| Özellik                | Kullanım                     |
| ---------------------- | ---------------------------- |
| text-\*                | Metin rengi                  |
| text-opacity-\*        | Metin saydamlığı             |
| bg-\*                  | Arka plan rengi              |
| Bootstrap renk sistemi | primary, success, danger vb. |

---

# İpucu

Bootstrap renk sistemi **tüm bileşenlerde ortaktır.**

Örnek:

```html
text-primary bg-primary btn-primary alert-primary
```

Bu sayede tasarımda **renk tutarlılığı** sağlanır.

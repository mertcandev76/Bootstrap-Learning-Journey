# Bootstrap Kenarlık Oluşturma (Borders)

Bootstrap, elementlere kolayca kenarlık eklemek veya kaldırmak için **border utility classları** sağlar.

Bu sınıflar sayesinde ekstra CSS yazmadan hızlı bir şekilde kenarlık oluşturabiliriz.

---

# 1. Border Kullanımı

Bir elemente kenarlık eklemek için `border` sınıfı kullanılır.

```html id="3y7c2k"
<div class="border p-3">Bu elemente kenarlık eklendi.</div>
```

---

# 2. Belirli Kenarlara Border Ekleme

Bootstrap belirli yönlere border eklemeye de izin verir.

| Class         | Açıklama     |
| ------------- | ------------ |
| border-top    | Üst kenarlık |
| border-bottom | Alt kenarlık |
| border-start  | Sol kenarlık |
| border-end    | Sağ kenarlık |

Örnek:

```html id="g3m4sx"
<div class="border-top p-3">Üst kenarlık</div>
<div class="border-bottom p-3">Alt kenarlık</div>
<div class="border-start p-3">Sol kenarlık</div>
<div class="border-end p-3">Sağ kenarlık</div>
```

---

# 3. Border Kaldırma

Bootstrap kenarlıkları kaldırmak için de sınıflar sağlar.

| Class           | Açıklama                  |
| --------------- | ------------------------- |
| border-0        | Tüm kenarlıkları kaldırır |
| border-top-0    | Üst kenarlığı kaldırır    |
| border-bottom-0 | Alt kenarlığı kaldırır    |
| border-start-0  | Sol kenarlığı kaldırır    |
| border-end-0    | Sağ kenarlığı kaldırır    |

Örnek:

```html id="c6x8r4"
<div class="border border-0 p-3">Kenarlık kaldırıldı</div>
```

---

# 4. Border Renkleri

Bootstrap renk sınıfları kenarlıkta da kullanılabilir.

| Class          | Açıklama  |
| -------------- | --------- |
| border-primary | Mavi      |
| border-success | Yeşil     |
| border-danger  | Kırmızı   |
| border-warning | Sarı      |
| border-info    | Açık mavi |
| border-dark    | Koyu      |
| border-light   | Açık      |

Örnek:

```html id="d4k2fa"
<div class="border border-primary p-3">Primary border</div>
<div class="border border-success p-3">Success border</div>
<div class="border border-danger p-3">Danger border</div>
```

---

# 5. Border Kalınlığı

Bootstrap kenarlık kalınlığını değiştirmek için `border-*` sınıfları sağlar.

| Class    | Kalınlık   |
| -------- | ---------- |
| border-1 | İnce       |
| border-2 | Orta       |
| border-3 | Kalın      |
| border-4 | Daha kalın |
| border-5 | En kalın   |

Örnek:

```html id="7v1f3n"
<div class="border border-1 p-3">Border 1</div>
<div class="border border-3 p-3">Border 3</div>
<div class="border border-5 p-3">Border 5</div>
```

---

# 6. Rounded (Köşe Yuvarlama)

Bootstrap köşeleri yuvarlamak için `rounded` sınıflarını sağlar.

| Class          | Açıklama             |
| -------------- | -------------------- |
| rounded        | Köşeleri yuvarlar    |
| rounded-0      | Yuvarlamayı kaldırır |
| rounded-1      | Küçük yuvarlama      |
| rounded-2      | Orta                 |
| rounded-3      | Büyük                |
| rounded-circle | Tam daire            |
| rounded-pill   | Oval şekil           |

Örnek:

```html id="y6v1o3"
<div class="border rounded p-3">Yuvarlatılmış köşe</div>
```

---

# Rounded Circle Örneği

```html id="f9t8m4"
<img src="image.jpg" class="rounded-circle" />
```

Genellikle:

- profil fotoğraflarında
- avatar tasarımlarında

kullanılır.

---

# Rounded Pill Örneği

```html id="8k3d1w"
<button class="btn btn-primary rounded-pill">Button</button>
```

Bu stil genellikle modern buton tasarımlarında kullanılır.

---

# Özet

| Özellik                     | Kullanım         |
| --------------------------- | ---------------- |
| border                      | Kenarlık ekler   |
| border-top/bottom/start/end | Belirli kenarlık |
| border-\*                   | Border rengi     |
| border-1-5                  | Border kalınlığı |
| rounded                     | Köşe yuvarlama   |
| rounded-circle              | Daire            |
| rounded-pill                | Oval             |

---

# İpucu

Bootstrap'ta kenarlık ve köşe stilleri genellikle şu bileşenlerde kullanılır:

- Cards
- Images
- Buttons
- Avatars
- Alerts

Bu utility classlar sayesinde **çok hızlı UI tasarımı yapılabilir.**

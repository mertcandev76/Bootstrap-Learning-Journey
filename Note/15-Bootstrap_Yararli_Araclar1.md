# Bootstrap 5 Yararlı Araçlar (Utilities)

Bootstrap, CSS yazmadan hızlı tasarım yapabilmek için birçok **utility class** sağlar.
Bu sınıflar küçük ama güçlü araçlardır ve genellikle **layout, etkileşim ve görünüm kontrolü** için kullanılır.

---

# 1. Float Sınıfları

Float sınıfları elementleri **sağa veya sola hizalamak** için kullanılır.

| Class       | Açıklama                  |
| ----------- | ------------------------- |
| float-start | Elementi sola hizalar     |
| float-end   | Elementi sağa hizalar     |
| float-none  | Float özelliğini kaldırır |

Örnek:

```html id="bq8d2v"
<img src="image.jpg" class="float-start" />
<img src="image.jpg" class="float-end" />
```

Responsive kullanım:

```html id="7g0n2k"
<div class="float-md-end">Tablet ve üstünde sağa hizalanır</div>
```

---

# 2. Clearfix Kullanımı

Float kullanılan elementlerden sonra layout bozulmasını önlemek için **clearfix** kullanılır.

```html id="zq0h5b"
<div class="clearfix">
  <img src="image.jpg" class="float-start" />
  <img src="image.jpg" class="float-end" />
</div>
```

`clearfix` → container’ın yüksekliğini korur.

---

# 3. User Select Sınıfları

Metnin **seçilmesini kontrol eder**.

| Class            | Açıklama        |
| ---------------- | --------------- |
| user-select-all  | Tüm metni seçer |
| user-select-auto | Normal seçim    |
| user-select-none | Metin seçilemez |

Örnek:

```html id="p7a4wx"
<p class="user-select-none">Bu metin seçilemez</p>
```

---

# 4. Pointer Events Sınıfları

Elementlerin **mouse tıklamasına tepki verip vermeyeceğini** kontrol eder.

| Class   | Açıklama       |
| ------- | -------------- |
| pe-none | Tıklanamaz     |
| pe-auto | Normal tıklama |

Örnek:

```html id="8n9rsg"
<a href="#" class="pe-none">Tıklanamaz link</a>
```

---

# 5. Opacity Sınıfları

Elementlerin **saydamlığını** ayarlar.

| Class       | Opacity     |
| ----------- | ----------- |
| opacity-0   | Görünmez    |
| opacity-25  | %25 görünür |
| opacity-50  | %50 görünür |
| opacity-75  | %75 görünür |
| opacity-100 | Tam görünür |

Örnek:

```html id="p1st0o"
<div class="opacity-50">Yarı saydam element</div>
```

---

# 6. Shadow (Gölgelendirme)

Bootstrap elementlere gölge eklemek için **shadow sınıfları** sağlar.

| Class       | Açıklama     |
| ----------- | ------------ |
| shadow-none | Gölge yok    |
| shadow-sm   | Küçük gölge  |
| shadow      | Normal gölge |
| shadow-lg   | Büyük gölge  |

Örnek:

```html id="9z6v2f"
<div class="shadow p-3">Normal gölge</div>

<div class="shadow-lg p-3">Büyük gölge</div>
```

---

# 7. Overflow Sınıfları

Element taşmasını kontrol eder.

| Class            | Açıklama         |
| ---------------- | ---------------- |
| overflow-auto    | Gerekirse scroll |
| overflow-hidden  | Taşanı gizler    |
| overflow-visible | Taşanı gösterir  |
| overflow-scroll  | Her zaman scroll |

Örnek:

```html id="x7dk4y"
<div class="overflow-auto" style="height:100px;">Uzun içerik burada...</div>
```

---

# 8. Visibility Sınıfları

Element görünürlüğünü kontrol eder.

| Class     | Açıklama                |
| --------- | ----------------------- |
| visible   | Görünür                 |
| invisible | Görünmez ama yer kaplar |

Örnek:

```html id="p3n0jd"
<div class="invisible">Bu element görünmez ama boşluk bırakır</div>
```

---

# 9. Visually Hidden

Element **ekranda görünmez ama ekran okuyucular tarafından okunur**.

Accessibility (erişilebilirlik) için kullanılır.

```html id="4u6ql9"
<span class="visually-hidden"> Gizli açıklama </span>
```

Genellikle:

- screen reader
- accessibility
- form açıklamaları

için kullanılır.

---

# Özet

| Utility         | Amaç                  |
| --------------- | --------------------- |
| float           | sağa sola hizalama    |
| clearfix        | float layout düzeltme |
| user-select     | metin seçimi kontrolü |
| pointer-events  | tıklama kontrolü      |
| opacity         | saydamlık             |
| shadow          | gölge                 |
| overflow        | taşma kontrolü        |
| visibility      | görünürlük            |
| visually-hidden | erişilebilir gizleme  |

---

# İpucu

Bootstrap utility sınıfları sayesinde çoğu projede **ekstra CSS yazmadan hızlı UI oluşturulabilir**.

Bu sınıflar özellikle:

- kart tasarımları
- navbar
- form elemanları
- responsive layout

tasarımlarında sıkça kullanılır.

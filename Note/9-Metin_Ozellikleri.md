# Bootstrap Metin Özellikleri

Bootstrap, metinleri hizalamak, boyutlandırmak, kalınlaştırmak ve stil vermek için birçok **utility class** sağlar.

---

# 1. lead Kullanımı

`lead` sınıfı bir paragrafı **öne çıkarmak** için kullanılır.

Genellikle bir bölümün **giriş paragrafı** için tercih edilir.

```html
<p class="lead">
  This is a lead paragraph. It stands out from regular paragraphs.
</p>
```

Özellikleri:

- Yazı biraz daha büyük olur
- Daha okunabilir görünür

---

# 2. Metin Yatay Hizalama

Bootstrap metin hizalama için şu sınıfları sağlar:

| Class       | Açıklama           |
| ----------- | ------------------ |
| text-start  | Metni sola hizalar |
| text-center | Metni ortalar      |
| text-end    | Metni sağa hizalar |

```html
<p class="text-start">Sola hizalı</p>
<p class="text-center">Ortalanmış</p>
<p class="text-end">Sağa hizalı</p>
```

---

# 3. Responsive Metin Hizalama

Metin hizalama **ekran boyutuna göre değiştirilebilir.**

Breakpoint örnekleri:

| Class      | Açıklama       |
| ---------- | -------------- |
| text-sm-\* | 576px ve üstü  |
| text-md-\* | 768px ve üstü  |
| text-lg-\* | 992px ve üstü  |
| text-xl-\* | 1200px ve üstü |

Örnek:

```html
<p class="text-md-start text-lg-end">Lorem ipsum dolor sit amet.</p>
```

Davranış:

Mobil:

```
varsayılan hizalama
```

Tablet:

```
sola hizalanır
```

Desktop:

```
sağa hizalanır
```

---

# 4. Metin Satır Kırma

### text-nowrap

Metnin **alt satıra geçmesini engeller.**

```html
<p class="text-nowrap">
  Lorem ipsum dolor sit amet consectetur adipisicing elit.
</p>
```

---

### text-wrap

Metnin **normal şekilde satır kırmasını sağlar.**

```html
<p class="text-wrap">
  Lorem ipsum dolor sit amet consectetur adipisicing elit.
</p>
```

---

# 5. text-break Kullanımı

Uzun kelimelerin satırdan taşmasını engeller.

```html
<p class="text-break">Loremipsumdolorsitametconsecteturadipisicingelit</p>
```

Bu özellik özellikle:

- URL
- uzun değişken isimleri
- kod parçaları

için kullanılır.

---

# 6. text-decoration Kullanımı

Metne çizgi eklemek için kullanılır.

| Class                        | Açıklama         |
| ---------------------------- | ---------------- |
| text-decoration-underline    | Altı çizili      |
| text-decoration-line-through | Üzeri çizili     |
| text-decoration-overline     | Üstü çizili      |
| text-decoration-none         | Çizgiyi kaldırır |

```html
<p class="text-decoration-underline">Altı çizili</p>
<p class="text-decoration-line-through">Üzeri çizili</p>
<a href="#" class="text-decoration-none">Alt çizgi yok</a>
```

---

# 7. Harf Dönüştürme

Metnin harf biçimini değiştirmek için kullanılır.

| Class           | Açıklama       |
| --------------- | -------------- |
| text-uppercase  | Büyük harf     |
| text-lowercase  | Küçük harf     |
| text-capitalize | İlk harf büyük |

```html
<p class="text-uppercase">büyük harf</p>
<p class="text-lowercase">KÜÇÜK HARF</p>
<p class="text-capitalize">ilk harf büyük</p>
```

---

# 8. Font Size (Metin Boyutu)

Bootstrap metin boyutu için `fs` sınıfları sunar.

| Class | Boyut    |
| ----- | -------- |
| fs-1  | En büyük |
| fs-2  | Büyük    |
| fs-3  | Orta     |
| fs-4  | Normal   |
| fs-5  | Küçük    |
| fs-6  | En küçük |

```html
<p class="fs-1">Büyük metin</p>
<p class="fs-3">Orta metin</p>
<p class="fs-6">Küçük metin</p>
```

---

# 9. Font Weight (Metin Kalınlığı)

Metnin kalınlığını belirler.

| Class      | Açıklama   |
| ---------- | ---------- |
| fw-bold    | Kalın      |
| fw-bolder  | Daha kalın |
| fw-normal  | Normal     |
| fw-light   | İnce       |
| fw-lighter | Daha ince  |

```html
<p class="fw-bold">Kalın yazı</p>
<p class="fw-light">İnce yazı</p>
```

---

# 10. Line Height (Satır Yüksekliği)

Satırlar arasındaki mesafeyi belirler.

| Class   | Değer |
| ------- | ----- |
| lh-1    | 1     |
| lh-sm   | 1.25  |
| lh-base | 1.5   |
| lh-lg   | 2     |

```html
<p class="lh-1">Satır arası dar</p>
<p class="lh-base">Normal satır arası</p>
<p class="lh-lg">Geniş satır arası</p>
```

---

# 11. text-reset Kullanımı

Metnin **varsayılan stilini sıfırlar.**

```html
<p class="text-success">
  Lorem ipsum
  <a href="#" class="text-reset">link</a>
</p>
```

Burada link:

```
parent rengini kullanmaz
varsayılan renge döner
```

---

# 12. list-unstyled Kullanımı

Liste işaretlerini kaldırır.

```html
<ul class="list-unstyled">
  <li>Item</li>
  <li>Item</li>
</ul>
```

Sonuç:

```
• işaretleri görünmez
```

---

# 13. list-inline Kullanımı

Liste elemanlarını **yatay hale getirir.**

```html
<ul class="list-inline">
  <li class="list-inline-item">Item 1</li>
  <li class="list-inline-item">Item 2</li>
  <li class="list-inline-item">Item 3</li>
</ul>
```

Sonuç:

```
Item1  Item2  Item3
```

---

# Özet

| Özellik               | Amaç                        |
| --------------------- | --------------------------- |
| lead                  | Giriş paragrafı             |
| text-start/center/end | Metin hizalama              |
| text-nowrap           | Satır kırmayı engeller      |
| text-break            | Uzun kelime kırma           |
| text-decoration       | Metin çizgileri             |
| text-uppercase        | Büyük harf                  |
| fs-\*                 | Metin boyutu                |
| fw-\*                 | Yazı kalınlığı              |
| lh-\*                 | Satır aralığı               |
| list-unstyled         | Liste işaretlerini kaldırır |
| list-inline           | Listeyi yatay yapar         |

---

# İpucu

Bootstrap'ta metin özellikleri **Typography ve Utility class** kategorisine girer.

Bu özellikler sayesinde:

```
daha okunabilir metinler
daha düzenli içerik
daha profesyonel tasarım oluşturulabilir.
```

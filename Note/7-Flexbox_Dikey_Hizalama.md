# Bootstrap Flexbox Dikey Hizalama

Flexbox'ta **dikey hizalama** için genellikle şu sınıflar kullanılır:

- `align-content`
- `align-items`
- `align-self`

Bu özellikler **flex container içindeki elemanların dikey konumunu** belirler.

---

# 1. align-content Kullanımı

`align-content` **birden fazla satır oluştuğunda** satırların dikey hizalanmasını sağlar.

⚠️ **Çalışması için iki şart vardır:**

1. `flex-wrap` kullanılmalı
2. Container'a **yükseklik verilmelidir**

---

## align-content Değerleri

| Class                 | Açıklama                         |
| --------------------- | -------------------------------- |
| align-content-start   | Üste hizalar                     |
| align-content-center  | Ortalar                          |
| align-content-end     | Alta hizalar                     |
| align-content-between | Satırlar arasını açar            |
| align-content-around  | Satırların etrafına boşluk verir |
| align-content-stretch | Varsayılan değer                 |

---

# Yükseklik Yoksa align-content Çalışmaz

Eğer container'a **yükseklik verilmezse** hizalama görünmez.

Örnek:

```html
<div class="d-flex flex-wrap align-content-center bg-dark text-white">
  <div class="bg-warning p-2">Item 1</div>
  <div class="bg-info p-2">Item 2</div>
  <div class="bg-primary p-2">Item 3</div>
  <div class="bg-success p-2">Item 4</div>
  <div class="bg-danger p-2">Item 5</div>
</div>
```

Burada:

```text
yükseklik olmadığı için hizalama etkisi görülmez
```

---

# Yükseklik Verilirse align-content Çalışır

Container'a yükseklik verildiğinde hizalama aktif olur.

```html
<div
  class="d-flex flex-wrap align-content-center bg-dark text-white MyClassHeight"
>
  <div class="bg-warning p-2">Item 1</div>
  <div class="bg-info p-2">Item 2</div>
  <div class="bg-primary p-2">Item 3</div>
  <div class="bg-success p-2">Item 4</div>
  <div class="bg-danger p-2">Item 5</div>
</div>
```

Örnek CSS:

```css
.MyClassHeight {
  height: 200px;
}
```

---

# 2. align-items Kullanımı

`align-items` flex item'ların **aynı satır içindeki dikey hizalamasını** belirler.

---

## align-items Değerleri

| Class                | Açıklama                     |
| -------------------- | ---------------------------- |
| align-items-start    | Üste hizalar                 |
| align-items-center   | Ortalar                      |
| align-items-end      | Alta hizalar                 |
| align-items-baseline | Yazı taban çizgisine hizalar |
| align-items-stretch  | Varsayılan                   |

---

# Display Sınıflarıyla align-items Kullanımı

Bootstrap'ta farklı `display` sınıfları kullanarak hizalama farkını görebiliriz.

Örnek:

```html
<div class="d-flex align-items-start bg-dark text-white MyClassHeight">
  <div class="bg-danger p-2 display-2">Item 1</div>
  <div class="bg-info p-2 display-1">Item 2</div>
  <div class="bg-primary p-2 display-4">Item 3</div>
  <div class="bg-success p-2 display-3">Item 4</div>
</div>
```

---

# align-items-baseline Kullanımı

Bu değer elemanları **yazı taban çizgisine göre hizalar.**

```html
<div class="d-flex align-items-baseline bg-dark text-white MyClassHeight">
  <div class="bg-danger p-2 display-2">Item 1</div>
  <div class="bg-info p-2 display-1">Item 2</div>
  <div class="bg-primary p-2 display-4">Item 3</div>
  <div class="bg-success p-2 display-3">Item 4</div>
</div>
```

---

# Responsive align-items Kullanımı

Bootstrap'ta dikey hizalama **responsive yapılabilir.**

Breakpoint'ler:

| Class             | Açıklama       |
| ----------------- | -------------- |
| align-items-sm-\* | 576px ve üstü  |
| align-items-md-\* | 768px ve üstü  |
| align-items-lg-\* | 992px ve üstü  |
| align-items-xl-\* | 1200px ve üstü |

Örnek:

```html
<div class="d-flex align-items-start align-items-lg-center">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

Davranış:

Mobil:

```
üst hizalı
```

Desktop:

```
ortalanmış
```

---

# 3. align-self Kullanımı

`align-self` tek bir flex item'ın **dikey hizalamasını değiştirmek** için kullanılır.

---

## align-self Değerleri

| Class               | Açıklama          |
| ------------------- | ----------------- |
| align-self-start    | Üste hizalar      |
| align-self-center   | Ortalar           |
| align-self-end      | Alta hizalar      |
| align-self-baseline | Baseline hizalama |
| align-self-stretch  | Varsayılan        |

---

# Display Sınıflarıyla align-self Kullanımı

```html
<div class="d-flex bg-dark text-white MyClassHeight">
  <div class="bg-danger p-2 align-self-start">Item 1</div>

  <div class="bg-info p-2 align-self-center">Item 2</div>

  <div class="bg-primary p-2 align-self-end">Item 3</div>
</div>
```

Burada her eleman **farklı hizalanabilir.**

---

# Responsive align-self Kullanımı

`align-self` responsive olarak da kullanılabilir.

Örnek:

```html
<div class="d-flex bg-dark text-white MyClassHeight">
  <div class="bg-danger p-2 align-self-md-center">Item 1</div>

  <div class="bg-info p-2">Item 2</div>
</div>
```

Davranış:

- Mobil → normal hizalama
- Tablet ve üstü → ortalanır

---

# Özet

| Özellik       | Amaç                                  |
| ------------- | ------------------------------------- |
| align-content | çoklu satırların dikey hizalaması     |
| align-items   | aynı satırdaki elemanların hizalaması |
| align-self    | tek bir elemanın hizalaması           |

---

# Önemli Bilgi

Flexbox'ta:

```
d-flex → parent (container)
flex item → child element
```

Dikey hizalama özellikleri **genellikle parent elemente uygulanır.**

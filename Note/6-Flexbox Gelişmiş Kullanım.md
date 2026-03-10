# Bootstrap Flexbox Gelişmiş Kullanım

Bu bölümde Bootstrap Flexbox'ın daha gelişmiş özelliklerini inceleyeceğiz.

Her konunun **responsive kullanımı** da bulunmaktadır.

---

# 1. flex-fill Kullanımı

`flex-fill` bir flex item'ın **boş alanı doldurmasını sağlar.**

Parent element `d-flex` olmalıdır.

Örnek:

```html
<div class="d-flex">
  <div class="p-2 bg-info">Item 1</div>
  <div class="p-2 bg-danger flex-fill">Item 2</div>
  <div class="p-2 bg-warning">Item 3</div>
</div>
```

Sonuç:

- Ortadaki eleman **boş alanın tamamını kaplar.**

### Responsive Kullanım

```html
<div class="d-flex">
  <div class="p-2 bg-info">Item 1</div>
  <div class="p-2 bg-danger flex-md-fill">Item 2</div>
  <div class="p-2 bg-warning">Item 3</div>
</div>
```

Davranış:

- Mobil → normal genişlik
- Tablet ve üstü → boşluğu doldurur

---

# 2. flex-grow-1 Kullanımı

`flex-grow-1` elemanın **boş alanı büyüyerek doldurmasını sağlar.**

Örnek:

```html
<div class="d-flex">
  <div class="p-2 bg-info">Item 1</div>
  <div class="p-2 bg-danger flex-grow-1">Item 2</div>
  <div class="p-2 bg-warning">Item 3</div>
</div>
```

Sonuç:

- Ortadaki eleman diğerlerine göre **genişler.**

### Responsive Kullanım

```html
<div class="d-flex">
  <div class="p-2 bg-info">Item 1</div>
  <div class="p-2 bg-danger flex-lg-grow-1">Item 2</div>
  <div class="p-2 bg-warning">Item 3</div>
</div>
```

Davranış:

- Küçük ekran → normal
- Büyük ekran → genişler

---

# 3. flex-shrink-0 Kullanımı

`flex-shrink-0` elemanın **küçülmesini engeller.**

Normalde flex item'lar ekran küçüldüğünde daralabilir.

Örnek:

```html
<div class="d-flex">
  <div class="p-2 bg-info">Item 1</div>
  <div class="p-2 bg-danger flex-shrink-0">Item 2</div>
  <div class="p-2 bg-warning">Item 3</div>
</div>
```

Sonuç:

- Ortadaki eleman **küçülmez.**

### Responsive Kullanım

```html
<div class="d-flex">
  <div class="p-2 bg-info">Item 1</div>
  <div class="p-2 bg-danger flex-md-shrink-0">Item 2</div>
  <div class="p-2 bg-warning">Item 3</div>
</div>
```

---

# 4. ms-auto ve me-auto Kullanımı

`auto margin` kullanarak flex item'ları hizalayabiliriz.

| Class   | Açıklama                      |
| ------- | ----------------------------- |
| ms-auto | sola margin vererek sağa iter |
| me-auto | sağa margin vererek sola iter |

---

## ms-auto Kullanımı

```html
<div class="d-flex">
  <div class="p-2 bg-info">Item 1</div>
  <div class="p-2 bg-danger ms-auto">Item 2</div>
</div>
```

Sonuç:

```text
Item1                Item2
```

---

## me-auto Kullanımı

```html
<div class="d-flex">
  <div class="p-2 bg-info me-auto">Item 1</div>
  <div class="p-2 bg-danger">Item 2</div>
</div>
```

---

### Responsive Kullanım

```html
<div class="d-flex">
  <div class="p-2 bg-info">Item 1</div>
  <div class="p-2 bg-danger ms-lg-auto">Item 2</div>
</div>
```

---

# 5. order Kullanımı

`order` flex item'ların **görünme sırasını değiştirmek** için kullanılır.

HTML sırası değişmeden görünüm değişir.

Örnek:

```html
<div class="d-flex">
  <div class="p-2 bg-info order-3">Item 1</div>
  <div class="p-2 bg-danger order-1">Item 2</div>
  <div class="p-2 bg-warning order-2">Item 3</div>
</div>
```

Görünüm:

```text
Item2  Item3  Item1
```

---

### Responsive Kullanım

```html
<div class="d-flex">
  <div class="p-2 bg-info order-md-3">Item 1</div>
  <div class="p-2 bg-danger order-md-1">Item 2</div>
  <div class="p-2 bg-warning order-md-2">Item 3</div>
</div>
```

---

# 6. flex-wrap Kullanımı

Flex item'ların **satır kırmasını** kontrol eder.

---

## flex-nowrap

Elemanlar **tek satırda kalır.**

```html
<div class="d-flex flex-nowrap">
  <div class="p-2">Item</div>
  <div class="p-2">Item</div>
  <div class="p-2">Item</div>
</div>
```

---

## flex-wrap

Elemanlar **satır kırabilir.**

```html
<div class="d-flex flex-wrap">
  <div class="p-2">Item</div>
  <div class="p-2">Item</div>
  <div class="p-2">Item</div>
</div>
```

---

## flex-wrap-reverse

Satır kırılır ama **ters yönde dizilir.**

```html
<div class="d-flex flex-wrap-reverse">
  <div class="p-2">Item</div>
  <div class="p-2">Item</div>
  <div class="p-2">Item</div>
</div>
```

---

### Responsive Kullanım

```html
<div class="d-flex flex-lg-wrap">
  <div class="p-2">Item</div>
  <div class="p-2">Item</div>
  <div class="p-2">Item</div>
</div>
```

Davranış:

- Mobil → tek satır
- Desktop → satır kırılır

---

# Özet

| Özellik           | Amaç                       |
| ----------------- | -------------------------- |
| flex-fill         | boş alanı doldurur         |
| flex-grow-1       | elemanı büyütür            |
| flex-shrink-0     | küçülmeyi engeller         |
| ms-auto / me-auto | flex item hizalama         |
| order             | eleman sırasını değiştirir |
| flex-wrap         | satır kırma kontrolü       |

---

# Önemli Bilgi

Flex özelliklerinin çoğu:

```text
parent → d-flex
child → flex item
```

mantığıyla çalışır.

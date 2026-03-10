# Bootstrap Flexbox Notları

## 1. d-flex ve d-inline-flex Sınıfları Kullanımı

Bootstrap'ta flexbox kullanmak için `d-flex` ve `d-inline-flex` sınıfları kullanılır.

### d-flex

Bir elementi **flex container** yapar ve **block seviyesinde** davranır.

Özellikleri:

- İçindeki öğeleri **yatay hizalar**
- Satırı tamamen kaplar
- Alt satıra geçer

Örnek:

```html
<div class="d-flex">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

---

### d-inline-flex

Bir elementi **flex container** yapar fakat **inline seviyesinde** davranır.

Özellikleri:

- İçerik kadar yer kaplar
- Yanındaki elementlerle aynı satırda kalabilir

Örnek:

```html
<div class="d-inline-flex">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

---

## 2. d-flex ve d-inline-flex Olmadan İçerikteki div Etiketleri

Normalde `div` elementleri **block elementtir**.

Bu yüzden:

- Her biri **alt alta** gelir
- Yatay hizalama olmaz

Örnek:

```html
<div class="bg-dark">
  <div class="bg-info">Item 1</div>
  <div class="bg-danger">Item 2</div>
  <div class="bg-warning">Item 3</div>
</div>
```

Görünüm:

```
Item 1
Item 2
Item 3
```

---

## 3. d-flex Kullanıldığında İçerik

`d-flex` kullanıldığında elementler **flex item** olur ve **yatay dizilir**.

```html
<div class="d-flex bg-dark">
  <div class="bg-info">Item 1</div>
  <div class="bg-danger">Item 2</div>
  <div class="bg-warning">Item 3</div>
</div>
```

Görünüm:

```
Item1  Item2  Item3
```

---

# Flex Direction Kullanımı

Flexbox'ta elemanların **yönünü belirlemek** için kullanılır.

---

# 4. flex-row (Default)

Varsayılan flex yönüdür.

Elemanlar **soldan sağa** dizilir.

```html
<div class="d-flex flex-row">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

Görünüm:

```
1 2 3
```

---

# 5. flex-row-reverse

Elemanları **sağdan sola** doğru sıralar.

```html
<div class="d-flex flex-row-reverse">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

Görünüm:

```
3 2 1
```

---

# 6. Responsive flex-row ve flex-row-reverse

Bootstrap'ta responsive flex yönü verilebilir.

Breakpoint'ler:

| Class       | Açıklama       |
| ----------- | -------------- |
| flex-sm-row | 576px ve üstü  |
| flex-md-row | 768px ve üstü  |
| flex-lg-row | 992px ve üstü  |
| flex-xl-row | 1200px ve üstü |

Örnek:

```html
<div class="d-flex flex-column flex-md-row">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

Açıklama:

- Küçük ekran → **alt alta**
- Tablet ve üstü → **yan yana**

---

# 7. flex-column

Elemanları **dikey** dizmek için kullanılır.

```html
<div class="d-flex flex-column">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

Görünüm:

```
1
2
3
```

---

# 8. flex-column-reverse

Elemanları **dikey ama ters sırayla** dizmek için kullanılır.

```html
<div class="d-flex flex-column-reverse">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

Görünüm:

```
3
2
1
```

---

# 9. Responsive flex-column ve flex-column-reverse

Responsive kullanım mümkündür.

Örnek:

```html
<div class="d-flex flex-column flex-lg-row">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

Davranış:

- Mobil → **alt alta**
- Desktop → **yan yana**

---

# Özet

| Class               | Açıklama                 |
| ------------------- | ------------------------ |
| d-flex              | Flex container oluşturur |
| d-inline-flex       | Inline flex container    |
| flex-row            | Soldan sağa dizim        |
| flex-row-reverse    | Sağdan sola dizim        |
| flex-column         | Yukarıdan aşağı dizim    |
| flex-column-reverse | Aşağıdan yukarı dizim    |
| flex-md-row         | Responsive yön           |

---

# Önemli Bilgi

Flexbox'ta:

- `d-flex` → **flex container**
- içindeki elementler → **flex item**

Bu yüzden flex özellikleri **parent elemente verilir.**

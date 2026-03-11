# Bootstrap Padding ve Margin Kullanımı

Bootstrap, elementler arasındaki boşlukları ayarlamak için **spacing utility classları** sağlar.

Bu sınıflar sayesinde ekstra CSS yazmadan **padding (iç boşluk)** ve **margin (dış boşluk)** ekleyebiliriz.

---

# 1. Padding ve Margin Nedir?

| Özellik | Açıklama                            |
| ------- | ----------------------------------- |
| Padding | Elementin **iç boşluğunu** ayarlar  |
| Margin  | Elementin **dış boşluğunu** ayarlar |

Örnek:

```html
<div class="p-3 bg-primary text-white">Padding örneği</div>

<div class="m-3 bg-danger text-white">Margin örneği</div>
```

---

# 2. Bootstrap Spacing Mantığı

Bootstrap spacing sınıfları şu mantıkla çalışır:

```
{özellik}{yön}-{boyut}
```

| Bölüm | Anlam          |
| ----- | -------------- |
| p     | padding        |
| m     | margin         |
| yön   | hangi taraf    |
| sayı  | boşluk miktarı |

---

# 3. Yön Sınıfları

| Sınıf | Açıklama     |
| ----- | ------------ |
| t     | top (üst)    |
| b     | bottom (alt) |
| s     | start (sol)  |
| e     | end (sağ)    |
| x     | sağ ve sol   |
| y     | üst ve alt   |
| boş   | tüm yönler   |

---

# 4. Padding Kullanımı

### Tüm yönler

```html
<div class="p-3 bg-primary text-white">Padding tüm yönlerde</div>
```

### Belirli yönler

```html
<div class="pt-3">Üst padding</div>
<div class="pb-3">Alt padding</div>
<div class="ps-3">Sol padding</div>
<div class="pe-3">Sağ padding</div>
```

### Yatay ve dikey padding

```html
<div class="px-3">Sağ ve sol padding</div>
<div class="py-3">Üst ve alt padding</div>
```

---

# 5. Margin Kullanımı

### Tüm yönler

```html
<div class="m-3 bg-success text-white">Margin tüm yönlerde</div>
```

### Belirli yönler

```html
<div class="mt-3">Üst margin</div>
<div class="mb-3">Alt margin</div>
<div class="ms-3">Sol margin</div>
<div class="me-3">Sağ margin</div>
```

### Yatay ve dikey margin

```html
<div class="mx-3">Sağ ve sol margin</div>
<div class="my-3">Üst ve alt margin</div>
```

---

# 6. Spacing Boyutları

Bootstrap boşlukları belirli bir ölçeğe göre verir.

| Sınıf | Değer   |
| ----- | ------- |
| 0     | 0       |
| 1     | 0.25rem |
| 2     | 0.5rem  |
| 3     | 1rem    |
| 4     | 1.5rem  |
| 5     | 3rem    |

Örnek:

```html
<div class="p-1">Küçük padding</div>
<div class="p-3">Orta padding</div>
<div class="p-5">Büyük padding</div>
```

---

# 7. Responsive Padding ve Margin

Bootstrap spacing sınıfları **responsive** olarak da kullanılabilir.

```
{özellik}{yön}-{breakpoint}-{boyut}
```

| Breakpoint | Ekran           |
| ---------- | --------------- |
| sm         | küçük cihaz     |
| md         | tablet          |
| lg         | laptop          |
| xl         | büyük ekran     |
| xxl        | çok büyük ekran |

Örnek:

```html
<div class="p-2 p-md-5">
  Küçük ekranda küçük padding, büyük ekranda büyük padding
</div>
```

---

# 8. Auto Margin Kullanımı

`auto` değeri elementleri hizalamak için kullanılabilir.

```html
<div class="mx-auto" style="width:200px;">Ortalanmış element</div>
```

Bu sınıf özellikle:

- navbar
- card
- container

tasarımlarında kullanılır.

---

# Özet

| Sınıf       | Açıklama                      |
| ----------- | ----------------------------- |
| p-\*        | padding                       |
| m-\*        | margin                        |
| pt/pb/ps/pe | tek yön                       |
| px/py       | yatay / dikey                 |
| 0-5         | boşluk boyutu                 |
| responsive  | breakpoint ile kullanılabilir |

---

# İpucu

Bootstrap'ta spacing sınıfları **UI tasarımını çok hızlandırır**.

Örnek:

```
p-3
px-4
my-5
mt-2
mx-auto
```

Bu sayede çoğu projede **ekstra CSS yazmadan boşluk düzeni oluşturulabilir.**

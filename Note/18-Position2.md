# Bootstrap 5 Position 2

## Position Relative ve Absolute Kullanımı

CSS ve Bootstrap'ta **relative** ve **absolute** position özellikleri genellikle **birlikte kullanılır**.
Bu sayede elementler başka bir elementin içinde **tam olarak istediğimiz noktaya yerleştirilebilir.**

Bu bölümde şu konuları inceleyeceğiz:

- position-relative
- position-absolute
- relative ve absolute birlikte kullanım

---

# 1. Position Relative

`position-relative` elementi **referans noktası** haline getirir.

Yani:

- element normal akışta kalır
- ancak içindeki absolute elementler için **referans container olur**

Bootstrap class:

```id="n8ep7p"
position-relative
```

Örnek:

```html id="q8d0r7"
<div class="position-relative bg-light p-5">Relative container</div>
```

Özellikleri:

- normal sayfa akışında kalır
- içindeki absolute elementler buna göre konumlanır

---

# 2. Position Absolute

`position-absolute` elementi **normal akıştan çıkarır** ve
**en yakın relative elemente göre konumlandırır.**

Bootstrap class:

```id="8bx1p3"
position-absolute
```

Örnek:

```html id="zwh5a4"
<div class="position-absolute top-0 start-0">Absolute element</div>
```

Açıklama:

| Class    | Anlam                |
| -------- | -------------------- |
| top-0    | yukarıya yerleştirir |
| bottom-0 | aşağıya yerleştirir  |
| start-0  | sola yerleştirir     |
| end-0    | sağa yerleştirir     |

---

# 3. Relative ve Absolute Birlikte Kullanımı

Bu iki position özelliği **genellikle birlikte kullanılır.**

Mantık:

```id="voww6k"
container → position-relative
iç element → position-absolute
```

Örnek:

```html id="4t10i8"
<div class="position-relative bg-light p-5">
  <div class="position-absolute top-0 end-0 bg-danger text-white p-2">
    Bildirim
  </div>

  Kart içeriği
</div>
```

Bu örnekte:

- container → relative
- küçük kutu → absolute

ve kutu **container’ın sağ üst köşesine yerleşir.**

---

# En Çok Kullanılan Position Sınıfları

| Class             | Açıklama              |
| ----------------- | --------------------- |
| position-relative | referans container    |
| position-absolute | serbest konumlandırma |
| top-0             | yukarı                |
| bottom-0          | aşağı                 |
| start-0           | sol                   |
| end-0             | sağ                   |

---

# Gerçek Proje Kullanımları

Relative + Absolute en çok şu tasarımlarda kullanılır:

### Bildirim Badge

```id="8mck1y"
Sepet sayacı
Mesaj bildirimi
```

### Kart Etiketleri

```id="v5xqyy"
Yeni ürün etiketi
İndirim etiketi
```

### Image Label

```id="p6y1o3"
Resim üzerine yazı
Etiketler
```

---

# Görsel Mantık

```id="0v9gzb"
Relative (container)
↓
Absolute (iç element)
↓
container içinde istediğimiz noktaya yerleştirir
```

---

# Özet

| Position | Davranış                       |
| -------- | ------------------------------ |
| relative | referans container             |
| absolute | container içinde serbest konum |

Bootstrap position sınıfları sayesinde **CSS yazmadan elementleri istediğimiz noktaya yerleştirebiliriz.**

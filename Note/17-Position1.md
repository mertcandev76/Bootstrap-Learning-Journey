# Bootstrap 5 Position 1

## Position Fixed, Sticky ve Static Kullanımı

CSS ve Bootstrap'ta **position özelliği**, bir elementin sayfa üzerinde nasıl konumlandırılacağını belirler.

Bootstrap bu işlemleri kolaylaştırmak için bazı **utility class'lar** sağlar.

Bu bölümde şu konuları inceleyeceğiz:

- static
- fixed
- sticky

---

# 1. Position Static

`static` CSS'te **varsayılan (default)** position değeridir.

Yani element:

- normal sayfa akışında kalır
- özel bir konumlandırma yapılmaz
- `top`, `left`, `right`, `bottom` çalışmaz

Bootstrap class:

```
position-static
```

Örnek:

```html
<div class="position-static bg-primary text-white p-3">
  Bu element static position kullanır
</div>
```

Özellikleri:

- varsayılan konum
- sayfa akışını bozmaz
- özel konumlandırma yok

---

# 2. Position Fixed

`fixed` position elementi **ekrana sabitler**.

Yani:

- sayfa scroll edilse bile yer değiştirmez
- viewport'a sabitlenir

Bootstrap class:

```
position-fixed
```

Genellikle şu alanlarda kullanılır:

- navbar
- chat butonu
- back to top butonu
- floating menu

Örnek:

```html
<div class="position-fixed bottom-0 end-0 bg-danger text-white p-3">
  Sabit buton
</div>
```

Açıklama:

```
bottom-0 → aşağı sabitler
end-0 → sağa sabitler
```

Bu kombinasyon genelde **floating button** yapmak için kullanılır.

---

# 3. Position Sticky

`sticky` position elementi belirli bir noktaya kadar normal davranır,
scroll sonrası **ekrana yapışır**.

Bootstrap class:

```
position-sticky
```

En yaygın kullanım:

- sticky navbar
- sticky sidebar
- sticky başlıklar

Örnek:

```html
<div class="position-sticky top-0 bg-dark text-white p-3">Sticky Menü</div>
```

Açıklama:

```
top-0 → yukarıya yapışır
```

Sayfa scroll edildiğinde element **üstte sabit kalır.**

---

# Position Karşılaştırması

| Position | Davranış             |
| -------- | -------------------- |
| static   | normal akış          |
| fixed    | ekrana sabit         |
| sticky   | scroll sonrası sabit |

---

# Görsel Mantık

```
static
↓
normal element

fixed
↓
ekrana sabit

sticky
↓
scroll sonrası yapışır
```

---

# Gerçek Proje Kullanımları

### Fixed

- WhatsApp butonu
- canlı destek butonu
- yukarı çık butonu

### Sticky

- navbar
- sidebar
- kategori menüsü

### Static

- normal sayfa elementleri

---

# Özet

| Class           | Açıklama               |
| --------------- | ---------------------- |
| position-static | varsayılan konum       |
| position-fixed  | ekrana sabit           |
| position-sticky | scroll sonrası yapışır |

Bootstrap position sınıfları sayesinde **CSS yazmadan kolay konumlandırma yapılabilir.**

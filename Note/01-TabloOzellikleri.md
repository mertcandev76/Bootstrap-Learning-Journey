# Bootstrap 5 – Tablo Özellikleri

Bu notlar Bootstrap 5 kullanarak tablolar oluşturmayı ve özelleştirmeyi öğretmek amacıyla hazırlanmıştır.

---

# 1. HTML Tablo Temeli

HTML'de tablo oluşturmak için kullanılan temel etiketler:

```html
<table>
  <thead>
    <tr>
      <th>Ad</th>
      <th>Soyad</th>
      <th>Yaş</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ahmet</td>
      <td>Yılmaz</td>
      <td>25</td>
    </tr>
  </tbody>
</table>
```

Önemli etiketler:

- `table` → Tabloyu oluşturur
- `thead` → Tablo başlık kısmı
- `tbody` → Tablonun veri kısmı
- `tr` → Satır
- `th` → Başlık hücresi
- `td` → Veri hücresi

---

# 2. Bootstrap Table Class

Bootstrap'ta tabloyu stillendirmek için `table` classı kullanılır.

```html
<table class="table">
  ...
</table>
```

Bu class tabloya:

- Padding
- Satır boşlukları
- Daha okunabilir görünüm

kazandırır.

---

# 3. Tablo Renklendirme

Bootstrap tablo satırlarını veya tabloyu renklendirmek için color classları sunar.

Örnek:

```html
<table class="table table-primary"></table>
```

Kullanılabilecek renkler:

- `table-primary`
- `table-secondary`
- `table-success`
- `table-danger`
- `table-warning`
- `table-info`
- `table-light`
- `table-dark`

Satır bazlı kullanım:

```html
<tr class="table-success"></tr>
```

---

# 4. Çizgili Tablo (Striped Table)

Satırların bir açık bir koyu görünmesi için kullanılır.

```html
<table class="table table-striped"></table>
```

Bu özellik tabloyu daha okunabilir yapar.

---

# 5. Hover Efekti

Fare satırın üzerine geldiğinde highlight olur.

```html
<table class="table table-hover"></table>
```

---

# 6. Tablo Kenarlık Oluşturma

Tablonun etrafında ve hücrelerde border oluşturmak için:

```html
<table class="table table-bordered"></table>
```

---

# 7. Tablo Çizgilerini Kaldırma

Tüm çizgileri kaldırmak için:

```html
<table class="table table-borderless"></table>
```

---

# 8. Tabloyu Daraltma (Small Table)

Tabloyu daha kompakt hale getirir.

```html
<table class="table table-sm"></table>
```

---

# 9. Tabloda Dikey Hizalama

Bootstrap dikey hizalama classları sunar.

```html
<td class="align-middle">Orta</td>
<td class="align-top">Yukarı</td>
<td class="align-bottom">Aşağı</td>
```

---

# 10. İç İçe Tablolar

Bir tablonun içine başka bir tablo koyulabilir.

```html
<td>
  <table class="table">
    <tr>
      <td>Alt tablo</td>
    </tr>
  </table>
</td>
```

---

# 11. Tablo Başlık Renklendirme

Tablo başlığını renklendirmek için `thead` içinde class kullanılır.

```html
<thead class="table-dark"></thead>
```

Alternatif:

```html
<thead class="table-light"></thead>
```

---

# 12. Caption Kullanımı

Tabloya açıklama eklemek için kullanılır.

```html
<table class="table">
  <caption>
    Kullanıcı Listesi
  </caption>
</table>
```

Caption tablonun üstünde veya altında görünebilir.

Alt tarafa almak için:

```html
<caption class="caption-bottom"></caption>
```

---

# 13. Responsive (Duyarlı) Tablolar

Küçük ekranlarda tablo taşmasını önlemek için kullanılır.

```html
<div class="table-responsive">
  <table class="table"></table>
</div>
```

Responsive seçenekleri:

- `table-responsive`
- `table-responsive-sm`
- `table-responsive-md`
- `table-responsive-lg`
- `table-responsive-xl`

---

# Özet

Bootstrap tablo classları:

| Class            | Açıklama         |
| ---------------- | ---------------- |
| table            | Temel tablo      |
| table-striped    | Çizgili tablo    |
| table-hover      | Hover efekti     |
| table-bordered   | Kenarlıklı tablo |
| table-borderless | Çizgisiz tablo   |
| table-sm         | Küçük tablo      |
| table-responsive | Duyarlı tablo    |

---

Bu notları VS Code içinde `.md` dosyası olarak kullanabilir ve hızlı tekrar yapabilirsiniz.

---

# 14. Grid Sistemine Göre Tablo Kullanımı

Bootstrap'ta genellikle tablolar **Grid sistemi (container → row → col)** içinde kullanılır. Bu sayede sayfa düzeni daha düzenli ve responsive olur.

Temel yapı:

```html
<div class="container mt-4">
  <div class="row">
    <div class="col-12">
      <table class="table table-striped table-hover">
        <thead class="table-dark">
          <tr>
            <th>#</th>
            <th>Ad</th>
            <th>Email</th>
            <th>Rol</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Ahmet Yılmaz</td>
            <td>ahmet@mail.com</td>
            <td>Admin</td>
          </tr>

          <tr>
            <td>2</td>
            <td>Ayşe Demir</td>
            <td>ayse@mail.com</td>
            <td>Editor</td>
          </tr>

          <tr>
            <td>3</td>
            <td>Mehmet Kaya</td>
            <td>mehmet@mail.com</td>
            <td>Kullanıcı</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
```

Grid açıklaması:

- `container` → Sayfaya yatay boşluk verir
- `row` → Satır oluşturur
- `col-12` → Tabloyu tüm genişliğe yayar

---

## Responsive Grid + Tablo

Profesyonel kullanımda tabloyu genellikle **responsive wrapper içinde** kullanırız.

```html
<div class="container mt-5">
  <div class="row">
    <div class="col-lg-10 mx-auto">
      <div class="table-responsive">
        <table class="table table-bordered table-hover">
          <caption>
            Kullanıcı Listesi
          </caption>

          <thead class="table-dark">
            <tr>
              <th>ID</th>
              <th>Ad</th>
              <th>Email</th>
              <th>Durum</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>Ali</td>
              <td>ali@mail.com</td>
              <td>Aktif</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Zeynep</td>
              <td>zeynep@mail.com</td>
              <td>Pasif</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
```

Bu yapı gerçek projelerde çok kullanılır.

Profesyonel sıralama:

```
container
  row
    col
      table-responsive
        table
```

Bu yapı sayesinde:

- Layout bozulmaz
- Mobil uyumluluk sağlanır
- Tablo ortalanabilir
- Büyük tablolar taşmaz

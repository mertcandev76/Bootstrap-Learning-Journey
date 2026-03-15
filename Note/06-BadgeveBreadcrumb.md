# Bootstrap 5 Badge ve Breadcrumb Konu Anlatımı

## 1. Bootstrap 5 Badge

### Badge Nedir?

**Badge**, Bootstrap’ta küçük bilgi etiketleri oluşturmak için kullanılan bir bileşendir. Genellikle:

- Bildirim sayısı göstermek
- Etiket veya kategori belirtmek
- Durum göstermek (aktif, yeni, tamamlandı vb.)

gibi amaçlarla kullanılır.

Badge’ler genellikle **butonlarda, başlıklarda ve listelerde** kullanılır.

---

## Basit Badge Kullanımı

Bootstrap’ta bir badge oluşturmak için `badge` sınıfı kullanılır.

<span class="badge bg-primary">Yeni</span>

### Açıklama - `badge` → Badge bileşenini oluşturur - `bg-primary` → Arka plan

rengini belirler

```
## Başlık İçinde Badge Kullanımı

<h1>Mesajlar <span class="badge bg-secondary">5</span></h1>
```

## Badge Renkleri

Bootstrap’ta farklı renk seçenekleri vardır:

<span class="badge bg-primary">Primary</span>
<span class="badge bg-secondary">Secondary</span>
<span class="badge bg-success">Success</span>
<span class="badge bg-danger">Danger</span>
<span class="badge bg-warning text-dark">Warning</span>
<span class="badge bg-info text-dark">Info</span>
<span class="badge bg-dark">Dark</span>

## Rounded (Yuvarlak) Badge

<span class="badge rounded-pill bg-primary">1</span>

## Buton İçinde Badge Kullanımı

<button class="btn btn-primary">
  Bildirimler <span class="badge bg-danger">4</span>
</button>

## 2. Bootstrap 5 Breadcrumb Kullanımı

Breadcrumb, kullanıcının bulunduğu sayfanın site hiyerarşisindeki yerini gösteren navigasyon bileşenidir.

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Ana Sayfa</a></li>
    <li class="breadcrumb-item"><a href="#">Kategoriler</a></li>
    <li class="breadcrumb-item active" aria-current="page">Bootstrap</li>
  </ol>
</nav>

## Breadcrumb Yapısı

- nav → Navigasyon alanı

- ol.breadcrumb → Breadcrumb listesi

- li.breadcrumb-item → Her bir adım

- active → Bulunulan sayfa

## Divider (Ayraç) Değiştirme

Varsayılan ayraç / yerine başka bir karakter kullanılabilir.

.breadcrumb-item + .breadcrumb-item::before {
content: ">";
}

Özet

Badge küçük etiketler ve bildirimler için kullanılır.

Breadcrumb kullanıcının sayfa hiyerarşisini görmesini sağlar.

Bootstrap 5 ile bu bileşenler hazır sınıflarla kolayca kullanılabilir.

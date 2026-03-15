# Bootstrap 5 Buton Özellikleri

Bootstrap 5, butonları kolayca özelleştirmenizi sağlar. Aşağıda temel özellikler ve sınıflar listelenmiştir.

## 1. Buton Temel Sınıfları

| Buton Tipi | Sınıf               | Açıklama                                               |
| ---------- | ------------------- | ------------------------------------------------------ |
| Primary    | `btn btn-primary`   | Ana buton, genellikle birincil aksiyon için kullanılır |
| Secondary  | `btn btn-secondary` | İkincil aksiyonlar için                                |
| Success    | `btn btn-success`   | Başarılı işlemler için yeşil buton                     |
| Danger     | `btn btn-danger`    | Tehlike veya silme işlemleri için kırmızı buton        |
| Warning    | `btn btn-warning`   | Uyarılar için sarı buton                               |
| Info       | `btn btn-info`      | Bilgilendirme için mavi buton                          |
| Light      | `btn btn-light`     | Açık renkli buton                                      |
| Dark       | `btn btn-dark`      | Koyu renkli buton                                      |
| Link       | `btn btn-link`      | Buton görünümünde link                                 |

## 2. Buton Boyutları

| Boyut  | Sınıf        | Açıklama         |
| ------ | ------------ | ---------------- |
| Normal | `btn`        | Standart boyut   |
| Küçük  | `btn btn-sm` | Daha küçük buton |
| Büyük  | `btn btn-lg` | Daha büyük buton |

## 3. Buton Durumları

- **Aktif Buton:** `<button class="btn btn-primary active">Active</button>`
- **Devre Dışı Buton:** `<button class="btn btn-secondary" disabled>Disabled</button>`

## 4. Buton Blok Seviyesi

Butonu tüm satırı kaplayacak şekilde yapmak için:

<button class="btn btn-primary btn-block">Tam Genişlik Buton</button>

Bootstrap 5’te btn-block yerine w-100 kullanılabilir:
<button class="btn btn-primary w-100">Tam Genişlik</button>

Bu dosya Bootstrap 5 butonlarını ve temel kullanım örneklerini içerir.

## 5. Tam Genişlik Buton

```html
<button class="btn btn-primary w-100">Tam Genişlik</button>
```

## 6. Outline (Konturlu) Butonlar

```html
<button class="btn btn-outline-primary">Primary Outline</button>
<button class="btn btn-outline-danger">Danger Outline</button>
```

## 7. Buton Grupları

```html
<div class="btn-group" role="group">
  <button type="button" class="btn btn-primary">Sol</button>
  <button type="button" class="btn btn-primary">Orta</button>
  <button type="button" class="btn btn-primary">Sağ</button>
</div>
```

## 8. Icon Kullanımı

Bootstrap 5 ile birlikte Bootstrap Icons kullanabilirsiniz:

```html
<button class="btn btn-success">
  <i class="bi bi-check-circle"></i> Kaydet
</button>
```

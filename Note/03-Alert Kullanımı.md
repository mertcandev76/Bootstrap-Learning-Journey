# Bootstrap 5 Alert Kullanımı

Bootstrap 5 ile kullanıcıya bilgi, uyarı veya hata mesajları göstermek için **alert** bileşenini kullanabilirsiniz.

---

## 1. Basit Alert

<div class="alert alert-primary" role="alert">
  Bu bir <strong>primary</strong> alert mesajıdır.
</div>

<div class="alert alert-success" role="alert">
  Bu bir <strong>success</strong> alert mesajıdır.
</div>

<div class="alert alert-warning" role="alert">
  Bu bir <strong>warning</strong> alert mesajıdır.
</div>

<div class="alert alert-danger" role="alert">
  Bu bir <strong>danger</strong> alert mesajıdır.
</div>

---

## 2. Dismissible (Kapatılabilir) Alert

<div class="alert alert-warning alert-dismissible fade show" role="alert">
  Bu bir kapatılabilir uyarıdır.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>

<div class="alert alert-success alert-dismissible fade show" role="alert">
  İşlem başarıyla tamamlandı!
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>

---

## 3. Alert Başlıkları

<div class="alert alert-primary" role="alert">
  <h4 class="alert-heading">Başlık!</h4>
  <p>Bu alert başlık içeriyor. Alert metni buraya yazılır.</p>
  <hr>
  <p class="mb-0">Daha fazla bilgi için alt not eklenebilir.</p>
</div>

<div class="alert alert-danger" role="alert">
  <h4 class="alert-heading">Hata!</h4>
  <p>Bir hata oluştu, lütfen tekrar deneyin.</p>
</div>

---

## 4. Küçük Alert (Inline / Inline Text)

<span class="badge bg-primary">Primary</span>
<span class="badge bg-success">Success</span>
<span class="badge bg-warning text-dark">Warning</span>
<span class="badge bg-danger">Danger</span>

_Alternatif olarak küçük uyarılar için `badge` sınıfı da kullanılabilir._

---

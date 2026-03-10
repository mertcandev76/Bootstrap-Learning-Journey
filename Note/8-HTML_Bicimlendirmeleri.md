# Bootstrap HTML Biçimlendirmeleri

Bootstrap, HTML metinlerini daha okunabilir ve estetik göstermek için çeşitli **typography (yazı biçimlendirme)** sınıfları sağlar.

---

# 1. Heading (Başlık) Elementleri

HTML’de başlıklar `h1` ile `h6` arasında kullanılır.

```html
<h1>Başlık 1</h1>
<h2>Başlık 2</h2>
<h3>Başlık 3</h3>
<h4>Başlık 4</h4>
<h5>Başlık 5</h5>
<h6>Başlık 6</h6>
```

Boyut sıralaması:

```
h1 → en büyük
h6 → en küçük
```

---

# 2. Heading Class Kullanımı

Bootstrap'ta başlık görünümü vermek için `h1 - h6` sınıfları kullanılabilir.

Bu sayede başlık görünümü **başlık etiketi kullanmadan da verilebilir.**

Örnek:

```html
<p class="h4">Başlık Görünümünde Paragraf</p>
```

Burada:

```
p etiketi → paragraf
h4 class → başlık görünümü
```

---

# 3. Display Başlıkları

Bootstrap daha büyük ve dikkat çekici başlıklar için **display sınıfları** sunar.

```html
<h1 class="display-1">Başlık</h1>
<h2 class="display-2">Başlık</h2>
<h3 class="display-3">Başlık</h3>
<h4 class="display-4">Başlık</h4>
<h5 class="display-5">Başlık</h5>
<h6 class="display-6">Başlık</h6>
```

Özellikleri:

- Normal başlıklardan **daha büyük**
- Genellikle **hero veya ana başlıklar** için kullanılır.

Display sınıfları **her etikette kullanılabilir.**

```html
<p class="display-1">Büyük Başlık</p>
```

---

# 4. small Etiketi

`small` etiketi başlık içinde **alt başlık veya açıklama** eklemek için kullanılır.

Örnek:

```html
<h1>Bootstrap Eğitimi <small>(Alt Başlık)</small></h1>
```

Görünüm:

```
Ana başlık büyük
small → daha küçük yazı
```

---

# 5. mark Etiketi

`mark` etiketi metnin **vurgulanmasını** sağlar.

Arka planı genellikle sarı renkte olur.

```html
<p>Bu bir <mark>önemli metindir</mark></p>
```

---

# 6. abbr Etiketi

`abbr` etiketi **kısaltmalar** için kullanılır.

Fare ile üzerine gelince açıklama gösterir.

```html
<abbr title="HyperText Markup Language">HTML</abbr>
```

Sonuç:

```
HTML üzerine gelince açıklama görünür.
```

---

# 7. blockquote Kullanımı

Uzun alıntılar için `blockquote` kullanılır.

Bootstrap'ta özel stil verilmiştir.

```html
<blockquote class="blockquote">
  <p>Bu bir alıntıdır.</p>
  <footer class="blockquote-footer">Yazar</footer>
</blockquote>
```

Kullanım alanları:

- makaleler
- alıntılar
- referans metinler

---

# 8. code Etiketi

Kod parçalarını göstermek için kullanılır.

```html
<p><code>console.log("Hello World");</code></p>
```

Birden fazla satır için:

```html
<code>
  &lt;div class="container"&gt; &lt;h1&gt;Hello World&lt;/h1&gt; &lt;/div&gt;
</code>
```

---

# 9. kbd Etiketi

Klavye tuşlarını göstermek için kullanılır.

```html
<p><kbd>Ctrl</kbd> + <kbd>S</kbd></p>
```

Genellikle:

- kısayollar
- klavye kombinasyonları

için kullanılır.

---

# 10. pre Etiketi

`pre` etiketi metni **boşlukları ve satır düzenini koruyarak** gösterir.

```html
<pre>
<div class="container">
  <h1>Hello World</h1>
</div>
</pre>
```

Özellikleri:

```
boşlukları korur
satır düzenini korur
monospace font kullanır
```

---

# Özet

| Etiket     | Amaç            |
| ---------- | --------------- |
| h1 - h6    | Başlıklar       |
| h1 class   | Başlık görünümü |
| display-\* | Büyük başlıklar |
| small      | Alt başlık      |
| mark       | Metni vurgular  |
| abbr       | Kısaltma        |
| blockquote | Alıntı          |
| code       | Kod gösterimi   |
| kbd        | Klavye tuşu     |
| pre        | Formatlı metin  |

---

# İpucu

Bootstrap'ta metin biçimlendirmeleri genellikle **Typography** kategorisinde yer alır.

Bu özellikler:

```
daha okunabilir içerik
daha iyi tasarım
daha profesyonel UI
```

oluşturmak için kullanılır.

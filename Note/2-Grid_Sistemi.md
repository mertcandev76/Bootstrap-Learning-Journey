1-Row (Satır Yapısı)

Grid sistemi row ile başlar.

<div class="row">

Görevi:

Kolonları aynı satır içinde hizalamak

Grid sistemini başlatmak

2-Bootstrap 12 Kolon Mantığı

Bootstrap grid sistemi 12 parçadan oluşur.

Yani satırın tamamı:

12 / 12

demektir.

Örneğin:

col-6 + col-6 = 12

Sayfa 2 eşit parçaya bölünür.

2.1.- col-1 Kullanımı (12 Parça)

Kodun:

<div class="col-1">col-1</div>

Bu:

1 / 12 genişlik

demektir.

Senin örneğinde:

<div class="col-1">col-1</div> (12 tane)

sonuç:

1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 = 12

Yani:

✔ satır tamamen dolu.

2.2.- col-2 Kullanımı

Kod:

<div class="col-2">col-2</div>

Bu:

2 / 12 genişlik

demektir.

Senin örneğin:

col-2 x 6

hesap:

2 + 2 + 2 + 2 + 2 + 2 = 12

yani:

✔ 6 tane kutu yan yana gelir.

2.3.- col-3 Kullanımı

Kod:

<div class="col-3">col-3</div>

Bu:

3 / 12

yani:

%25 genişlik

Senin örneğin:

col-3 x 4

hesap:

3 + 3 + 3 + 3 = 12

Yani satır 4 eşit parçaya bölünür.

2.4.- 12 Kolonu Aşma Durumu

Kod:

<div class="row">
   col-3
   col-3
   col-3
   col-3
   col-3
</div>

Hesap:

3 + 3 + 3 + 3 = 12

kolon:

3 daha eklenirse = 15

Bootstrap ne yapar?

👉 Yeni satıra geçirir

Yani:

Satır 1 → 12
Satır 2 → kalan
2.5. col-6 Kullanımı

Kod:

<div class="col-6">col-6</div>
<div class="col-6">col-6</div>

Hesap:

6 + 6 = 12

Sonuç:

Sayfa 2 eşit parçaya bölünür

%50 + %50

3- Farklı Kolon Kombinasyonları

Bootstrap’te kolonlar farklı şekilde bölünebilir.

Örnek 1

<div class="col-4"></div>
<div class="col-8"></div>

Hesap:

4 + 8 = 12
Örnek 2

<div class="col-2"></div>
<div class="col-3"></div>
<div class="col-7"></div>

Hesap:

2 + 3 + 7 = 12
Örnek 3

<div class="col-3"></div>
<div class="col-8"></div>
<div class="col-1"></div>

Hesap:

3 + 8 + 1 = 12
4- col Kullanımı (Otomatik Bölme)

Kod:

<div class="col">col</div>
<div class="col">col</div>

Bootstrap otomatik böler.

12 / 2 = 6

yani:

col-6
col-6
3 kolon olursa

<div class="col"></div>
<div class="col"></div>
<div class="col"></div>
12 / 3 = 4

yani:

col-4
col-4
col-4
5 kolon olursa

<div class="col"></div>
<div class="col"></div>
<div class="col"></div>
<div class="col"></div>
<div class="col"></div>

Bootstrap eşit şekilde böler.

Grid Sisteminin Mantığını Özetleyelim

Bootstrap grid:

Container
↓
Row
↓
Col

Temel kural:

Toplam kolon = 12

Örnekler:

col-6 + col-6
col-4 + col-4 + col-4
col-3 + col-3 + col-3 + col-3
col-2 + col-3 + col-7

💡 En önemli kural:

Toplam kolon sayısı 12'yi geçmemeli

Geçerse:

👉 Bootstrap otomatik alt satıra atar.

5-Bootstrap Breakpoint (Ekran Boyutları)

Bootstrap ekranları 5 parçaya ayırır.

| Class   | Ekran             | Boyut   |
| ------- | ----------------- | ------- |
| col     | Extra Small       | <576px  |
| col-sm  | Small             | ≥576px  |
| col-md  | Medium            | ≥768px  |
| col-lg  | Large             | ≥992px  |
| col-xl  | Extra Large       | ≥1200px |
| col-xxl | Extra Extra Large | ≥1400px |

5.1.- col-md-6 Örneği

<div class="row">
  <div class="col-md-6 bg-primary">Kutu 1</div>
  <div class="col-md-6 bg-danger">Kutu 2</div>
</div>
Mobilde
Kutu1
Kutu2

Çünkü mobilde col-md çalışmaz.

Tablet ve üstü
Kutu1 | Kutu2

Sebep:

6 + 6 = 12

5.2.- col-lg-4 Örneği

<div class="row">
  <div class="col-lg-4 bg-primary">1</div>
  <div class="col-lg-4 bg-danger">2</div>
  <div class="col-lg-4 bg-success">3</div>
</div>
Mobil
1
2
3
Desktop
1 | 2 | 3

Çünkü:

4 + 4 + 4 = 12
5.3.- Birden Fazla Breakpoint Kullanma

Bootstrap’te aynı elemente birden fazla responsive class verebiliriz.

<div class="col-12 col-md-6 col-lg-4">
Anlamı:

| Ekran   | Kolon |
| ------- | ----- |
| Mobil   | 12    |
| Tablet  | 6     |
| Desktop | 4     |

Görünüm

Mobil 📱

1
2
3

Tablet 💻

1 | 2
3

Desktop 🖥

1 | 2 | 3

5.4.-

Gerçek Proje Örneği (Kart Layout)

<div class="container">
  <div class="row">

    <div class="col-12 col-md-6 col-lg-4">
      <div class="card">Card 1</div>
    </div>

    <div class="col-12 col-md-6 col-lg-4">
      <div class="card">Card 2</div>
    </div>

    <div class="col-12 col-md-6 col-lg-4">
      <div class="card">Card 3</div>
    </div>

  </div>
</div>

Görünüm

Mobil 📱

Card1
Card2
Card3

Tablet 💻

Card1 | Card2
Card3

Desktop 🖥

Card1 | Card2 | Card3

Container,Container Fluid ve Responsive Container

Container, Bootstrap’te sayfa içeriğini ortalamak ve belirli bir genişlik içinde tutmak için kullanılan ana kapsayıcıdır. İçindeki grid, row ve column yapıları genelde bunun içinde kullanılır.

1️⃣ .container

Sayfa ortalanır.

Ekran büyüdükçe maksimum genişliği değişir.

Responsive çalışır.

<div class="container">
  İçerik burada
</div>
2️⃣ .container-fluid

Her zaman %100 genişlik kaplar.

Ekranın tamamına yayılır.

<div class="container-fluid">
  İçerik burada
</div>

Responsive Container (container-sm → container-xxl)

Bootstrap’te container sınıfları belirli ekran boyutundan sonra sabit genişliğe geçer.

| Class           | Açıklama                          |
| --------------- | --------------------------------- |
| `container-sm`  | 576px ve üstünde sabit container  |
| `container-md`  | 768px ve üstünde sabit container  |
| `container-lg`  | 992px ve üstünde sabit container  |
| `container-xl`  | 1200px ve üstünde sabit container |
| `container-xxl` | 1400px ve üstünde sabit container |

Örnek:

<div class="container-lg">
  Bu container 992px ve üzeri ekranlarda sabit genişlik olur
</div>

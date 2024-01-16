---
title: Next js İle Portfolio Oluşturma Sürecim
date: 2024-01-15
subtitle: Çekilen Sancılar :)
keywords: html,css,javascript,react,next,contentlayer,raindrop
description: Next js ile blog sitesi yapımı
---

### _Yararlanılan Kaynaklar ve Motivasyon_

Öncelikle bu yazıyı oluşturma sebebim site yapımında ve yayına alırken ne gibi sıkıntılar yaşadım bunlardan bahsetmek olacak.Ve özellikle bu portfolyoyu oluştururken yararlandığım ve esinlendiğim yer Adem İlter'in sayfası oldu.Bu vesileyle teşekkür etmiş olayım kendisine.Dinamik bir blog kurma isteği aşağıdaki sebeplerden kaynaklıydı ↵
- Herhangi bir database  olmadan sadece fetch ile istek atıp dinamiklik sağlamak
- Kendi kişisel bilgilerimi (youtube kanalım,yazdığım makaleler,hoşuma giden linkler vb.) tek bir yerde toplamak
- Yaptığım işleri burdan duyurmak ve ekstra her bir yerin linkini vermemek.

### Süreç Başlasın

İlk olarak artık projeyi yazmaya hangi framework'ten başlayacağıma karar vermem gerekiyordu. React yazdığımdan tercihim bu yönde oldu fakat düz bir react yazmaktansa artık çokça kullandığım next js ile react'i de kapsadığından ki routing ve image optimizasyonlarından kaynaklı next ile projemi oluşturdum. Tabi oluşturduğumda versiyon 12'deydi.

### Bana Neler Lazım!

Öncelikle projeyi oluştururken hangi paketlerden yararlanacağınızı aklınızdan bir geçirirsiniz. Bende özellikle css tarafında hızlı ve kolay olması açısından **Tailwind**'i tercih ettim. Yazılar için herhangi bir yerde tutulmayacak yazıları **markdown** olarak yazmak istedim. Bunun için biçilmiş kaftan "**Contentlayer**" ile tanıştım. Hatta pekiştirmek için youtube'a video çektim. Bunun için şu [video](https://youtu.be/vk9DNiye-ec)'yu izleyebilirisiniz. Sıkıntılı değildi sayesinde md dosyaları daha çok yazarak pekiştirme fırsatı buldum. Neyse neler lazıma devam edelim.
Youtube'dan istatistikleri,videoları çok önemsediğim ve hep elimin altında dursun diye raindrop hesabıma attığım siteleri çekip sayfada göstermek istiyordum. 

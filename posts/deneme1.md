---
title: Deneme
date: 2023-02-02
subtitle: Deneme :)
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

## Kodlama Başlasın!

Next12'de başladığım için **pages** klasörü ile baya haşir neşir oldum. Routing yapısı gerçekten next'in en güçlü özelliklerinden olduğunu düşünüyorum. Component yapıları library'ler post'lar ile gayet güzel bir şekilde devam ederken ilk karşılaştığım problem **axios** ile veri çekmek oldu. Gıcık bir şekilde axios ile çekerken sorun oluşuyordu neyse bunu eski yöntem **fetch** ile aştım. Getstaticprops ile asenkron olarak aldığım verileri gayet güzel bir şekilde prop olarak istediğim yere geçebiliyordum. Videoları çekmekte yada raindrop'a yer imlerini çekmekte zorlanmadım. Contentlayer'dan gelen verileri json ile alıp istediğim gibi yazıları listeleme ve listelediğim yazıların detayına yine next'in router yapısı ile gidebiliyordum.Tabi localde ):

## Sancı Başlıyor

Hiç sorun yaşamadığım sadece ufak tefek tasarım olayları dışında diğer olaylar gayet kolay halloldu fakat localde canavar gibi çalışan site vercel'e deploy ettiğimde fail oluyordu.Yapmadığım optimizasyon denemediğim yöntem nerdeyse kalmamıştı. Getstaticproplara mı bakmadım diğer tüm alt özelliklere mi bakmadım derken sorunun tek bir sayfadan dolayı deploy olmadığını anladım tabi 3 gün saç baş yoldurdu hoş zaten 3-5 tel var :) Sorun contentlayer'da ki allpost olayıydı. O kısmı yani şu an okuduğunuz bloğu yapmadan deploy etmenin anlamı yoktu çözmeye koyuldum fakat girmediğim stackoverflow denemediğim çözüm önerileri kalmamıştı. Vercel'ın kendi github'ında bile soru sordum.Fakat olmadı proje github çöplüğüne gidecekti Contentlayer yüzünden.

## Local Anestezi ve Yeniden Canlanma :)

Artık vazgeçmiştim fakat her vazgeçiş yeni bir başlangıçtır. Next dediğim gibi bir hayal kırıklığına uğratsa da vazgeçmek olmazdı hatta daha günceli ile dedim ve Next 13'e başladım. Tutorial'lar izledim ve next 12 ile boşa uğraşmışım hissi verdi. Gerçekten 12'ye göre daha güzel hissettirdi. Birkaç basit denemeden sonra siteyi Next 13'te denemeye karar verdim. Getstaticprop'lar path'ler gitmiş ve düz asenkron fonksiyonlarla işleri gayet hızlı ve güzel bir şekilde hallediyordunuz. Dosya yapısı da ayrıca hoşuma gitmişti. Tüm ayarlamaları yaptım ve Vercel'a bismillah ile upload ettim.

## Ve Hayatta...

Meğer sorun ilk projede bismillah çekmememmiş :) 2 dakika upload ile başarılı bir şekilde yayınlandı. İnsanlık için minnacık benim için çok güzel bir duyguydu. 3 günün emeği vardı. Velhasıl blog oluştu ve hepsini github'tan bulabilirsiniz. Siz siz olun projeyi bismillahsız vercel'a atmayın :) Tabi birde günceli kullanın. Kalın sağlıcakla.. 

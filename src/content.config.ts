import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// İçerikler dil klasörlerinde tutulur: src/content/blog/tr/... ve /en/...
// Entry id'si "tr/yazi-adi" biçiminde gelir; sayfalar dile göre filtreler.

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  // image() Astro'nun görsel optimizasyonunu açar: yollar markdown dosyasına
  // göre görecelidir, görseller src/content/projects/_images/ altında durur.
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // Ürün tanıtımı ile vaka çalışması aynı koleksiyonda duruyor; ayrım
      // hangi anlatının öne çıkacağını seçebilmek için tutuluyor.
      type: z.enum(['product', 'case-study']).default('product'),
      // Hero'daki tek cümlelik vaat. Yoksa description'a düşülür.
      tagline: z.string().optional(),
      status: z.enum(['live', 'beta', 'development']).default('live'),
      // Künye rozetinde görünen tür (ör. "Mobil uygulama").
      category: z.string().optional(),
      client: z.string().optional(),
      year: z.number().optional(),
      tags: z.array(z.string()).default([]),
      // Ürünün kendi logosu/uygulama ikonu; başlığın yanında gösterilir.
      logo: image().optional(),
      // Liste kartında gösterilen tanıtım görseli.
      cover: image().optional(),
      // Dikey tanıtım videosu: hero'da kapağın yerine oynar (kapak poster
      // olarak kalır). src, public/ altındaki mutlak yoldur — Astro videoyu
      // işlemez, dosya olduğu gibi yayınlanır. uploadDate VideoObject şeması
      // için gerekli (Google zengin sonuç koşulu).
      video: z
        .object({ src: z.string(), uploadDate: z.coerce.date() })
        .optional(),
      // Vaka çalışması kartlarında gösterilen ölçülebilir sonuçlar
      // (ör. { value: '10.000+', label: 'indirme' }). Şerit üç sütun.
      results: z
        .array(z.object({ value: z.string(), label: z.string() }))
        .max(3)
        .default([]),
      // Mağaza bağlantıları links'ten ayrı duruyor: rozetler ve yapılandırılmış
      // veri bu alandan üretiliyor, serbest bağlantı listesinden değil.
      stores: z
        .object({
          appStore: z.string().url().optional(),
          googlePlay: z.string().url().optional(),
          web: z.string().url().optional(),
          // Ürün mağazada yayında ama bağlantı henüz elimizde değilken,
          // rozetin yerini tutar: sayfa düzeni son hâlinde görünür, rozet
          // tıklanamaz olur. Bağlantı gelince ilgili alan doldurulup mağaza
          // bu listeden çıkarılır. Yayına çıkmadan önce boşalması gerekir —
          // dolu kaldığı her derlemede uyarı basılır.
          pending: z.array(z.enum(['appStore', 'googlePlay'])).default([]),
        })
        .default({}),
      // Mağaza puanı. Yalnızca doğrulanmış gerçek değer yazılır: sayfada
      // gösterilmeyen ya da uydurulmuş bir puanı yapılandırılmış veride
      // bildirmek Google'ın kurallarını ihlal eder ve manuel işleme yol açar.
      rating: z
        .object({
          value: z.number().min(0).max(5),
          count: z.number().int().positive(),
        })
        .optional(),
      testimonials: z
        .array(
          z.object({
            quote: z.string(),
            author: z.string(),
            role: z.string().optional(),
          })
        )
        .default([]),
      // Her özellik kendi görseliyle eşleşir; madde listesi değil, dönüşümlü
      // metin/görsel bloğu olarak render edilir.
      features: z
        .array(
          z.object({
            title: z.string(),
            text: z.string(),
            image: image().optional(),
            alt: z.string().optional(),
          })
        )
        .default([]),
      // Fiyat modeli etiketi (ör. { label: 'Ücretsiz' }). Ayrı bir fiyat
      // bölümü yok; bu etiket hero'daki künye rozetinde görünüyor ve
      // şemadaki offers.price'ın sayfada karşılığı oluyor.
      pricing: z.object({ label: z.string() }).optional(),
      faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
      // Ürünün sosyal medya hesapları; başlığın altında ikon olarak çıkar.
      social: z
        .array(
          z.object({
            platform: z.enum(['instagram', 'facebook', 'tiktok', 'youtube']),
            href: z.string().url(),
          })
        )
        .default([]),
      // Mağaza dışı bağlantılar (basında çıkanlar, kaynak kod vb.).
      links: z
        .array(z.object({ label: z.string(), href: z.string().url() }))
        .default([]),
      // SoftwareApplication yapılandırılmış verisinin girdileri; alan boşsa
      // sayfa bu şemayı hiç basmaz.
      app: z
        .object({
          schemaType: z
            .enum(['MobileApplication', 'WebApplication', 'SoftwareApplication'])
            .default('SoftwareApplication'),
          applicationCategory: z.string(),
          operatingSystem: z.string(),
          price: z.string().default('0'),
          priceCurrency: z.string().default('TRY'),
        })
        .optional(),
      // Düzeni görmek için geçici olarak doldurulmuş, gerçek olmayan alanlar.
      // Buraya yazılan alan sayfada görünmeye devam eder ama yapılandırılmış
      // veriye GİRMEZ: uydurma bir puanı ya da yorumu şemada bildirmek
      // Google'ın kurallarını ihlal eder ve manuel işleme yol açar. Ayrıca
      // dolu kaldığı her derlemede uyarı basılır — yayına çıkmadan önce
      // boşalması gerekir.
      placeholderData: z.array(z.enum(['rating', 'testimonials'])).default([]),
      order: z.number().default(0),
      draft: z.boolean().default(false),
    }),
});

export const collections = { blog, projects };

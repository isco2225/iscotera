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
      client: z.string().optional(),
      year: z.number().optional(),
      tags: z.array(z.string()).default([]),
      // Ürünün kendi logosu/uygulama ikonu; başlığın yanında gösterilir.
      logo: image().optional(),
      // Liste kartında gösterilen tanıtım görseli.
      cover: image().optional(),
      // En fazla 3 ekran görüntüsü önerilir — sayfa kalabalıklaşmasın.
      screenshots: z
        .array(z.object({ src: image(), alt: z.string() }))
        .max(4)
        .default([]),
      // Vaka çalışması kartlarında gösterilen ölçülebilir sonuçlar
      // (ör. { value: '10.000+', label: 'indirme' }).
      results: z
        .array(z.object({ value: z.string(), label: z.string() }))
        .default([]),
      // Ürünün sosyal medya hesapları; başlığın altında ikon olarak çıkar.
      social: z
        .array(
          z.object({
            platform: z.enum(['instagram', 'facebook', 'tiktok', 'youtube']),
            href: z.string().url(),
          })
        )
        .default([]),
      // Canlı ürün, mağaza ve kaynak kod bağlantıları.
      links: z
        .array(z.object({ label: z.string(), href: z.string().url() }))
        .default([]),
      order: z.number().default(0),
      draft: z.boolean().default(false),
    }),
});

export const collections = { blog, projects };

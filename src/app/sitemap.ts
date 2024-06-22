import { MetadataRoute } from "next";
import { createClient } from "@/prismicio";

type Params = { uid: string };


export default async function sitemap({ params }: { params: Params }): Promise<MetadataRoute.Sitemap> {
    const client = createClient();
    const page = await client
      .getByUID("catalog_category", params.uid)
    
     
    return [
        {
            url: "https://mebelmassive.com",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: "https://mebelmassive.com/contacts",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: "https://mebelmassive.com/catalog",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: "https://mebelmassive.com/about_us",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: "https://mebelmassive.com/works",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
    ];
}
import type { Product } from "apps/commerce/types.ts";
import Image from "apps/website/components/Image.tsx";
import { formatPrice } from "../../sdk/format.ts";
import { useOffer } from "../../sdk/useOffer.ts";
import WishlistButtonVtex from "../../islands/WishlistButton/vtex.tsx";
import { ProductDetailsPage } from "apps/commerce/types.ts";
import AddToCartButtonVTEX from "../../islands/AddToCartButton/vtex.tsx";
import ImageCulture from "../fallback/ImageCulture.tsx";
import BestProductCard from "../../islands/BestProduct/BestProductCard.tsx";

export interface Props {
  product?: ProductDetailsPage;
  preload?: boolean;
  index?: number;
}

const WIDTH = 300;
const HEIGHT = 300;

export function ErrorFallback({ error }: { error?: Error }) {
  return (
    <ImageCulture
      title="Novidades"
      content="Descubra nossa pagina de Culturas"
      alt="culturas"
      imgDesktop="../banner-desk.jpg"
      imgMobile="../banner-mobile.jpg"
      button={{ href: "/culturas", label: "para saber mais" }}
    />
  );
}
export function LoadingFallback() {
  return <div class="skeleton w-full h-[300px]"></div>;
}

export default function HorizontalProductCard(
  { product, preload, index }: Props,
) {
  if (!product) {
    return null;
  }

  const { url, productID, name, image: images, offers, isVariantOf } =
    product.product;
  const description = product.product.description || isVariantOf?.description;
  const productGroupID = isVariantOf?.productGroupID;
  const [front, back] = images ?? [];
  const { listPrice, price, installments } = useOffer(offers);

  return (
    <div class="w-full h-auto py-9">
      <div class="flex flex-col lg:flex-row gap-6 w-max max-w-[900px] py-3 px-2 border rounded-xl container">
        <Image
          src={front.url!}
          alt={front.alternateName}
          width={WIDTH}
          height={HEIGHT}
          class={`bg-base-100 col-span-full row-span-full rounded w-full duration-100 transition-scale scale-100 lg:group-hover:scale-125 max-w-[250px] m-auto`}
          sizes="(max-width: 640px) 50vw, 20vw"
          preload={preload}
          loading={preload ? "eager" : "lazy"}
          decoding="async"
        />
        <div class="flex flex-col gap-3">
          <h2
            class=" text-2xl font-semibold"
            dangerouslySetInnerHTML={{ __html: name ?? "" }}
          >
          </h2>
          <span dangerouslySetInnerHTML={{ __html: description ?? "" }}></span>
        </div>
        <div class="flex flex-col gap-2">
          <span class=" text-sm line-through">
            {formatPrice(listPrice, offers?.priceCurrency)}
          </span>
          <span>{formatPrice(price, offers?.priceCurrency)}</span>
          <BestProductCard />
          <button class=" btn bg-success">
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  );
}

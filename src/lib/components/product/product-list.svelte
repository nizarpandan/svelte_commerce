<script lang="ts">
	import type { Product } from "$lib/models/product";
	import ProductCard from "./product-card.svelte";

  let products: Product[]= [
    {name: "Basic Tee", color: "Black", price: 35},
    {name: "Basic Tee", color: "Aspen White", price: 35},
    {name: "Basic Tee", color: "Charcoal", price: 35},
    {name: "Artwork Tee", color: "Iso Dots", price: 37}
  ]
</script>

<div class="bg-white">
  <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h2 class="text-2xl font-bold tracking-tight text-gray-900">T-Shirt</h2>
    <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {#each products as product}
        <ProductCard product={product} />
      {/each}
    </div>
  </div>
</div>
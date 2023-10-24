<script lang="ts">
  import ProductDetails from '$lib/components/product/product-details.svelte';
  import type { PageData } from './$types';
	
	export let data: PageData;
</script>

<!-- <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
  <h1>{data.productId}</h1>
  <div>{@html data.content}</div>
</div> -->
<ProductDetails productId={data.productId}/>

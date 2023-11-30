<!-- Products.svelte -->
<script>
  import { onMount } from "svelte";
  import { flip } from "svelte/animate";
  import { cubicIn, quintOut } from "svelte/easing";
  import { tweened } from "svelte/motion";
  import { add, remove, products } from "../store";
  import FilterProduct from "./FilterProduct.svelte";
  import NewProduct from "./NewProduct.svelte";
  import Product from "./Product.svelte";
  import { bubble } from "svelte/internal";

  $: filteredProducts = $products;

  const filter = ({ detail }) => {
    if (detail === "null") {
      filteredProducts = $products;
      return;
    }

    const Available = detail === "true";
    filteredProducts = $products.filter((product) => product.Available === Available);
  };

  const progress = tweened(0, {
    duration: 1000,
    easing: cubicIn,
  });

  onMount(() => {
    progress.set(filteredProducts.length);
  });
</script>

<div class="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen">
  <div class="text-white text-center">
    <h1 class="text-4xl font-semibold pt-4 text-lime-200">List of Products</h1>

    <div class="flex justify-between mx-4 items-center mt-4 ">
      <FilterProduct on:filter={filter} />
      <NewProduct on:newProduct={add} />
    </div>

    <div class="w-[200]px mx-6 mt-4 overflow-hidden">
      <div class="bg-blue-100 h-4 rounded-full" style={`width: ${Math.min($progress * 10, 100)}%`}></div>
    </div>
    
    

    {#each filteredProducts as product, i (product.id)}
      <div animate:flip={{ delay: 250, duration: 1000, easing: quintOut }} class="mt-4">
        <Product on:remove={remove} {product} {i} />
      </div>
    {:else}
      <p class="text-white mt-4">No product found</p>
    {/each}
  </div>
</div>

<!-- Product.svelte -->
<script>
  import { createEventDispatcher } from "svelte";
  import { fly } from "svelte/transition";
  const dispatch = createEventDispatcher();

  export let product;
  export let i;

  const remove = () => {
    dispatch("remove", product.id);
  };
</script>

<div
  transition:fly={{ duration: 1000, x: 200 }}
  class="flex m-5 bg-white border p-2 rounded-lg shadow-md hover:shadow-lg cursor-pointer items-center relative transition-transform transform-gpu"
>
  <button
    on:click={remove}
    class="absolute right-0 top-0 -mt-3 rounded-full w-6 h-6 text-center bg-red-300 text-white text-xs hover:bg-red-700"
    >X
  </button>
  <p class="w-10 text-gray-600 font-bold">{i + 1}</p>
  <img class="rounded-full w-14 h-14 object-cover ml-8" src={product.image} alt={product.name} />
  <div class="ml-4 flex-1">
    <p class="text-lg font-semibold text-blue-500">{product.name}</p>
    <p class="text-sm text-gray-500">{product.category}</p>
    <p class="text-sm text-gray-500">{product.number} ft</p>
  </div>
</div>

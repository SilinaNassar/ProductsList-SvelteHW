<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  const filter = (e) => {
    dispatch("filter", e.target.value);
  };
</script>

<div class="mt-4 flex items-center text-black">
  <label for="Productfilter" class="mr-2 text-lg font-semibold">Filter Products:</label>
  <select
    on:change={filter}
    name="filter"
    id="Userfilter"
    class="border rounded-lg px-4 py-2 bg-gray-100 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
  >
    <option value={null} class="text-gray-800">All</option>
    <option value={true} class="text-green-500">Available</option>
    <option value={false} class="text-red-500">Not Available</option>
  </select>
</div>

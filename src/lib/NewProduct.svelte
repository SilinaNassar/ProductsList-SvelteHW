<script>
  import { createEventDispatcher } from "svelte";
  import Modal from "./Modal.svelte";
  const dispatch = createEventDispatcher();

  let newProduct = {};

  $: disableSubmitButton = !newProduct.name || !newProduct.category;

  let showModal = false;

  function handleForm() {
    dispatch("newProduct", newProduct);
    showModal = false;
  }
</script>

<div class="mt-4">
  <button
    on:click={() => (showModal = true)}
    class="px-4 py-1 bg-purple-700 text-white rounded cursor-pointer"
    >New Product</button
  >

  {#if showModal}
    <Modal on:close={() => (showModal = false)} on:submit={handleForm}>
      <h1 class="text-2xl text-center">Create new product</h1>
      <div class="py-1 px-2 my-4">
        <label for="">Name</label>
        <input
          bind:value={newProduct.name}
          type="text"
          class="px-2 py-1 w-full rounded border"
        />
      </div>

      <div class="py-1 px-2 my-4">
        <label for="">Category</label>
        <input
          bind:value={newProduct.category}
          type="text"
          class="px-2 py-1 w-full rounded border"
        />
      </div>

      <div class="py-1 px-2 my-4">
        <label for="">Price</label>
        <input
          bind:value={newProduct.number}
          type="number"
          class="px-2 py-1 w-full rounded border"
        />
      </div>

      <div class="py-1 px-2 my-4 flex justify-between">
        <label for="true">Available:</label>
        <div class="flex">
          <label for="true">Yes</label>
          <input
            type="radio"
            value={true}
            id="true"
            bind:group={newProduct.Available}
            name="active"
            class="px-2 py-1 w-full rounded border mx-5"
          />
          <label for="false">No</label>
          <input
            type="radio"
            value={false}
            id="false"
            bind:group={newProduct.Available}
            name="active"
            class="px-2 py-1 w-full rounded border mx-5"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={disableSubmitButton}
        id="submit-button"
        slot="right-button"
        class="px-2 py-1 bg-blue-800 text-white rounded">Create</button
      >
    </Modal>
  {/if}
</div>

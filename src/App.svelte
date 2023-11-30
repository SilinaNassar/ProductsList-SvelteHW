<script>
  import { Link, Route, Router } from "svelte-navigator";
  import HomePage from "./page/HomePage.svelte";
  import ProductPage from "./page/ProductPage.svelte";
</script>

<Router>
  <nav class="flex p-4 bg-purple-500 text-white justify-between">
    <Link class="mx-24 cursor-pointer hover:underline" to="/">Home</Link>
    <Link class="mx-24 cursor-pointer hover:underline" to="/users">Products</Link>
  </nav>

  <Route path="/">
    <HomePage />
  </Route>
  <Route path="/users">
    <ProductPage />
  </Route>
</Router>

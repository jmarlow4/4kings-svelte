<script>
  import { SuitsEnum } from "../enums/index.js";
  import { onMount } from 'svelte';

  export let suit;
  export let value;

</script>

<div class="card" class:is-red="{SuitsEnum[suit].isRed}">
  <span class="suit">
    {SuitsEnum[suit].symbol}
  </span>
  <span>{value}</span>
</div>

<style>
  .card {
    line-height: 1.5rem;
    padding: 10px 16px;
    margin: 8px 16px;
    background-color: #fff;
    box-shadow: 0px 3px 3px -2px #888;
    border-radius: 5px;
  }
  .suit {
    font-size: 2rem;
  }
  .is-red {
    color: #ef2333;
  }
</style>
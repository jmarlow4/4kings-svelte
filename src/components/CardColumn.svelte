<script>
  export let symbol;
  export let isRed;
</script>

<div class="card-column" class:is-red="{isRed}">
  <span class="suit">{symbol}</span>
</div>
<slot></slot>

<style>
  .card-column {
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 16px;
    width: 20%;
  }
  .suit {
    display: flex;
    align-self: center;
    font-size: 3rem;
  }
  .is-red {
    color: #ef2333;
  }
</style>
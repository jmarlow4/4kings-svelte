<div class="columns-container">
  <slot></slot>
</div>

<style>
  .columns-container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 40px;
    align-items: stretch;
    margin: 40px auto 0;
    max-width: 1200px;
    min-width: 886px;
  }
</style>

<div class="layout">
  <main>
    <slot></slot>
  </main>

  <footer>
    <hr />
    <!-- <a href="mailto:christian@rainflame.com">christian@rainflame.com</a> -->
    <!-- <span> &copy; 2016-{new Date().getFullYear()} Christian Broms </span> -->
  </footer>
</div>

<style>
  .layout {
    margin: 40px;
  }

  hr {
    margin-top: 50px;
    margin-bottom: 20px;
  }

  footer {
    color: grey;
    font-size: 14px;
  }
</style>

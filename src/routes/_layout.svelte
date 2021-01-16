<div class="layout">
  <main>
    <slot />
  </main>

  <footer>
    <hr />
    <span class="footer-thing">
      &copy; 2016-{new Date().getFullYear()} Christian Broms
    </span>
    <span class="footer-thing">~ <a href="/">about</a></span>
    <span class="footer-thing">
      ~
      <a
        href="https://archive.christianbroms.com"
        target="_blank"
        rel="noopener">archive</a
      >
    </span>
    <span class="footer-thing">
      ~
      <a href="https://github.com/cbroms" target="_blank" rel="noopener">code</a
      >
    </span>
  </footer>
</div>

<style>
  .footer-thing {
    padding-right: 10px;
    padding-top: 10px;
    display: inline-block;
  }

  .footer-thing > a {
    color: rgb(170, 170, 170);
  }

  .layout {
    margin: 40px;
  }

  hr {
    margin-top: 50px;
    margin-bottom: 20px;
  }

  footer {
    color: rgb(170, 170, 170);
    font-size: 14px;
  }
</style>

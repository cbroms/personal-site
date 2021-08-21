<svelte:head>
  <link rel="stylesheet" href="global.css" />
</svelte:head>

<div class="layout">
    <slot />
  <footer>
    <span class="footer-thing">
      &copy; 2016-{new Date().getFullYear()} Christian Broms
    </span>
    <span class="footer-thing"><a href="/">about</a></span>
    <span class="footer-thing">
      <a href="/projects/">projects</a>
    </span>
    <span class="footer-thing">
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

  .layout {
    margin: 40px;
  }

  footer {
    margin-top: 50px;
    padding-top: 20px;
    border-top: 2px solid var(--dark);
    font-size: 14px;
  }
</style>

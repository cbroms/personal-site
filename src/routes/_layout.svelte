<div class="layout">
  <main>
    <slot></slot>
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
        rel="noopener noreferrer"
        >archive</a
      >
    </span>
    <span class="footer-thing">
      ~
      <a
        href="https://github.com/cbroms"
        target="_blank"
        rel="noopener noreferrer"
        >code</a
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
    color: grey;
  }

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

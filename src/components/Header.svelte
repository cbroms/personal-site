<script>
  export let page;
</script>

<header>
  <span class="header-thing">Christian Broms</span>
  <nav class="menu">
    <div class="header-thing">
      <a href="/">about</a>
      <div class="circle" class:invisible={page === "projects"} />
    </div>
    <div class="header-thing">
      <a href="/projects/">projects</a>
      <div class="circle" class:invisible={page === "index"} />
    </div>
  </nav>
</header>

<style>
  .circle {
    height: 20px;
    width: 20px;
    margin-left: 15px;
    border-radius: 50%;
    background-color: var(--dark);
    display: inline-block;
  }

  .circle.invisible {
    background-color: transparent;
  }

  .header-thing {
    display: flex;
    padding: 5px 0;
  }

  .header-thing > a {
    width: 75px;
    text-align: right;
  }

  header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    max-width: 640px;
    border-bottom: 2px solid var(--dark);
    padding-bottom: 20px;
    margin-bottom: 60px;
  }
</style>

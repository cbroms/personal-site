<script>
  const description =
    "I design and build digital spaces. This year I'm building twelve small websites, one per month. I co-designed and built Pith, an experimental branching discussion space.";
</script>

<svelte:head>
  <title>Christian Broms</title>
  <link rel="canonical" href="https://christianbroms.com" />
  <meta property="og:url" content="https://christianbroms.com" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Christian Broms" />
  <meta name="Description" content={description} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content="cb.png" />
</svelte:head>

<main>
  <div class="content">
    <div>Christian Broms</div>
    <div><em>I design and build websites.</em></div>
    <div class="indented">
      <div>
        I'm a product designer at <a href="https://10xgenomics.com"
          >10x Genomics</a
        >
      </div>
      <div>
        I like making little websites. A few you might check out are <a
          href="https://pith.is">pith</a
        >, <a href="https://classicinterfaces.com">classicinterfaces</a>,
        <a href="https://twelvewebsites.com">twelvewebsites</a>, and
        <a href="https://simplest.page">simplest.page</a>.
      </div>
      <div>
        I recently graduated from <a href="https://cmu.edu"
          >Carnegie Mellon University</a
        > having studied Cognitive Science, Art, and Human-Computer Interaction.
      </div>
      <div>
        <a href="mailto:cb@christianbroms.com">cb@christianbroms.com</a>
      </div>
    </div>
  </div>
</main>

<style>
  :global(body) {
    margin: 0;
  }

  main {
    min-height: 100vh;
    min-width: 100vw;
    color: white;
    background-color: #2d1a14;
    font-family: Times, serif;
    font-size: 18px;
  }

  .content {
    padding: 32vh 20vw 40px 20vw;
  }

  .indented {
    max-width: 312px;
    /* padding-left: 119px; */
    padding-top: 50px;
  }

  div {
    padding: 12px 0;
  }

  a {
    color: white;
  }

  a:visited {
    color: white;
  }
</style>

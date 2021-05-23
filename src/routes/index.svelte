<script>
  import Header from "../components/Header.svelte";
  import ProjectPreview from "../components/ProjectPreview.svelte";

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

<main class="content">
  <Header page="index" />

  <h1>I design and build digital spaces.</h1>

  <div class="big">
    <h4 class="section-header">Previously &mdash;</h4>
    <p>
      I co-designed and built <a href="https://pith.is" target="_blank">Pith</a
      >, an experimental branching discussion space.
    </p>

    <p>
      This May I graduated from Carnegie Mellon University with a degree in
      Cognitive Science and Art and an additional major in Human-Computer
      Interaction.
    </p>
    <p>
      Last year I designed and implemented <a
        href="/projects/webet"
        target="_blank">WebET</a
      >, an eye tracking system designed to provide a cheap, fast, and
      quantitative solution to distributed website usability testing. I worked
      on the project as a Porges Research Fellow at CMU.
    </p>
    <h4 class="section-header">Now &mdash;</h4>
    <p>
      This year I'm building <a
        href="https://twelvewebsites.com"
        target="_blank">twelve small websites</a
      >, one per month.
    </p>
    <p>
      I'll be joining <a href="https://www.10xgenomics.com/" target="_blank"
        >10x Genomics</a
      >
      as a product designer this July.
    </p>
    <h4 class="section-header">Contact &mdash;</h4>

    <p>
      I can be reached at
      <a href="mailto:cb@christianbroms.com">cb@christianbroms.com</a>.
    </p>
    <p>
      You can find my day-to-day process on <a
        href="https://futureland.tv/christian/"
        target="_blank">Futureland</a
      >, a space I'm helping build.
    </p>
  </div>
</main>

<style>
  h1 {
    font-size: 3.5rem;
  }

  .content {
    margin: 0 auto;
  }

  .section-header {
    font-size: 0.75rem;
    text-transform: uppercase;
    margin-bottom: 0;
    margin-top: 2.5rem;
  }
</style>

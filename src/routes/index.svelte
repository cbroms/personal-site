<script>
  const description =
    "I design and build digital spaces that aim to be understandable, well-structured, and resonant. I'm particularly interested in spaces for discussing, reading, reflecting, searching, exploring, and analyzing. Visit some of my past projects and other links";
</script>

<svelte:head>
  <title>Christian Broms</title>
  <link rel="canonical" href="https://christianbroms.com" />
  <meta property="og:url" content="https://christianbroms.com" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Christian Broms" />
  <meta name="Description" content={description} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content="/cb.png" />
</svelte:head>

<main class="content">
  <header>
    <span class="header-thing">Christian Broms</span>
    <!--  -->
    <span class="menu">
      <div class="header-thing">
        <a href="/">about</a>
        <div class="circle" />
      </div>
      <div class="header-thing">
        <a href="https://archive.christianbroms.com">projects</a>
        <div class="circle invisible" />
      </div>
    </span>
  </header>
  <hr />

  <h1>I design and build digital spaces.</h1>

  <div class="big">
    <p>
      I'm
      <a
        href="https://archive.christianbroms.com/project/pith"
        target="_blank"
        rel="noopener">currently working</a
      >
      on the
      <a href="https://pith.is/" target="_blank" rel="noopener">Pith</a>
      conversation space, an experimental system for branching online discussions.
    </p>
    <p>
      Last year I designed and implemented <a
        href="https://archive.christianbroms.com/project/webet"
        target="_blank"
        rel="noopener">WebET</a
      >, an end-to-end eye tracking system for distributed website usability
      testing while I was an Undergraduate Research Fellow at Carnegie Mellon.
    </p>

    <p>
      A few other projects I've finished up recently include <a
        href="https://archive.christianbroms.com/project/wikiviz"
        target="_blank"
        rel="noopener">Wikiviz</a
      >, a hyperlink-based viewer for Wikipedia pages, and
      <a
        href="https://archive.christianbroms.com/project/stratus"
        target="_blank"
        rel="noopener">Stratus</a
      >, an augmented reality app for weather visualization. You can find all
      the projects I've worked on and contributed to on
      <a
        href="https://archive.christianbroms.com/"
        target="_blank"
        rel="noopener">my project archive</a
      >.
    </p>

    <p>
      I'm studying Cognitive Science, Art, and Human-Computer Interaction at
      Carnegie Mellon University in Pittsburgh, Pennsylvania. I'll be graduating
      in 2021.
    </p>
    <p>
      Some activities I enjoy include
      <a
        href="https://futureland.tv/christian/gaze-interface"
        target="_blank"
        rel="noopener">creating</a
      >
      interfaces that can be controlled with your eyes,
      <a
        href="https://futureland.tv/christian/hyperfov"
        target="_blank"
        rel="noopener">exploring</a
      >
      how the internet is explored, and
      <a
        href="https://futureland.tv/christian/breadmaking"
        target="_blank"
        rel="noopener">making</a
      >
      bread. This year I've also set a goal of building twelve (minimal) websites,
      one per month. You can
      <a
        href="https://futureland.tv/christian/twelve-websites"
        target="_blank"
        rel="noopener">follow my progress on Futureland</a
      >.
    </p>
    <p>
      I can be reached at
      <a href="mailto:cb@christianbroms.com">cb@christianbroms.com</a>.
    </p>
  </div>
</main>

<style>
  .circle {
    height: 20px;
    width: 20px;
    margin-left: 15px;
    border-radius: 50%;
    background-color: #e5e1e0;
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
  }
  hr {
    margin: 30px 0;
  }

  .big {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
  h1 {
    font-size: 3.5rem;
  }

  .content {
    margin: 0 auto;
  }
</style>

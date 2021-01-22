<script>
  import Header from "../components/Header.svelte";
  import ProjectPreview from "../components/ProjectPreview.svelte";

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
  <meta property="og:image" content="cb.png" />
</svelte:head>

<main class="content">
  <Header page="index" />

  <h1>I design and build digital spaces.</h1>

  <div class="big">
    <p>
      I'm
      <a href="/projects/pith/">currently working</a>
      on the
      <a href="https://pith.is/" target="_blank" rel="noopener">Pith</a>
      conversation space, an experimental system for branching online discussions.
    </p>
    <p>
      Last year I designed and implemented <a href="/projects/webet/">WebET</a>,
      an end-to-end eye tracking system for distributed website usability
      testing while I was a Porges Research Fellow at Carnegie Mellon's
      Human-Computer Interaction Institute.
    </p>

    <ProjectPreview
      image="/static/images/webet/et-flow-trace-mid.jpg"
      title="WebET"
      subtitle="An end-to-end system for facilitating website usability testing using a novel approach to eye tracking for the web."
      link="/projects/webet/"
    />

    <p>
      A few other projects I've finished up recently include <a
        href="/projects/wikiviz/">Wikiviz</a
      >, a hyperlink-based viewer for Wikipedia pages, and
      <a href="/projects/stratus/">Stratus</a>, an augmented reality app for
      weather visualization.
    </p>

    <ProjectPreview
      image="/static/images/stratus/interact-mid.jpg"
      title="Stratus"
      subtitle="An augmented reality app that visualizes the latest METAR weather report from any airport in the United States."
      link="/projects/stratus/"
    />

    <p>
      I'm studying Cognitive Science, Art, and Human-Computer Interaction at
      Carnegie Mellon University in Pittsburgh, Pennsylvania. I'll be graduating
      in 2021.
    </p>

    <ProjectPreview
      image="/static/images/ux-19-20/chatbot-mid.jpg"
      title="Four UX Projects"
      subtitle="A selection of four UX projects from my HCI coursework, fall '19 through spring '20."
      link="/projects/ux-19-20/"
    />
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
        rel="noopener">follow my progress</a
      >.
    </p>
    <p>
      I can be reached at
      <a href="mailto:cb@christianbroms.com">cb@christianbroms.com</a>.
    </p>
  </div>
</main>

<style>
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

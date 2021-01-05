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
  <meta name="Description" content="{description}" />
  <meta property="og:description" content="{description}" />
  <meta property="og:image" content="/cb.png" />
</svelte:head>

<div class="content">
  <header>
    <span class="header-thing">Christian Broms</span>
    <hr />
  </header>

  <h1>I design and build digital spaces.</h1>
  <!--   <p>
   I'm
    particularly interested in spaces for discussing,
    searching, exploring, and analyzing.
  </p>
 -->

  <p>Here are three spaces I've made:</p>
  <ul>
    <li>
      <strong
        ><a
          href="https://archive.christianbroms.com/project/webet"
          target="_blank"
          rel="noopener noreferrer"
          >WebET</a
        ></strong
      >: an eye tracking system for distributed usability testing.
    </li>
    <li>
      <strong
        ><a
          href="https://archive.christianbroms.com/project/wikiviz"
          target="_blank"
          rel="noopener noreferrer"
          >Wikiviz</a
        ></strong
      >: a hyperlink-based viewer for Wikipedia pages.
    </li>
    <li>
      <strong
        ><a
          href="https://archive.christianbroms.com/project/stratus"
          target="_blank"
          rel="noopener noreferrer"
          >Stratus</a
        ></strong
      >: an augmented reality app for weather visualization.
    </li>
  </ul>

  <p>
    I'm currently working on the
    <a href="https://pith.is/" target="_blank" rel="noopener noreferrer"
      >Pith</a
    >
    conversation space, an experimental system for branching online discussions.
  </p>
  <p>
    I'm also studying Cognitive Science, Art, and Human-Computer Interaction at
    Carnegie Mellon University in Pittsburgh, Pennsylvania. I'll be graduating
    in 2021.
  </p>
  <p>
    Some activities I enjoy include
    <a
      href="https://futureland.tv/christian/gaze-interface"
      target="_blank"
      rel="noopener noreferrer"
      >creating interfaces that can be controlled with your eyes</a
    >,
    <a
      href="https://futureland.tv/christian/hyperfov"
      target="_blank"
      rel="noopener noreferrer"
      >exploring how the internet is explored</a
    >,
    <a
      href="https://futureland.tv/christian/twelve-websites"
      target="_blank"
      rel="noopener noreferrer"
      >building minimal websites</a
    >, and
    <a
      href="https://futureland.tv/christian/breadmaking"
      target="_blank"
      rel="noopener noreferrer"
      >making bread</a
    >.
  </p>
</div>

<style>
  hr {
    margin: 30px 0;
  }

  h1 {
    font-size: 3.5rem;
  }

  .content {
    margin: 0 auto;
  }

  .header-thing {
    display: block;
    padding: 5px 0;
  }

  ul {
    margin: 25px 0;
  }

  li {
    padding: 10px 0;
    padding-left: 5px;
  }
</style>

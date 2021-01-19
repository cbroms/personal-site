<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].html
    const res = await this.fetch(`projects/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import Header from "../../components/Header.svelte";
  export let post;
</script>

<svelte:head>
  <title>{post.title} / Christian's Project Archive</title>
  <link
    rel="canonical"
    href={`https://christianbroms.com/projects/${post.slug}`}
  />
  <meta
    property="og:url"
    content={`https://christianbroms.com/projects/${post.slug}`}
  />
  <meta property="og:type" content="article" />
  <meta property="og:title" content={post.title || post.title} />
  <meta name="Description" content={post.excerpt || post.title} />
  <meta property="og:description" content={post.excerpt} />
  <meta property="og:image" content={post.image} />
</svelte:head>

<Header page="projects" />

<main>
  <div>
    <p>{post.printDate}</p>
    <h1 class="title">{post.title}</h1>
    <!-- <p><strong>{post.excerpt ? "Summary" : ""}</strong></p> -->
    <p class="excerpt"><em>{post.excerpt || ""}</em></p>
  </div>

  <div class="container">
    <article class="content">{@html post.html}</article>
  </div>
</main>

<style>
  .container {
    padding-top: 30px;
    max-width: 640px;
  }
  .title {
    font-size: 3.5rem;
  }
  .excerpt {
    padding-bottom: 10px;
  }
</style>

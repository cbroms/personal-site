<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`/projects.json`)
      .then((r) => r.json())
      .then((posts) => {
        const featured = posts.filter((post) => post.featured);
        const nextYearBreakLookup = {};

        posts.map((post, index) => {
          if (index < posts.length - 1) {
            const nextPost = posts[index + 1];
            const nextYear = new Date(nextPost.printDate).getFullYear();
            const thisYear = new Date(post.printDate).getFullYear();
            if (nextYear !== thisYear) {
              nextYearBreakLookup[index] = nextYear;
            }
          }
        });
        return { posts, nextYearBreakLookup, featured };
      });
  }
</script>

<script>
  import Header from "../../components/Header.svelte";
  // import ViewPicker from "../../components/ViewPicker.svelte";
  import GridListItem from "../../components/GridListItem.svelte";
  import GridListYearBreak from "../../components/GridListYearBreak.svelte";

  export let posts;
  export let nextYearBreakLookup;
  export let featured;

  let description =
    "This is a repository of nearly all the projects I've worked on over the past few years, both small and large. It's a mix of websites, games, experiments, writing, and other assorted articles.";

  let view = "list";

  // function changeView(newView) {
  //   view = newView;
  // }
</script>

<svelte:head>
  <title>Christian's Project Archive</title>
  <link rel="canonical" href={`https://christianbroms.com/projects/`} />
  <meta property="og:url" content={`https://christianbroms.com/projects/`} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Christian's Project Archive" />
  <meta name="Description" content={description} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content="cb.png" />
</svelte:head>

<Header page="projects" />

<main>
  <h1 class="title">My Project Archive</h1>
  <p>
    This is a repository of nearly all the projects I've worked on over the past
    few years, both small and large. It's a mix of websites, games, experiments,
    writing, and other assorted articles.
  </p>

  <!-- <ViewPicker {view} {changeView} /> -->

  <h2 class="project-section-header">Featured projects</h2>
  <div class="content">
    {#each featured as post}
      <GridListItem {post} {view} />
    {/each}
  </div>

  <h2 class="project-section-header">All projects</h2>
  <div class="content">
    {#each posts as post, i}
      {#if i === 0}
        <GridListYearBreak
          year={new Date(post.printDate).getFullYear()}
          {view}
        />
      {/if}
      <GridListItem {post} {view} />
      {#if nextYearBreakLookup[i]}
        <GridListYearBreak year={nextYearBreakLookup[i]} {view} />
      {/if}
    {/each}
  </div>
</main>

<style>
  .project-section-header {
    margin-top: 50px;
  }
  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    max-width: 940px;
  }

  .title {
    font-size: 3.5rem;
  }
</style>

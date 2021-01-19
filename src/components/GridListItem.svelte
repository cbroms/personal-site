<script>
  export let view;
  export let post;

  let loaded = false;
  let timeout = null;
  let hovered = false;

  const onLoad = () => {
    loaded = true;
  };
</script>

<a
  class="item {`${view}`}"
  class:loading={!loaded && view === "grid"}
  href="projects/{post.slug}"
  title="Project: {post.title}">
  {#if view === "grid"}
    <img src={post.smallImage} alt={post.slug} on:load={onLoad} />
  {:else}
    <div
      class="post-line"
      on:mouseover={() => (hovered = true)}
      on:mouseleave={() => (hovered = false)}
    >
      <div class="post-date">{post.shortDate}</div>
      <div class="post-type">{post.category}</div>
      <div class="post-title">{post.title}</div>
    </div>
  {/if}
</a>

{#if view === "list"}
  <div class="post-description">
    {#if hovered && post.excerpt}
      <div>
        <p class="post-excerpt">{post.excerpt}</p>
      </div>
    {/if}
  </div>
{/if}

<style>
  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  .item {
    display: inline-block;
    width: 175px;
    height: 175px;
    display: flex;
    justify-content: left;
    align-items: center;
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }

    50% {
      opacity: 0.7;
    }

    100% {
      opacity: 1;
    }
  }

  .loading {
    margin-right: 10px !important;
    margin-bottom: 10px !important;
    background-color: grey !important;
    animation-name: pulse;
    animation-duration: 2s;
    animation-timing-function: ease-out;
    animation-iteration-count: infinite;
  }

  .grid {
    padding: 0;
    margin: 0;
    margin-top: 10px;
    margin-right: 20px;
  }

  .list {
    width: 640px;
    height: auto;
    flex-grow: 1;
  }

  img {
    min-width: 0;
    max-width: 100%;
    max-height: 100%;
    width: auto;
  }

  .post-description {
    padding-top: 5px;
    padding-left: 20px;
    max-height: 40px;
    display: block;
    width: 280px;
  }

  .post-line {
    padding: 20px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 640px;
  }

  .post-title {
    width: 100%;
    font-weight: bold;
    max-width: 340px;
  }

  .post-excerpt {
    width: 100%;
    max-width: 340px;
  }

  .post-date {
    width: 100px;
  }

  .post-type {
    width: 100px;
  }

  @media (max-width: 1100px) {
    .post-description {
      display: none;
    }

    .list {
      width: 100%;
    }

    .post-line {
      justify-content: left;
      border-left: 2px solid grey;
      padding-left: 20px;
      margin: 10px 0;
    }

    .post-title {
      font-size: 120%;
      font-weight: bold;
      flex-grow: 2;
      margin-top: 20px;
    }
    .post-date {
      width: 100px;
    }
    .post-type {
      width: 100px;
    }
  }

  @media (min-width: 642px) and (max-width: 1100px) {
    .post-title {
      margin-top: 0;
    }
    .post-line {
      justify-content: space-between;
    }
  }
</style>

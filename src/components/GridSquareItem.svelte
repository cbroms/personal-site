<script>
  export let post;
</script>

<a class="item " href="projects/{post.slug}">
  <div class="post-square">
    {#if post.featured}
      <div class="post-featured">
        <span class="featured-circle" />
        <div class="post-type">Featured {post.category}</div>
      </div>
    {:else}
      <div class="post-type">{post.category}</div>
    {/if}
    <h4 class="post-title">{post.title}</h4>
    <p class="post-excerpt">{post.excerpt}</p>
  </div>
</a>

<style>
  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  .item {
    margin: 30px 0;
    width: 300px;
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

  .post-title {
    width: 100%;
    /* font-size: 110%;
    font-weight: bold; */
  }

  .post-excerpt {
    width: 100%;
  }

  .post-type {
    display: inline-block;
    font-size: 14px;
  }
  .post-featured {
    display: inline-block;
    font-size: 14px;
  }

  .featured-circle {
    background-color: rgb(76, 112, 190);
    height: 10px;
    width: 10px;
    border-radius: 50%;
    display: inline-block;
    margin-right: 5px;
  }

  /* @media (max-width: 1100px) {
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
  } */
</style>

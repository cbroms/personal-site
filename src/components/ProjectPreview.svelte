<script>
  export let image;
  export let title;
  export let subtitle = "";
  export let link = "#";
</script>

<div class="project-preview">
  <a href={link}>
    <img src={image} alt={title} />
    <div class="preview-text">
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <p>See the project &rarr;</p>
    </div>
  </a>
</div>

<style>
  div {
    box-sizing: border-box;
  }
  img {
    width: 100%;
    max-width: 300px;
    border: 2px solid var(--dark);
    margin: 0;
  }
  .project-preview {
    width: 100%;
    max-width: 640px;
    border: none;
    margin: 40px 0;
  }

  a:hover > .preview-text {
    border: 2px solid var(--dark);
    border-left: none;
  }

  h3,
  a {
    color: var(--dark);
    text-decoration: none;
  }

  a {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .preview-text {
    border: 2px solid transparent;
    border-left: none;
    font-size: 1rem;
    line-height: 1rem;
    max-width: 340px;
    padding: 0 20px;
  }

  @media (max-width: 720px) {
    .preview-text {
      padding-left: 0;
      max-width: 300px;
    }

    a {
      justify-content: center;
    }

    a:hover > .preview-text {
      border: 2px solid transparent;
      border-left: none;
    }
  }
</style>

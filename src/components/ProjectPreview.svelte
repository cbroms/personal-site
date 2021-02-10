<script>
  export let image;
  export let title;
  export let smallMargin = false;
  export let subtitle = "";
  export let link = "#";
</script>

<div class="project-preview" class:small-margin={smallMargin}>
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
    object-fit: cover;
    width: 100%;
    max-width: 300px;
    border: 2px solid var(--dark);
    margin: 0;
    height: 200px;
    -webkit-filter: grayscale(1);
    filter: grayscale(1);
  }
  .project-preview {
    width: 100%;
    max-width: 640px;
    border: none;
    margin: 40px 0;
  }

  .small-margin {
    margin: 20px 0;
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
    height: 200px;
  }

  .preview-text {
    border: 2px solid transparent;
    border-left: none;
    font-size: 16px;
    line-height: initial;
    max-width: 340px;
    width: 100%;
    padding: 0 20px;
  }

  @media (max-width: 720px) {
    .preview-text {
      max-width: 340px;
    }

    a {
      justify-content: center;
      height: 340px;
    }

    a:hover > .preview-text {
      border: 2px solid transparent;
      border-left: none;
    }
  }

  @media (max-width: 500px) {
    img,
    .preview-text {
      padding-left: 0;
      max-width: 100%;
    }
  }
</style>

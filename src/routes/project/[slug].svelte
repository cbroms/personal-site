<script context="module">
  export async function preload({ params }) {
    return this.redirect(302, `projects/${params.slug}`);
  }
</script>

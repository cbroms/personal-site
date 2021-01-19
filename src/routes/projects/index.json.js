import posts from "./_posts.js";

const contents = JSON.stringify(
  posts.map((post) => {
    // let image =
    //   post.image !== undefined ? post.image.split(".") : ["default", "jpg"];
    // let smallImage = image[0] + "-thumb.jpg";
    // // let mediumImage = image[0] + "-mid.jpg"

    // if (image[1] === "gif") {
    //   smallImage = image[0] + "-gif-mid.jpg";
    //   // mediumImage = image[0] + "-mid.gif"
    // }

    return {
      title: post.title,
      slug: post.slug,
     // smallImage: smallImage,
      category: post.category,
      shortDate: post.shortDate,
      printDate: post.printDate,
      featured: post.featured,
      excerpt: post.excerpt,
    };
  })
);

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(contents);
}

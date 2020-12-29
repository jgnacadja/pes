module.exports = {
  // Create posts from markdown files
  use: "@gridsome/source-filesystem",
  options: {
    typeName: "Category",
    path: "content/categories/*.md",
    refs: {
      // Creates a GraphQL collection from 'categories' in front-matter and adds a reference.
      categories: {
        typeName: "Category",
        create: true,
      },
    },
  },
};

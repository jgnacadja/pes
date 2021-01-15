module.exports = {
    // Create posts from markdown files
    use: "@gridsome/source-filesystem",
    options:
    {
        typeName: "Blog",
        path: "content/blog/*.md",
        refs: {
            // Creates a GraphQL collection from 'categories' in front-matter and adds a reference.
            blogs: {
                typeName: "BlogPost",
                create: true,
            }
        }
    }
};

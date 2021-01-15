module.exports = {
    // Create posts from markdown files
    use: "@gridsome/source-filesystem",
    options:
    {
        typeName: "Post",
        path: "content/blog/*.md",
        refs: {
            // Creates a GraphQL collection from 'categories' in front-matter and adds a reference.
            posts: {
                typeName: "Post",
                create: true,
            }
        }
    }
};

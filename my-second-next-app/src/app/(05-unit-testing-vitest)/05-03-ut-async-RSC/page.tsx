interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function getPosts(): Promise<Post[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 3600 }, // Cache for 1 hour
  });

  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }

  return response.json();
}

// Async React Server Component
export default async function AsyncServerComponent() {
  const posts = await getPosts();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4" data-testid="blog-title">
        Blog Posts
      </h1>
      <div className="grid gap-4" data-testid="posts-container">
        {posts.map((post) => (
          <article
            key={post.id}
            className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
            data-testid={`post-${post.id}`}
          >
            <h2
              className="text-xl font-semibold mb-2"
              data-testid={`post-title-${post.id}`}
            >
              {post.title}
            </h2>
            <p className="text-gray-600" data-testid={`post-body-${post.id}`}>
              {post.body}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

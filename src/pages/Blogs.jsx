import useFetch from "../hooks/useFetch";

function Blogs() {
  const { postData, error } = useFetch();

    if (error) {
      return <div>Error: {error}</div>;
    }

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold my-5">Custom Hooks - UseFetch - Our Blogs</h2>
      {postData && postData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {postData.map((post) => (
            <div key={post.id}>
              <div className="border rounded-lg p-4 shadow hover:shadow-lg transition mb-4 bg-white">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-700">{post.body}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-gray-500 text-center">
          No posts available - <a className="text-blue-500 hover:underline" href="/">Go back to home</a>
          {error && <div className="text-red-500">{error}</div>}
        </div>
      )}

    </div>
  );
}

export default Blogs;
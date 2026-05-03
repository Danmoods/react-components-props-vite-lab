import Article from "./Article";

function ArticleList({ articles = [] }) {
  return (
    <main>
      {articles.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </main>
  );
}

export default ArticleList;
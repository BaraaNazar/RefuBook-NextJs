import React, { useEffect, useState } from 'react';
import SingleblogPage from '../singleBlogPage';

function BlogsPage() {
  const [content, setContent] = useState([]);
  
  return (
    <div>
      <div>
        {content &&
          content.map((articleInfo) => {
            return <SingleblogPage key="" articleInfo={articleInfo} />;
          })}
      </div>
    </div>
  );
}
export default BlogsPage;

'use client';
// components/BlogPost.tsx
import React, { useEffect, useState } from 'react';
import { Timestamp, doc, getDoc } from 'firebase/firestore';
import { db } from '../../utils/firebase';

interface BlogPostProps {
  postId: string;
}

interface BlogPostData {
  id?: string;
  title: string;
  date?: string; // string型
  content: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ postId }) => {
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const docRef = doc(db, 'posts', postId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data() as BlogPostData;

          let dateString = '';
          if (data.date && typeof data.date === 'object' && 'toDate' in data.date) {
            dateString = (data.date as Timestamp).toDate().toDateString();
          }

          setPost({
            ...data,
            id: docSnap.id,
            date: dateString,
          });
        } else {
          setError(new Error('Document does not exist'));
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!post) return <div>Post not found.</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <h2>{post.date}</h2>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;

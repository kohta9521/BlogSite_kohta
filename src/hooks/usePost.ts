import { useState, useEffect } from 'react';
import { doc, getDoc, DocumentData } from 'firebase/firestore';
import { db } from '../utils/firebase';

const usePost = <T extends { id?: string }>(collectionName: string, docId: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchDoc = async () => {
      try {
        const docRef = doc(db, collectionName, docId);
        const docSnapshot = await getDoc(docRef);
        if (docSnapshot.exists()) {
          setData({ id: docSnapshot.id, ...(docSnapshot.data() as unknown as T) });
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

    fetchDoc();
  }, [collectionName, docId]);

  return { data, loading, error };
};

export default usePost;

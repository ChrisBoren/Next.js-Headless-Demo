import { useRouter } from 'next/router';
// import Layout from '../../components/MyLayout';

export default function Post() {
  const router = useRouter();

  return (
    <div>
      <h1>{router.query.id}</h1>
      <p>This is the blog post content.</p>
    </div>
  );
}


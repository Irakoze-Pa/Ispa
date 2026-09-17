import { ButtonLink, Container } from '../components/ui';
export default function NotFound() { return <Container className="placeholder-page"><p className="eyebrow">404 / PAGE NOT FOUND</p><h1>A little off course.</h1><p>The page you’re looking for doesn’t exist. Let’s get you back to a familiar place.</p><ButtonLink to="/">Back to Home</ButtonLink></Container>; }

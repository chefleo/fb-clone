import StoryCard from './StoryCard';
import { useSession } from 'next-auth/react';

function Stories() {
  const { data: session } = useSession();
  const { name, image } = session.user;
  const stories = [
    {
      name: name,
      src: image,
      profile: image,
    },
    {
      name: 'Elon Musk',
      src: 'https://links.papareact.com/4zn',
      profile: 'https://links.papareact.com/kxk',
    },
    {
      name: 'Jeff Bezoz',
      src: 'https://links.papareact.com/k2j',
      profile: 'https://links.papareact.com/f0p',
    },
    {
      name: 'Bill Gates',
      src: 'https://links.papareact.com/4u4',
      profile: 'https://links.papareact.com/zvy',
    },
  ];
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map(({ name, src, profile }) => (
        <StoryCard key={src} name={name} src={src} profile={profile} />
      ))}
    </div>
  );
}

export default Stories;

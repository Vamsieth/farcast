import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Begin"
    }
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmRp3YMQFLwdP1LZdsMfbMrBJqfhcXoKAb6ZYz5p38FHZV/0.jpeg?pinataGatewayToken=${process.env.NEXT_GATEWAY_KEY}`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: 'Choose your own adventure!',
  description: 'A frame that lets you choose your own adventure!',
  openGraph: {
    title: 'Choose your own adventure!',
    description: 'A frame that lets you choose your own adventure!',
    images: [`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmRp3YMQFLwdP1LZdsMfbMrBJqfhcXoKAb6ZYz5p38FHZV/0.jpeg?pinataGatewayToken=${process.env.NEXT_GATEWAY_KEY}`],
  },
  other: {
    ...frameMetadata,
    'of:accepts:xmtp': '2024-02-01',
  },
};

export default function Page() {
  return (
    <>
      <h1>Choose your own adventure!</h1>
    </>
  );
}
import { NextRequest, NextResponse } from 'next/server';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const data = await req.json();
  const buttonId = data.untrustedData.buttonIndex;

  if (buttonId === 1) {
    return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame 1-1</title>
    <meta property="fc:frame" content="vNext" />
    <meta property="of:accepts:xmtp" content="2024-02-01" />
    <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmRp3YMQFLwdP1LZdsMfbMrBJqfhcXoKAb6ZYz5p38FHZV/1-1.jpeg?pinataGatewayToken=${process.env.NEXT_GATEWAY_KEY}" />
    <meta property="fc:frame:button:1" content="Draw sword" />
    <meta property="fc:frame:button:1:action" content="post" />
    <meta property="fc:frame:button:2" content="Run away" />
    <meta property="fc:frame:button:2:action" content="post" />
    <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/dragon" />
  </head></html>`);
  } else {
    return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame 1-2</title>
    <meta property="fc:frame" content="vNext" />
    <meta property="of:accepts:xmtp" content="2024-02-01" />
    <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmRp3YMQFLwdP1LZdsMfbMrBJqfhcXoKAb6ZYz5p38FHZV/1-2.jpeg?pinataGatewayToken=${process.env.NEXT_GATEWAY_KEY}" />
    <meta property="fc:frame:button:1" content="Eat" />
    <meta property="fc:frame:button:1:action" content="post" />
    <meta property="fc:frame:button:2" content="Go back" />
    <meta property="fc:frame:button:2:action" content="post" />
    <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/banquet" />
  </head></html>`);
  }
}

export async function POST(req: NextRequest): Promise<Response> {
    return getResponse(req);
}

export const dynamic = 'force-dynamic';
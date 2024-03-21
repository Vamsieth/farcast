import { NextRequest, NextResponse } from 'next/server';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const data = await req.json();
  const buttonId = data.untrustedData.buttonIndex;

  if (buttonId === 1) {
    return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame 1-1-1</title>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmRp3YMQFLwdP1LZdsMfbMrBJqfhcXoKAb6ZYz5p38FHZV/1-1-1.jpeg?pinataGatewayToken=5ztLinHxqrAmBczvK6RxpRbGCO0xxaDEwJ0Y3Ies6-w0XUQhWz4gs4ynaDNU62EG" />
    <meta property="fc:frame:button:1" content="Enter door" />
    <meta property="fc:frame:button:1:action" content="post" />
    <meta property="fc:frame:button:2" content="Fight dragon" />
    <meta property="fc:frame:button:2:action" content="post" />
    <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/damsel" />
  </head></html>`);
  } else {
    return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame 1-1-2</title>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmRp3YMQFLwdP1LZdsMfbMrBJqfhcXoKAb6ZYz5p38FHZV/1-1-2.jpeg?pinataGatewayToken=${process.env.NEXT_GATEWAY_KEY}" />
    <meta property="fc:frame:button:1" content="Try again" />
    <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1" />
  </head></html>`);
  }
}

export async function POST(req: NextRequest): Promise<Response> {
    return getResponse(req);
}

export const dynamic = 'force-dynamic';
export default function handler(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta property="og:title" content="Cevap Geldi!" />
          <meta property="fc:frame" content="vNext" />
          <meta property="fc:frame:image" content="https://warpcast-frame.vercel.app/frame.png" />
          <meta property="fc:frame:button:1" content="Tekrar Tıkla" />
          <meta property="fc:frame:post_url" content="https://warpcast-frame.vercel.app/api/frame" />
        </head>
      </html>
    `);
  }
  
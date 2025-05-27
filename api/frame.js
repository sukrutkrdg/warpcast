export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  
    res.setHeader("Content-Type", "application/json");
    return res.status(200).json({
      image: "https://warpcast-one.vercel.app/frame.png",
      post_url: "https://warpcast-one.vercel.app/api/frame",
      buttons: [
        { label: "Butona Tıkla" }
      ]
    });
  }
  
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  return res.status(200).json({
    image: "https://warpcast-frame.vercel.app/frame.png",
    post_url: "https://warpcast-frame.vercel.app/api/frame",
    buttons: [{ label: "Tekrar Tıkla" }]
  });
}

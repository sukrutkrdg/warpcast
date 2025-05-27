export default function handler(req, res) {
  if (req.method !== 'POST') {
    // Sadece POST isteklerine izin ver, diğerlerinde hata döndür
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // POST isteği geldiyse Warpcast’e dönecek JSON verisi:
  return res.status(200).json({
    image: "https://warpcast-frame.vercel.app/frame.png",
    post_url: "https://warpcast-frame.vercel.app/api/frame",
    buttons: [
      { label: "Tekrar Tıkla" }
    ]
  });
}

export default function handler(req, res) {
    if (req.method === 'POST') {
      return res.json({
        message: "Button clicked!",
        // örnek response yapısı
        frame: {
          image: "https://warpcast-one.vercel.app/frame.png",
          button: [{ label: "Geri Dön" }],
        },
      });
    } else {
      res.status(405).json({ error: "Method not allowed" });
    }
  }
  
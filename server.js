import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

// MOCK MODE — no API key needed. Returns a hardcoded example response so you
// can see the full UI working. Swap this out for the real agent chain once
// you have an API key.
function mockResponse(question) {
  const q = question.toLowerCase();

  // Pick a canned response based on keywords, or fall back to a generic one
  if (q.includes('supra') || q.includes('toyota')) {
    return {
      category: 'Cars',
      html: `
        <h2>Toyota Supra</h2>
        <p>The Toyota Supra is a high-performance sports car built by Toyota since 1978. It is best known for its powerful inline-6 engine and its massive popularity in car culture and motorsport.</p>
        <h3>Key Facts</h3>
        <ul>
          <li>The A80 Supra (1993–2002) used the legendary 2JZ-GTE twin-turbo engine</li>
          <li>Stock from the factory at 320 hp, tuners regularly push it past 1,000 hp</li>
          <li>It starred in the original Fast &amp; Furious film in 2001</li>
          <li>The name "Supra" comes from the Latin word meaning "above" or "beyond"</li>
          <li>Clean A80 Supras now sell for $100,000+ at auction</li>
        </ul>
        <blockquote>Fun fact: The 2JZ engine block is so strong that tuners can triple the horsepower without opening the engine — just bolt on bigger turbos and a tune.</blockquote>
        <div class="analogy"><strong>Think of it this way:</strong> The 2JZ engine is like a skyscraper built to hold 10 floors but engineers only put 3 on it — there's so much headroom, you can keep stacking power without the foundation cracking.</div>
      `
    };
  }

  if (q.includes('turbo') || q.includes('turbocharger')) {
    return {
      category: 'Cars',
      html: `
        <h2>Turbocharger</h2>
        <p>A turbocharger is a device that forces more air into an engine's cylinders, allowing it to burn more fuel and produce more power than a naturally aspirated engine of the same size.</p>
        <h3>Key Facts</h3>
        <ul>
          <li>It is powered by exhaust gases leaving the engine — essentially "free" energy</li>
          <li>Turbos can increase engine power by 30–40% or more</li>
          <li>Turbo lag is the brief delay before boost kicks in</li>
          <li>Twin-turbo setups use two turbochargers for faster response</li>
          <li>Most modern performance cars use turbos to hit emissions targets while keeping power</li>
        </ul>
        <blockquote>Fun fact: A turbocharger spins at up to 250,000 RPM — that's about 30 times faster than a car engine at full throttle.</blockquote>
        <div class="analogy"><strong>Think of it this way:</strong> A turbo is like blowing air into a campfire to make it burn hotter — you're forcing more oxygen in so the fuel burns more completely and produces more energy.</div>
      `
    };
  }

  if (q.includes('black hole')) {
    return {
      category: 'Science',
      html: `
        <h2>Black Holes</h2>
        <p>A black hole is a region of space where gravity is so strong that nothing — not even light — can escape from it. They form when massive stars collapse at the end of their lives.</p>
        <h3>Key Facts</h3>
        <ul>
          <li>The boundary of a black hole is called the event horizon</li>
          <li>Black holes don't "suck" things in — objects fall in if they get too close</li>
          <li>Time slows down near a black hole (gravitational time dilation)</li>
          <li>The first image of a black hole was captured in 2019</li>
          <li>Supermassive black holes exist at the center of most galaxies, including ours</li>
        </ul>
        <blockquote>Fun fact: If you fell into a black hole feet first, the difference in gravity between your feet and head would stretch you out like spaghetti — scientists actually call this "spaghettification."</blockquote>
        <div class="analogy"><strong>Think of it this way:</strong> A black hole is like a drain in a bathtub — water (or matter) spirals in once it gets close enough, and nothing can swim back upstream past the drain.</div>
      `
    };
  }

  // Generic fallback
  return {
    category: 'General',
    html: `
      <h2>Your Question</h2>
      <p>This is a mock response. The backend received your question: "<em>${question}</em>"</p>
      <h3>What's happening right now</h3>
      <ul>
        <li>Your browser sent the question to the Node.js server</li>
        <li>The server returned this hardcoded response (no AI key needed)</li>
        <li>The frontend injected this HTML into the response area</li>
        <li>When you add an API key, real AI-generated content replaces this</li>
      </ul>
      <blockquote>The three-agent chain (Classifier → Educator → Formatter) is wired up and ready — it just needs an API key to run.</blockquote>
      <div class="analogy"><strong>Think of it this way:</strong> This is a stunt double standing in until the real actor (the AI) is ready to perform.</div>
    `
  };
}

// ── POST /api/ask ─────────────────────────────────────────────────────────────
app.post('/api/ask', (req, res) => {
  const { question } = req.body;

  if (!question?.trim()) {
    return res.status(400).json({ error: 'Question is required.' });
  }

  const result = mockResponse(question);
  res.json(result);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log('Send POST /api/ask with { "question": "..." }');
});

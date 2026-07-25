import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";

export const metadata: Metadata = {
  title: "What would make a chess engine feel human?",
  description: "Notes on traditional engines, neural engines, and human play.",
};

export default function EyeChessPage() {
  return (
    <main className="page-shell">
      <SiteHeader />
      <article>
        <header className="article-header">
          <p className="eyebrow">January 3, 2024 · chess · software</p>
          <h1 className="page-title">What would make a chess engine feel human?</h1>
          <p className="page-lede">
            Traditional engines calculate, neural engines learn patterns, and
            people do something messier. I wanted to explore that difference.
          </p>
        </header>

        <div className="article-body">
          <p>
            Traditional chess engines evaluate enormous trees of possible moves.
            They rely on search, pruning, and an evaluation function that turns
            material, king safety, pawn structure, and piece activity into a
            number. Their strength comes partly from calculating far more than a
            person ever could.
          </p>

          <h2>Learning the position</h2>
          <p>
            Neural-network engines change where some of that judgment comes
            from. A network learns which positions and continuations look
            promising, while Monte Carlo tree search balances exploring new
            lines with pursuing the ones it already expects to be good. The
            engine still searches, but learned pattern recognition guides its
            attention.
          </p>

          <h2>What people do</h2>
          <p>
            Human players classify a position before calculating it. We notice
            whether it is open or closed, tactical or quiet. We look for checks,
            captures, and threats, then generate only a few candidate moves. In
            familiar positions, intuition does much of the filtering before a
            deliberate line is calculated.
          </p>
          <p>
            That intuition is useful precisely because human calculation is
            limited. We spend time unevenly, miss things, and carry preferences
            from similar positions we have seen before. Those imperfections are
            not incidental to how human chess feels; they are part of it.
          </p>

          <h2>The experiment</h2>
          <p>
            Path Chess Zero began as an attempt to understand these mechanics by
            building them. The project combines historical board state, a
            residual convolutional network, policy and value predictions,
            Monte Carlo tree search, and self-play. The goal was not to compete
            with mature engines. It was to make the choices inside a neural
            engine concrete enough to inspect and change.
          </p>
          <p>
            The longer-running question is more subjective: can an engine feel
            recognizably human without merely copying human moves? I’m still more
            interested in that question than in another rating number.
          </p>
        </div>

        <Link className="back-link" href="/">
          ← Back home
        </Link>
      </article>
      <SiteFooter />
    </main>
  );
}

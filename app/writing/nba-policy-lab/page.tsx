import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";

const title = "Can LLMs simulate competing interests?";
const description = "Why I gave 30 NBA teams their own agents, context, and goals inside Basketball GM.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/writing/nba-policy-lab/" },
  openGraph: {
    type: "article",
    title,
    description,
    url: "/writing/nba-policy-lab/",
    publishedTime: "2026-10-27",
    authors: ["Shaurya Pathak"],
  },
};

export default function NBAPolicyLabEssay() {
  return (
    <main className="page-shell">
      <SiteHeader />
      <article>
        <header className="article-header">
          <p className="post-meta"><time dateTime="2026-10-27">October 27, 2026</time> · essay</p>
          <h1 className="essay-title">{title}</h1>
        </header>
        <div className="article-body">
          <p>
            One of my favorite experiments started with a question about basketball:
            could I give every NBA team an AI agent and use their decisions to
            explore different league rules?
          </p>
          <p>
            Each team would have its own players, goals, and context. A team trying
            to win now would have different reasons to make a trade than a team
            rebuilding. I wanted to see what would happen when those motivations
            interacted over a simulated season.
          </p>
          <p>
            You can ask an LLM to argue from almost any perspective. What interested
            me was putting those perspectives into a world where they could act.
            A team could consider a trade, execute it if it was legal, and carry
            its changed roster into the next decision. The other teams would
            have their own reasons to accept, reject, or do something else.
          </p>
          <p>
            I built NBA Policy Lab as an extension of Basketball GM. The simulator
            handled the basketball environment, while agents represented the 30
            teams. I got a decision loop working with team context and memory,
            trade decisions, legal trade execution, and logs of what happened.
            Using an existing game let me spend time on the agent behavior
            instead of building a basketball simulator from scratch.
          </p>
          <p>
            The broader question was about incentives. If you change draft rules
            or how teams are rewarded, do they make different decisions? Could
            you compare those decisions across simulated seasons and use that
            to explore rules that better serve a particular goal? That was what
            I wanted to investigate with the environment.
          </p>
          <p>
            Basketball felt like a useful place to try this because the teams
            share a world but do not share an objective. Each wants a good
            outcome for itself. Their rosters and priorities give them different
            reasons to act, even when they are looking at the same league.
            That complexity was part of the appeal of using LLMs for the decisions.
          </p>
          <p>
            I got the agents making decisions inside the simulator. I would still
            want to know how much of their behavior came from the incentives I
            gave them, how much came from the way I described their goals, and
            how consistent it was across runs. Finding the best rules was the
            ambition behind the experiment; getting the decision loop working
            was the concrete progress.
          </p>
          <p>
            I like this project because of the question it let me ask. Could
            agents with different contexts and motivations be useful participants
            in experiments about how a system works? If that approach proves
            useful, I think there are places beyond basketball where I would
            want to try it.
          </p>
          <p>
            <Link className="text-link" href="/work#nba-policy-lab">NBA Policy Lab project notes →</Link>
          </p>
        </div>
      </article>
      <Link className="back-link" href="/">← All writing and projects</Link>
      <SiteFooter />
    </main>
  );
}

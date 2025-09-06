import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "AI Resumeio" },
    { name: "description", content: "Welcome to AI Resumeio!" },
  ];
}

export default function Home() {
  return (
    <main className="bg-[url(/images/bg-main.svg)] bg-cover">
      <section className="main-section">
        <div className="page-heading">
          <h1>Track your Application & Resume Ratings</h1>
          <h1>Review your submission and check AI powered Feedback.</h1>
        </div>
      </section>
    </main>
  )
}

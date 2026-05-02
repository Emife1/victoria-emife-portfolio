export type CandidateProfile = {
  name: string;
  headline: string;
  skills: string[];
  experienceSummary: string;
};

export function recruiterSim(profile: CandidateProfile) {
  const score = 85 + Math.min(profile.skills.length * 2, 10);

  return {
    screeningScore: score,
    agentViews: {
      recruiterA: "Focus on brand strategy strength and storytelling ability.",
      recruiterB: "Strong operational background, slightly light on quantified metrics.",
      recruiterC: "High cultural fit for marketing leadership roles."
    },
    strengths: [
      "Marketing strategy depth",
      "Brand development capability",
      "Operational execution support"
    ],
    gaps: ["Needs stronger financial KPI articulation"],
    finalVerdict: "Highly recommended for Marketing / Brand leadership track",
    narrative: `Multi-agent evaluation complete for ${profile.name}.`
  };
}
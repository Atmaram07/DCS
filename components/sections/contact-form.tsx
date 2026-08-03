"use client";

import { FormEvent, useState } from "react";

type FormState = {
  status: "idle" | "submitting" | "success" | "error";
  message: string;
};

const initialState: FormState = {
  status: "idle",
  message: "",
};

export function ContactForm() {
  const [state, setState] = useState<FormState>(initialState);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState({ status: "submitting", message: "" });

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { message: string };

      if (!response.ok) {
        throw new Error(data.message);
      }

      const whatsappNumber = "917077981777";
      const message = [
        "Hello DCS team,",
        `I am ${String(payload.name || "").trim()} from ${String(payload.company || "").trim()}.`,
        `Email: ${String(payload.email || "").trim()}`,
        `Phone: ${String(payload.phone || "").trim()}`,
        `Topic: ${String(payload.topic || "").trim()}`,
        `Timeline: ${String(payload.timeline || "").trim()}`,
        `Request: ${String(payload.message || "").trim()}`,
      ].join("\n");

      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");

      form.reset();
      setState({ status: "success", message: data.message });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Something went wrong.";
      setState({ status: "error", message });
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-[36px] border border-slate-200 bg-white p-8 shadow-soft sm:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">Name</span>
          <input
            required
            name="name"
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-brand-primary"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">Work Email</span>
          <input
            required
            type="email"
            name="email"
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-brand-primary"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">Phone</span>
          <input
            required
            type="tel"
            name="phone"
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-brand-primary"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">Company</span>
          <input
            required
            name="company"
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-brand-primary"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">Topic</span>
          <select
            required
            name="topic"
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-brand-primary"
            defaultValue=""
          >
            <option value="" disabled>
              Select a topic
            </option>
            <option value="growth-consulting">Growth Consulting</option>
            <option value="ai">Artificial Intelligence</option>
            <option value="software-development">Software Development</option>
            <option value="cloud-services">Cloud Services</option>
            <option value="cybersecurity">Cybersecurity</option>
            <option value="industry-solution">Industry Solution</option>
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-2 block text-sm font-medium text-slate-700">Timeline</span>
          <select
            required
            name="timeline"
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-brand-primary"
            defaultValue=""
          >
            <option value="" disabled>
              Select timeline
            </option>
            <option value="immediately">Immediately</option>
            <option value="this-quarter">This quarter</option>
            <option value="next-90-days">Next 90 days</option>
            <option value="exploring">Exploring</option>
          </select>
        </label>
      </div>
      <label className="mt-5 block">
        <span className="mb-2 block text-sm font-medium text-slate-700">How can we help?</span>
        <textarea
          required
          rows={6}
          name="message"
          className="w-full rounded-[24px] border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-brand-primary"
        />
      </label>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={state.status === "submitting"}
          className="inline-flex items-center justify-center rounded-full bg-brand-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-secondary disabled:cursor-not-allowed disabled:opacity-70"
        >
          {state.status === "submitting" ? "Sending..." : "Schedule a WhatsApp Strategic Consultation"}
        </button>
        {state.message ? (
          <p className={`text-sm ${state.status === "success" ? "text-emerald-600" : "text-rose-600"}`}>{state.message}</p>
        ) : null}
      </div>
    </form>
  );
}

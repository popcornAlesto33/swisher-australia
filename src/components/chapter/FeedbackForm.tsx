"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

interface FeedbackItem {
  id: string;
  name: string;
  comment: string;
  created_at: string;
}

interface FeedbackFormProps {
  dayNumber: number;
  chapterColor: string;
}

export default function FeedbackForm({ dayNumber, chapterColor }: FeedbackFormProps) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [feedback, setFeedback] = useState<FeedbackItem[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    loadFeedback();
  }, [dayNumber]);

  async function loadFeedback() {
    const { data } = await supabase
      .from("feedback")
      .select("*")
      .eq("day_number", dayNumber)
      .order("created_at", { ascending: true });

    if (data) setFeedback(data);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    setSubmitting(true);
    setError("");

    const { error: insertError } = await supabase
      .from("feedback")
      .insert({ day_number: dayNumber, name: name.trim(), comment: comment.trim() });

    if (insertError) {
      setError("Could not save feedback. Please try again.");
      setSubmitting(false);
      return;
    }

    setName("");
    setComment("");
    setSubmitting(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    loadFeedback();
  }

  function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  }

  return (
    <div className="mt-6 pt-5 border-t border-charcoal/10">
      <p className="text-xs font-semibold uppercase tracking-widest text-charcoal/40 mb-3">
        Feedback & Comments
      </p>

      {/* Existing comments */}
      {feedback.length > 0 && (
        <div className="space-y-3 mb-4">
          {feedback.map((item) => (
            <div
              key={item.id}
              className="bg-cream/50 rounded-lg px-4 py-3 border-l-2"
              style={{ borderLeftColor: chapterColor }}
            >
              <div className="flex items-baseline justify-between mb-1">
                <span className="text-sm font-medium text-charcoal/80">
                  {item.name}
                </span>
                <span className="text-xs text-charcoal/40">
                  {formatDate(item.created_at)}
                </span>
              </div>
              <p className="text-sm text-charcoal/70 leading-relaxed">
                {item.comment}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-shrink-0 w-32 px-3 py-2 text-sm rounded-lg border border-charcoal/15 bg-white
                       text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-offset-1"
            style={{ "--tw-ring-color": chapterColor } as React.CSSProperties}
            required
          />
          <input
            type="text"
            placeholder="Leave a comment or suggestion..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="flex-1 px-3 py-2 text-sm rounded-lg border border-charcoal/15 bg-white
                       text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-offset-1"
            style={{ "--tw-ring-color": chapterColor } as React.CSSProperties}
            required
          />
        </div>
        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={submitting}
            className="px-4 py-2 text-sm font-medium text-white rounded-lg transition-opacity
                       disabled:opacity-50 hover:opacity-90"
            style={{ backgroundColor: chapterColor }}
          >
            {submitting ? "Sending..." : "Send Feedback"}
          </button>
          {submitted && (
            <span className="text-sm text-green-600">Sent!</span>
          )}
          {error && (
            <span className="text-sm text-red-500">{error}</span>
          )}
        </div>
      </form>
    </div>
  );
}

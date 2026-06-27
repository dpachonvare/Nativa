"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";

type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface VipFormProps {
  /** Origen para saber desde qué sección/página entró el correo. */
  source?: string;
}

export default function VipForm({ source = "site" }: VipFormProps) {
  const t = useTranslations("vip");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") ?? "").trim();
    const name = String(data.get("name") ?? "").trim();

    if (!EMAIL_RE.test(email)) {
      setError(t("invalidEmail"));
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setError(null);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, source }),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
      form.reset();
    } catch {
      setError(t("error"));
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p
        role="status"
        className="rounded-2xl border border-nativa-terracota/30 bg-nativa-marfil px-6 py-5 text-center font-display text-xl text-nativa-cacao"
      >
        {t("success")}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-md" noValidate>
      <div className="flex flex-col gap-3">
        <label className="sr-only" htmlFor={`vip-name-${source}`}>
          {t("namePlaceholder")}
        </label>
        <input
          id={`vip-name-${source}`}
          name="name"
          type="text"
          autoComplete="name"
          placeholder={t("namePlaceholder")}
          className="w-full rounded-full border border-nativa-arena bg-nativa-marfil px-5 py-3 text-nativa-cacao placeholder:text-nativa-humo/70 focus:border-nativa-terracota focus:outline-none"
        />
        <label className="sr-only" htmlFor={`vip-email-${source}`}>
          {t("emailPlaceholder")}
        </label>
        <input
          id={`vip-email-${source}`}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder={t("emailPlaceholder")}
          aria-invalid={status === "error"}
          className="w-full rounded-full border border-nativa-arena bg-nativa-marfil px-5 py-3 text-nativa-cacao placeholder:text-nativa-humo/70 focus:border-nativa-terracota focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-full bg-nativa-terracota px-6 py-3 font-medium text-nativa-marfil transition-colors hover:bg-nativa-terracota-oscuro disabled:opacity-60"
        >
          {status === "submitting" ? t("submitting") : t("submit")}
        </button>
      </div>
      {status === "error" && error && (
        <p role="alert" className="mt-2 text-sm text-nativa-terracota-oscuro">
          {error}
        </p>
      )}
      <p className="mt-3 text-xs leading-relaxed text-nativa-humo">
        {t("consent")}
      </p>
    </form>
  );
}

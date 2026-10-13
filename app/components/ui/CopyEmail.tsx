'use client'

import { useEffect, useRef, useState } from 'react'
import { CheckIcon, CopyIcon } from './Icons'

/** Copies the address to the clipboard and confirms it in place. */
export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current)
  }, [])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      if (timer.current) clearTimeout(timer.current)
      timer.current = setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard blocked (insecure context, denied permission) — the mailto
      // button next to this one still gets the job done.
      setCopied(false)
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="btn btn-ghost group font-mono !text-[0.8125rem]"
      aria-label={`Copy ${email} to clipboard`}
    >
      {copied ? (
        <CheckIcon className="h-4 w-4 text-emerald-500" />
      ) : (
        <CopyIcon className="h-4 w-4 text-faint transition-colors group-hover:text-accent" />
      )}
      {copied ? 'Copied to clipboard' : email}
    </button>
  )
}

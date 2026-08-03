"use client"

import { useState, type KeyboardEvent } from "react"
import { Smile, Paperclip, Send } from "lucide-react"

type MessageInputProps = {
  onSend: (text: string) => void
}

export function MessageInput({ onSend }: MessageInputProps) {
  const [value, setValue] = useState("")

  function submit() {
    const trimmed = value.trim()
    if (!trimmed) return
    onSend(trimmed)
    setValue("")
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.nativeEvent.isComposing && e.keyCode !== 229) {
      e.preventDefault()
      submit()
    }
  }

  return (
    <footer className="flex items-center gap-2 border-t border-border bg-panel px-4 py-3">
      <button
        type="button"
        className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-panel-foreground"
        aria-label="Emoji"
      >
        <Smile className="h-5 w-5" />
      </button>
      <button
        type="button"
        className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-panel-foreground"
        aria-label="Attach file"
      >
        <Paperclip className="h-5 w-5" />
      </button>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type a message"
        aria-label="Type a message"
        className="flex-1 rounded-full bg-muted px-4 py-2.5 text-sm text-panel-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
      />
      <button
        type="button"
        onClick={submit}
        disabled={!value.trim()}
        aria-label="Send message"
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <Send className="h-5 w-5" />
      </button>
    </footer>
  )
}

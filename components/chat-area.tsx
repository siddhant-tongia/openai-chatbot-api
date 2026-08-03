"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { Phone, Video, Search, MoreVertical } from "lucide-react"
import { Avatar } from "./avatar"
import { MessageInput } from "./message-input"
import type { Contact, Message } from "@/lib/chat-data"

type ChatAreaProps = {
  contact: Contact
  onSend: (text: string) => void
  onBack?: () => void
  backIcon?: ReactNode
}

export function ChatArea({ contact, onSend, onBack, backIcon }: ChatAreaProps) {
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [contact.messages])

  return (
    <section className="flex h-full flex-1 flex-col bg-background">
      {/* Chat header */}
      <header className="flex items-center justify-between border-b border-border bg-panel px-4 py-2.5">
        <div className="flex items-center gap-3">
          {onBack && (
            <button
              type="button"
              onClick={onBack}
              className="rounded-full p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-panel-foreground md:hidden"
              aria-label="Back to chats"
            >
              {backIcon}
            </button>
          )}
          <Avatar initials={contact.initials} color={contact.avatarColor} size="sm" />
          <div className="leading-tight">
            <p className="font-medium text-panel-foreground">{contact.name}</p>
            <p className="text-xs text-muted-foreground">
              {contact.online ? "online" : "last seen recently"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1 text-muted-foreground">
          {[Video, Phone, Search, MoreVertical].map((Icon, i) => (
            <button
              key={i}
              type="button"
              className="rounded-full p-2 transition-colors hover:bg-muted hover:text-panel-foreground"
              aria-label={["Video call", "Voice call", "Search chat", "Menu"][i]}
            >
              <Icon className="h-5 w-5" />
            </button>
          ))}
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6 md:px-16">
        <div className="mx-auto flex max-w-3xl flex-col gap-2">
          {contact.messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
          <div ref={bottomRef} />
        </div>
      </div>

      <MessageInput onSend={onSend} />
    </section>
  )
}

function MessageBubble({ message }: { message: Message }) {
  const isMe = message.sender === "me"
  return (
    <div className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[75%] rounded-xl px-3 py-2 text-sm leading-relaxed shadow-sm ${
          isMe
            ? "rounded-br-sm bg-bubble-out text-bubble-out-foreground"
            : "rounded-bl-sm bg-bubble-in text-bubble-in-foreground"
        }`}
      >
        <p className="whitespace-pre-wrap break-words">{message.text}</p>
        <span className="mt-1 block text-right text-[10px] text-muted-foreground">{message.time}</span>
      </div>
    </div>
  )
}

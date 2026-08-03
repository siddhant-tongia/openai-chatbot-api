"use client"

import { useMemo, useState } from "react"
import { Search, MoreVertical, MessageSquarePlus } from "lucide-react"
import { Avatar } from "./avatar"
import type { Contact } from "@/lib/chat-data"

type SidebarProps = {
  contacts: Contact[]
  activeId: string
  onSelect: (id: string) => void
}

export function Sidebar({ contacts, activeId, onSelect }: SidebarProps) {
  const [query, setQuery] = useState("")

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return contacts
    return contacts.filter((c) => c.name.toLowerCase().includes(q))
  }, [contacts, query])

  return (
    <aside className="flex h-full w-full flex-col border-r border-border bg-panel md:w-[380px]">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3">
        <h1 className="text-lg font-semibold text-panel-foreground">Chats</h1>
        <div className="flex items-center gap-1 text-muted-foreground">
          <button
            type="button"
            className="rounded-full p-2 transition-colors hover:bg-muted hover:text-panel-foreground"
            aria-label="New chat"
          >
            <MessageSquarePlus className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="rounded-full p-2 transition-colors hover:bg-muted hover:text-panel-foreground"
            aria-label="Menu"
          >
            <MoreVertical className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Search */}
      <div className="px-3 pb-2">
        <div className="flex items-center gap-2 rounded-lg bg-muted px-3 py-2">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search or start a new chat"
            className="w-full bg-transparent text-sm text-panel-foreground placeholder:text-muted-foreground focus:outline-none"
            aria-label="Search contacts"
          />
        </div>
      </div>

      {/* Contact list */}
      <nav className="flex-1 overflow-y-auto" aria-label="Conversations">
        {filtered.length === 0 && (
          <p className="px-4 py-6 text-center text-sm text-muted-foreground">No chats found</p>
        )}
        <ul>
          {filtered.map((contact) => {
            const isActive = contact.id === activeId
            return (
              <li key={contact.id}>
                <button
                  type="button"
                  onClick={() => onSelect(contact.id)}
                  aria-current={isActive ? "true" : undefined}
                  className={`flex w-full items-center gap-3 px-3 py-3 text-left transition-colors ${
                    isActive ? "bg-muted" : "hover:bg-muted/60"
                  }`}
                >
                  <Avatar initials={contact.initials} color={contact.avatarColor} online={contact.online} />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="truncate font-medium text-panel-foreground">{contact.name}</span>
                      <span
                        className={`shrink-0 text-xs ${
                          contact.unread > 0 ? "text-primary" : "text-muted-foreground"
                        }`}
                      >
                        {contact.time}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="truncate text-sm text-muted-foreground">{contact.lastMessage}</span>
                      {contact.unread > 0 && (
                        <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-xs font-medium text-primary-foreground">
                          {contact.unread}
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}

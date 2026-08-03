"use client"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import { Sidebar } from "@/components/sidebar"
import { ChatArea } from "@/components/chat-area"
import { contacts as initialContacts, type Contact } from "@/lib/chat-data"

export default function Page() {
  const [contacts, setContacts] = useState<Contact[]>(initialContacts)
  const [activeId, setActiveId] = useState<string>(initialContacts[0].id)
  const [mobileChatOpen, setMobileChatOpen] = useState(false)

  const activeContact = contacts.find((c) => c.id === activeId) ?? contacts[0]

  function handleSelect(id: string) {
    setActiveId(id)
    setMobileChatOpen(true)
    setContacts((prev) => prev.map((c) => (c.id === id ? { ...c, unread: 0 } : c)))
  }

  function handleSend(text: string) {
    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    setContacts((prev) =>
      prev.map((c) =>
        c.id === activeId
          ? {
              ...c,
              lastMessage: text,
              time,
              messages: [...c.messages, { id: `${Date.now()}`, text, time, sender: "me" as const }],
            }
          : c,
      ),
    )
  }

  return (
    <main className="flex h-screen w-full overflow-hidden bg-background">
      {/* Sidebar: always visible on md+, hidden on mobile when a chat is open */}
      <div className={`${mobileChatOpen ? "hidden" : "flex"} w-full md:flex md:w-auto`}>
        <Sidebar contacts={contacts} activeId={activeId} onSelect={handleSelect} />
      </div>

      {/* Chat area */}
      <div className={`${mobileChatOpen ? "flex" : "hidden"} w-full flex-1 md:flex`}>
        <ChatArea
          contact={activeContact}
          onSend={handleSend}
          onBack={() => setMobileChatOpen(false)}
          backIcon={<ArrowLeft className="h-5 w-5" />}
        />
      </div>
    </main>
  )
}

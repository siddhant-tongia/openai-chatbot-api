export type Message = {
  id: string
  text: string
  time: string
  sender: "me" | "them"
}

export type Contact = {
  id: string
  name: string
  avatarColor: string
  initials: string
  lastMessage: string
  time: string
  unread: number
  online: boolean
  messages: Message[]
}

export const contacts: Contact[] = [
  {
    id: "1",
    name: "Aisha Rahman",
    avatarColor: "#6d597a",
    initials: "AR",
    lastMessage: "Perfect, see you then!",
    time: "09:42",
    unread: 2,
    online: true,
    messages: [
      { id: "m1", text: "Hey! Are we still on for the design review?", time: "09:30", sender: "them" },
      { id: "m2", text: "Yes, absolutely. I just finished the last mockups.", time: "09:34", sender: "me" },
      { id: "m3", text: "Amazing. Can you share them before the call?", time: "09:35", sender: "them" },
      { id: "m4", text: "Sending now. Let me know your thoughts.", time: "09:36", sender: "me" },
      { id: "m5", text: "Got them. These look really clean.", time: "09:40", sender: "them" },
      { id: "m6", text: "Let's sync at 10 then.", time: "09:41", sender: "me" },
      { id: "m7", text: "Perfect, see you then!", time: "09:42", sender: "them" },
    ],
  },
  {
    id: "2",
    name: "Dev Team",
    avatarColor: "#008b8b",
    initials: "DT",
    lastMessage: "Marco: Deploy is live 🚀",
    time: "08:58",
    unread: 0,
    online: false,
    messages: [
      { id: "m1", text: "Morning everyone, standup in 5.", time: "08:45", sender: "them" },
      { id: "m2", text: "On my way.", time: "08:46", sender: "me" },
      { id: "m3", text: "PR #218 is ready for review.", time: "08:52", sender: "them" },
      { id: "m4", text: "Reviewing it now.", time: "08:54", sender: "me" },
      { id: "m5", text: "Deploy is live 🚀", time: "08:58", sender: "them" },
    ],
  },
  {
    id: "3",
    name: "Liam Carter",
    avatarColor: "#bc6c25",
    initials: "LC",
    lastMessage: "Thanks for the update.",
    time: "Yesterday",
    unread: 0,
    online: true,
    messages: [
      { id: "m1", text: "Did the invoice go through?", time: "17:10", sender: "them" },
      { id: "m2", text: "Yes, payment confirmed this morning.", time: "17:12", sender: "me" },
      { id: "m3", text: "Thanks for the update.", time: "17:13", sender: "them" },
    ],
  },
  {
    id: "4",
    name: "Sofia Nguyen",
    avatarColor: "#2a9d8f",
    initials: "SN",
    lastMessage: "Haha that's hilarious 😂",
    time: "Yesterday",
    unread: 0,
    online: false,
    messages: [
      { id: "m1", text: "You have to see this meme.", time: "21:02", sender: "them" },
      { id: "m2", text: "Send it over!", time: "21:03", sender: "me" },
      { id: "m3", text: "Haha that's hilarious 😂", time: "21:05", sender: "them" },
    ],
  },
  {
    id: "5",
    name: "Mom",
    avatarColor: "#e76f51",
    initials: "M",
    lastMessage: "Call me when you're free.",
    time: "Monday",
    unread: 0,
    online: false,
    messages: [
      { id: "m1", text: "How was your trip?", time: "12:20", sender: "them" },
      { id: "m2", text: "It was great, will tell you all about it.", time: "12:40", sender: "me" },
      { id: "m3", text: "Call me when you're free.", time: "12:41", sender: "them" },
    ],
  },
  {
    id: "6",
    name: "Noah Bennett",
    avatarColor: "#457b9d",
    initials: "NB",
    lastMessage: "Sounds good, let's do it.",
    time: "Monday",
    unread: 0,
    online: true,
    messages: [
      { id: "m1", text: "Want to grab lunch this week?", time: "10:00", sender: "me" },
      { id: "m2", text: "Sounds good, let's do it.", time: "10:15", sender: "them" },
    ],
  },
]

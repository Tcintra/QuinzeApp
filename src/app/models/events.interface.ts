// Interface for an event
export interface Event {
  // Declare all event parameters here
  id: number,
  img: string,
  name: string,
  date: number,
  description: string,
  ownerId: number,
  ownerName: string,
  location: string,
  timestamp: number
}
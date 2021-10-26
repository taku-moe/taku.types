export type HexColor = `#${string}`;

/**
 * The different statuses users can be in
 */
export type StatusTypes = "online" | "offline" | "away" | "dnd";
/**
 * The different devices users can use
 */
export type DeviceTypes = "desktop" | "mobile" | "terminal";
/**
 * The different types channels can be
 */
export type ChannelTypes = "voice" | "text" | "rules" | "announcements" | "folder";

/**
 * This is the cutdown data the backend server has of a guild
 */
export interface BackendGuild {
  /**
   * The guild's unique ID in the guild's database
   */
  _id: string;
  /**
   * The ID of the user that owns the guild
   */
  owner_id: string;
  /**
   * The guild's name
   */
  name: string;
  /**
   * The guilds connection URL
   */
  hostname: string;
}

/**
 * An attachment in a message
 */
export interface Attachment {
  /**
   * The filename of the attachment
   */
  name: string;
  /**
   * The URL to the attachment
   */
  link: string;
}

/**
 * This represents a Taku message from the guild's database
 */
export interface Message {
  /**
   * The message's unique ID in the guild's database
   */
  _id: string;
  /**
   * When the message was sent
   */
  created_at: number;
  /**
   * The content (text) of the message
   */
  content?: string;
  /**
   * The attachments of the message
   */
  attachments: Attachment[];
  /**
   * The ID of the channel the message was sent in
   */
  channel_id: string;
  /**
   * The ID of the Taku user that sent the message
   */
  author_id: string;
  /**
   * The ID of the user the message is replying to
   */
  replying_to?: string;
}

/**
 * This represents a Taku guild channel from the guild's database
 */
export interface Channel {
  /**
   * The channel's unique ID in the guild's database
   */
  _id: string;
  /**
   * The channel's name
   */
  name: string;
  /**
   * The channel's descripption
   */
  description: string;
  /**
   * The channel's type
   */
  type: ChannelTypes;
}

/**
 * This represents a Taku user from the backend's database
 */
export interface User {
  /**
   * The user's unique ID in the database
   */
  _id: string;
  /**
   * The user's email string
   */
  email: string;
  /**
   * The user's password (this value is always null)
   */
  password: string;
  /**
   * The epoch timestamp of when the user signed up
   */
  created_at: number;
  /**
   * The user's username
   */
  username: string;
  /**
   * The user's avatar URL
   */
  avatar?: string;
  /**
   * The user's banner url
   */
  banner?: string;
  /**
   * The epoch timestamp of when the user used taku for the last time
   */
  last_seen: number;
  /**
   * The user's status
   */
  status: StatusTypes;
  /**
   * The user's device
   */
  device: DeviceTypes;
  /**
   * The user's emoji collection
   */
  saved_emojis: string[];
  /**
   * The list of guilds the user's in
   */
  guild_list: string[];
}

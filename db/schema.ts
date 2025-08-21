import { relations } from "drizzle-orm";
import {
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
  primaryKey,
} from "drizzle-orm/pg-core";

// Users table
export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(), // Local Supabase ID
  clerkId: text("clerk_id").notNull().unique(), // Clerk's user ID
  email: text("email").notNull(),
  fullName: text("full_name").notNull(),
  imageUrl: text("image_url"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const usersRelations = relations(users, ({ many }) => ({
  usersToCommunities: many(usersToCommunities),
  authoredCommunities: many(communities),
}));

// Community table
export const communities = pgTable("communities", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("community_name").notNull(),
  code: varchar("join_code", { length: 10 }).notNull().unique(),
  description: text("description"),
  authorId: uuid("author_id").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const usersToCommunities = pgTable(
  "users_communities",
  {
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id),
    communityId: uuid("community_id")
      .notNull()
      .references(() => communities.id),
  },
  (t) => [primaryKey({ columns: [t.userId, t.communityId] })],
);

export const usersToGroupsRelations = relations(
  usersToCommunities,
  ({ one }) => ({
    community: one(communities, {
      fields: [usersToCommunities.communityId],
      references: [communities.id],
    }),
    user: one(users, {
      fields: [usersToCommunities.userId],
      references: [users.id],
    }),
  }),
);

export const communitiesRelations = relations(communities, ({ one, many }) => ({
  author: one(users, {
    fields: [communities.authorId],
    references: [users.id],
  }),
  usersToGroups: many(usersToCommunities),
  folders: many(folders),
}));

// Folders Table
export const folders = pgTable("folders", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("folder_name").notNull(),
  description: text("description"),
  communityId: uuid("community_id").notNull(),
  parentId: uuid("parent_id").references((): any => folders.id),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const foldersRelations = relations(folders, ({ one, many }) => ({
  community: one(communities, {
    fields: [folders.communityId],
    references: [communities.id],
  }),
  parentFolder: one(folders, {
    fields: [folders.parentId],
    references: [folders.id],
  }),
  children: many(folders),
}));

// Resources Table
export const resources = pgTable("resources", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title").notNull(),
  description: text("description"),
  content: text("content").notNull(),
  communityId: uuid("community_id").notNull(),
  folderId: uuid("folder_id"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
})

export const resourcesRelations = relations(resources, ({ one }) => ({
  folder: one(folders, {
    fields: [resources.folderId],
    references: [folders.id],
  }),
  community: one(communities, {
    fields: [resources.communityId],
    references: [communities.id],
  }),
}));

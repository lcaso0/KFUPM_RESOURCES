import db from "@/db";
import { sql } from "drizzle-orm";
import ShortUniqueId from "short-uuid";

const translator = ShortUniqueId();

export function shortUUID(uuid: string): string {
  return translator.fromUUID(uuid);
}

export function longUUID(uuid: string): string {
  return translator.toUUID(uuid);
}

export async function getBreadcrumb(folderId: string): Promise<{ id: string; name: string }[]> {
  const rawFolders = await db.execute(sql`
    WITH RECURSIVE folder_path AS (
      SELECT id, folder_name, parent_id
      FROM folders
      WHERE id = ${folderId}

      UNION ALL

      SELECT f.id, f.folder_name, f.parent_id
      FROM folders f
      INNER JOIN folder_path fp ON f.id = fp.parent_id
    )
    SELECT * FROM folder_path;
  `);

  // Reverse so it's top-level → subfolder
  return rawFolders.reverse().map((f: any) => ({
    id: f.id,
    name: f.folder_name,
  }));
}

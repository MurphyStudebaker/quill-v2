# Migration `20200610154231-added-poem-body`

This migration has been generated by MurphyStudebaker at 6/10/2020, 3:42:31 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

CREATE TABLE "quaint"."new_Poem" (
"authorId" INTEGER NOT NULL  ,"body" TEXT NOT NULL  ,"createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP ,"id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT,"published" BOOLEAN NOT NULL DEFAULT false ,"title" TEXT NOT NULL  ,FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE)

INSERT INTO "quaint"."new_Poem" ("authorId", "createdAt", "id", "published", "title") SELECT "authorId", "createdAt", "id", "published", "title" FROM "quaint"."Poem"

PRAGMA foreign_keys=off;
DROP TABLE "quaint"."Poem";;
PRAGMA foreign_keys=on

ALTER TABLE "quaint"."new_Poem" RENAME TO "Poem";

PRAGMA "quaint".foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200609191158-initial-data-model..20200610154231-added-poem-body
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource DS {
   provider = "sqlite"
-  url = "***"
+  url      = env("DATABASE_URL")
 }
 generator client {
   provider      = "prisma-client-js"
@@ -29,8 +29,9 @@
 model Poem {
   id         Int        @id @default(autoincrement())
   createdAt  DateTime   @default(now())
   title      String
+  body       String
   published  Boolean    @default(false)
   author     User       @relation(fields: [authorId], references: [id])
   authorId   Int
   categories Category[] @relation(references: [id])
```



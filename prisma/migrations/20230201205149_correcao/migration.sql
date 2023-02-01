-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Contratos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "objeto" TEXT NOT NULL,
    "dataInicio" DATETIME NOT NULL,
    "dataFim" DATETIME NOT NULL,
    "valor" REAL NOT NULL,
    "numProcesso" TEXT NOT NULL,
    "numContrato" TEXT NOT NULL,
    "nomeEmpresa" TEXT NOT NULL,
    "CNPJ" TEXT NOT NULL
);
INSERT INTO "new_Contratos" ("CNPJ", "dataFim", "dataInicio", "id", "nome", "nomeEmpresa", "numContrato", "numProcesso", "objeto", "valor") SELECT "CNPJ", "dataFim", "dataInicio", "id", "nome", "nomeEmpresa", "numContrato", "numProcesso", "objeto", "valor" FROM "Contratos";
DROP TABLE "Contratos";
ALTER TABLE "new_Contratos" RENAME TO "Contratos";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateTable
CREATE TABLE "Contratos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "objeto" INTEGER NOT NULL,
    "dataInicio" DATETIME NOT NULL,
    "dataFim" DATETIME NOT NULL,
    "valor" REAL NOT NULL,
    "numProcesso" TEXT NOT NULL,
    "numContrato" TEXT NOT NULL,
    "nomeEmpresa" TEXT NOT NULL,
    "CNPJ" TEXT NOT NULL
);

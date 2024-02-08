-- CreateTable
CREATE TABLE "bankaccount" (
    "id" SERIAL NOT NULL,
    "accountNumber" INTEGER NOT NULL,
    "currentBalance" DOUBLE PRECISION NOT NULL DEFAULT 100,
    "clientName" TEXT NOT NULL,
    "clientDocument" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "bankaccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "financialtransaction" (
    "id" SERIAL NOT NULL,
    "accountOriginId" INTEGER NOT NULL,
    "accountNumber" INTEGER NOT NULL,
    "transactionType" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "financialtransaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "bankaccount_accountNumber_key" ON "bankaccount"("accountNumber");

-- AddForeignKey
ALTER TABLE "financialtransaction" ADD CONSTRAINT "financialtransaction_accountOriginId_fkey" FOREIGN KEY ("accountOriginId") REFERENCES "bankaccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

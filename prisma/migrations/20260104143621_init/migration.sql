-- CreateTable
CREATE TABLE "Contact" (
    "id" INTEGER NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "emailaddress" TEXT NOT NULL,
    "phonenumber" INTEGER NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Contact_emailaddress_key" ON "Contact"("emailaddress");

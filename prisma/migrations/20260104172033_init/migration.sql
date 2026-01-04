-- AlterTable
CREATE SEQUENCE contact_id_seq;
ALTER TABLE "Contact" ALTER COLUMN "id" SET DEFAULT nextval('contact_id_seq'),
ALTER COLUMN "phonenumber" SET DATA TYPE BIGINT;
ALTER SEQUENCE contact_id_seq OWNED BY "Contact"."id";

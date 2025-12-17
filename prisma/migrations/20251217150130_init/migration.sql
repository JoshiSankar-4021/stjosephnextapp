-- AlterTable
CREATE SEQUENCE register_userid_seq;
ALTER TABLE "Register" ALTER COLUMN "userid" SET DEFAULT nextval('register_userid_seq');
ALTER SEQUENCE register_userid_seq OWNED BY "Register"."userid";

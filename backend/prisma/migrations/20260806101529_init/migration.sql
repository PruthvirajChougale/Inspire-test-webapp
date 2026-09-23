-- CreateEnum
CREATE TYPE "QuestionType" AS ENUM ('SINGLE_CORRECT', 'MULTIPLE_CORRECT', 'NUMERIC', 'MATCH_MAKING');

-- CreateEnum
CREATE TYPE "ResponseType" AS ENUM ('ATTEMPT', 'PRACTICE');

-- CreateEnum
CREATE TYPE "PostStatus" AS ENUM ('CORRECT', 'PARTIALLY_CORRECT', 'INCORRECT');

-- CreateEnum
CREATE TYPE "PreStatus" AS ENUM ('UNATTEMPTED', 'VISITED', 'REVIEWED', 'ATTEMPTED');

-- CreateTable
CREATE TABLE "tests" (
    "id" TEXT NOT NULL,
    "batch_id" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "duration" INTEGER NOT NULL,
    "subjects" JSONB NOT NULL DEFAULT '{}',
    "date_time" TIMESTAMP(3) NOT NULL,
    "total_marks" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "questions" (
    "id" TEXT NOT NULL,
    "test_id" TEXT NOT NULL,
    "question_no" INTEGER NOT NULL,
    "type" "QuestionType" NOT NULL,
    "question_text" TEXT NOT NULL,
    "question_img" TEXT,
    "option_text" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "option_img" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "correct_ans" JSONB NOT NULL,
    "marks" DOUBLE PRECISION NOT NULL,
    "negative_marks" DOUBLE PRECISION NOT NULL DEFAULT 0.0,

    CONSTRAINT "questions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "responses" (
    "id" TEXT NOT NULL,
    "type" "ResponseType" NOT NULL,
    "question_id" TEXT NOT NULL,
    "test_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "user_response" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "marks_obtained" DOUBLE PRECISION,
    "post_status" "PostStatus",
    "pre_status" "PreStatus" NOT NULL DEFAULT 'UNATTEMPTED',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "responses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_UserTests" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_UserTests_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "tests_batch_id_idx" ON "tests"("batch_id");

-- CreateIndex
CREATE UNIQUE INDEX "questions_test_id_question_no_key" ON "questions"("test_id", "question_no");

-- CreateIndex
CREATE UNIQUE INDEX "responses_user_id_test_id_question_id_key" ON "responses"("user_id", "test_id", "question_id");

-- CreateIndex
CREATE INDEX "_UserTests_B_index" ON "_UserTests"("B");

-- AddForeignKey
ALTER TABLE "questions" ADD CONSTRAINT "questions_test_id_fkey" FOREIGN KEY ("test_id") REFERENCES "tests"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "responses" ADD CONSTRAINT "responses_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "questions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "responses" ADD CONSTRAINT "responses_test_id_fkey" FOREIGN KEY ("test_id") REFERENCES "tests"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "responses" ADD CONSTRAINT "responses_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserTests" ADD CONSTRAINT "_UserTests_A_fkey" FOREIGN KEY ("A") REFERENCES "tests"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserTests" ADD CONSTRAINT "_UserTests_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

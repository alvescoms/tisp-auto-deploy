-- CreateTable
CREATE TABLE "Deploy" (
    "id" SERIAL NOT NULL,
    "code" CHAR(6) NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "description" VARCHAR(100),
    "branch" VARCHAR(20) NOT NULL,
    "buildPath" VARCHAR(150) NOT NULL,
    "destinantioPath" VARCHAR(150) NOT NULL,
    "beforeBuildCommand" VARCHAR(100),
    "buildCommand" VARCHAR(100) NOT NULL,
    "afterBuildCommand" VARCHAR(100),
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Deploy_pkey" PRIMARY KEY ("id")
);

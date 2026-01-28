-- CreateEnum
CREATE TYPE "Enum___List__Month" AS ENUM ('JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER');

-- CreateEnum
CREATE TYPE "Enum___Statistics__View" AS ENUM ('STATISTICS_OVERALL', 'STATISTICS_YEAR', 'STATISTICS_MONTH');

-- CreateEnum
CREATE TYPE "Enum___Users___View__Sessions" AS ENUM ('LAST_PLAYED', 'CREATED', 'NAME');

-- CreateEnum
CREATE TYPE "Enum___Association__Users_And_Sessions___Input_Type" AS ENUM ('SELECT_AND_TYPE', 'SELECT', 'TYPE');

-- CreateEnum
CREATE TYPE "Enum___Association__Users_And_Sessions___View" AS ENUM ('SHOW__CUSTOM_DATE', 'SHOW__MONTH', 'SHOW__YEAR', 'SHOW__ALL');

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "Refresh_Token" TEXT,
    "DarkMode" BOOLEAN NOT NULL,
    "Show__Session_Names" BOOLEAN NOT NULL,
    "Show__Session_Date" BOOLEAN NOT NULL,
    "View__Sessions" "Enum___Users___View__Sessions" NOT NULL,
    "View__Sessions_Desc" BOOLEAN NOT NULL,
    "Statistics__View" "Enum___Statistics__View" NOT NULL,
    "Statistics__View_Month" "Enum___List__Month" NOT NULL,
    "Statistics__View_Year" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Association__Users_And_Sessions" (
    "id" SERIAL NOT NULL,
    "Input_Type" "Enum___Association__Users_And_Sessions___Input_Type" NOT NULL,
    "Show_Scores" BOOLEAN NOT NULL,
    "View" "Enum___Association__Users_And_Sessions___View" NOT NULL,
    "View__Month" "Enum___List__Month" NOT NULL,
    "View__Year" INTEGER NOT NULL,
    "View__Custom_Date" TIMESTAMP(3) NOT NULL,
    "Statistics__Show_Border" BOOLEAN NOT NULL,
    "Statistics__View" "Enum___Statistics__View" NOT NULL,
    "Statistics__View_Month" "Enum___List__Month" NOT NULL,
    "Statistics__View_Year" INTEGER NOT NULL,
    "UserID" INTEGER NOT NULL,
    "SessionID" INTEGER NOT NULL,

    CONSTRAINT "Association__Users_And_Sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sessions" (
    "id" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "Color" TEXT NOT NULL,
    "Columns" INTEGER NOT NULL,
    "View__List_Years" INTEGER[],
    "CurrentGameStart" TIMESTAMP(3),
    "LastPlayed" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Association__Sessions_And_Players_And_Table_Columns" (
    "id" SERIAL NOT NULL,
    "Gnadenwurf_Used" BOOLEAN NOT NULL,
    "Order_Index" INTEGER NOT NULL,
    "SessionID" INTEGER NOT NULL,
    "PlayerID" INTEGER NOT NULL,

    CONSTRAINT "Association__Sessions_And_Players_And_Table_Columns_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Players" (
    "id" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "Color" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Players_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Association__Players_And_FinalScores_And_Sessions" (
    "id" SERIAL NOT NULL,
    "IsWinner" BOOLEAN NOT NULL,
    "Score" INTEGER NOT NULL,
    "Wins__Before" INTEGER NOT NULL,
    "Wins__After" INTEGER NOT NULL,
    "Wins__Before_Year" INTEGER NOT NULL,
    "Wins__After_Year" INTEGER NOT NULL,
    "Wins__Before_Month" INTEGER NOT NULL,
    "Wins__After_Month" INTEGER NOT NULL,
    "Wins__Before_SinceCustomDate" INTEGER,
    "Wins__After_SinceCustomDate" INTEGER,
    "SessionID" INTEGER NOT NULL,
    "Final_ScoreID" INTEGER NOT NULL,
    "PlayerID" INTEGER NOT NULL,

    CONSTRAINT "Association__Players_And_FinalScores_And_Sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Final_Scores" (
    "id" SERIAL NOT NULL,
    "Start" TIMESTAMP(3) NOT NULL,
    "End" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Columns" INTEGER NOT NULL,
    "Surrendered" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Final_Scores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Table_Columns" (
    "id" SERIAL NOT NULL,
    "Column" INTEGER NOT NULL,
    "Total_Score" INTEGER NOT NULL,
    "Upper_Table_1" INTEGER,
    "Upper_Table_2" INTEGER,
    "Upper_Table_3" INTEGER,
    "Upper_Table_4" INTEGER,
    "Upper_Table_5" INTEGER,
    "Upper_Table_6" INTEGER,
    "Upper_Table_Score" INTEGER NOT NULL,
    "Upper_Table_Add35" INTEGER,
    "Upper_Table_TotalScore" INTEGER,
    "Bottom_Table_1" INTEGER,
    "Bottom_Table_2" INTEGER,
    "Bottom_Table_3" INTEGER,
    "Bottom_Table_4" INTEGER,
    "Bottom_Table_5" INTEGER,
    "Bottom_Table_6" INTEGER,
    "Bottom_Table_7" INTEGER,
    "Bottom_Table_Score" INTEGER,
    "Bottom_Table_TotalScore" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "Association__Sessions_And_Players_And_Table_ColumnsID" INTEGER NOT NULL,

    CONSTRAINT "Table_Columns_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Table_Archives" (
    "id" SERIAL NOT NULL,
    "Table" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "Final_ScoreID" INTEGER NOT NULL,

    CONSTRAINT "Table_Archives_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_Name_key" ON "Users"("Name");

-- CreateIndex
CREATE UNIQUE INDEX "Users_Password_key" ON "Users"("Password");

-- CreateIndex
CREATE UNIQUE INDEX "Users_Refresh_Token_key" ON "Users"("Refresh_Token");

-- CreateIndex
CREATE UNIQUE INDEX "Association__Users_And_Sessions_SessionID_key" ON "Association__Users_And_Sessions"("SessionID");

-- CreateIndex
CREATE UNIQUE INDEX "Sessions_id_key" ON "Sessions"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Association__Sessions_And_Players_And_Table_Columns_PlayerI_key" ON "Association__Sessions_And_Players_And_Table_Columns"("PlayerID");

-- CreateIndex
CREATE UNIQUE INDEX "Association__Players_And_FinalScores_And_Sessions_Final_Sco_key" ON "Association__Players_And_FinalScores_And_Sessions"("Final_ScoreID", "PlayerID");

-- CreateIndex
CREATE UNIQUE INDEX "Table_Archives_Final_ScoreID_key" ON "Table_Archives"("Final_ScoreID");

-- AddForeignKey
ALTER TABLE "Association__Users_And_Sessions" ADD CONSTRAINT "Association__Users_And_Sessions_UserID_fkey" FOREIGN KEY ("UserID") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Association__Users_And_Sessions" ADD CONSTRAINT "Association__Users_And_Sessions_SessionID_fkey" FOREIGN KEY ("SessionID") REFERENCES "Sessions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Association__Sessions_And_Players_And_Table_Columns" ADD CONSTRAINT "Association__Sessions_And_Players_And_Table_Columns_Sessio_fkey" FOREIGN KEY ("SessionID") REFERENCES "Sessions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Association__Sessions_And_Players_And_Table_Columns" ADD CONSTRAINT "Association__Sessions_And_Players_And_Table_Columns_Player_fkey" FOREIGN KEY ("PlayerID") REFERENCES "Players"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Association__Players_And_FinalScores_And_Sessions" ADD CONSTRAINT "Association__Players_And_FinalScores_And_Sessions_SessionI_fkey" FOREIGN KEY ("SessionID") REFERENCES "Sessions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Association__Players_And_FinalScores_And_Sessions" ADD CONSTRAINT "Association__Players_And_FinalScores_And_Sessions_Final_Sc_fkey" FOREIGN KEY ("Final_ScoreID") REFERENCES "Final_Scores"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Association__Players_And_FinalScores_And_Sessions" ADD CONSTRAINT "Association__Players_And_FinalScores_And_Sessions_PlayerID_fkey" FOREIGN KEY ("PlayerID") REFERENCES "Players"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Table_Columns" ADD CONSTRAINT "Table_Columns_Association__Sessions_And_Players_And_Table__fkey" FOREIGN KEY ("Association__Sessions_And_Players_And_Table_ColumnsID") REFERENCES "Association__Sessions_And_Players_And_Table_Columns"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Table_Archives" ADD CONSTRAINT "Table_Archives_Final_ScoreID_fkey" FOREIGN KEY ("Final_ScoreID") REFERENCES "Final_Scores"("id") ON DELETE CASCADE ON UPDATE CASCADE;

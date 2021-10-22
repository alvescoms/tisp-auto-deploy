#!/bin/bash

# bash deploy.sh -n 'nw_war_maker' -g 'github.com/rscop/nw_war_maker.git' -b '*.*' -d '../funfa/' -e 'npm install' -u 'npm run build' -a 'npm run start'

while getopts n:g:b:d:e:u:a: flag
do
    case "${flag}" in
        n) nameRepository=${OPTARG};;
        g) gitUrl=${OPTARG};;
        b) buildPath=${OPTARG};;
        d) destinationPath=${OPTARG};;
        e) beforeBuildCommand=${OPTARG};;
        u) buildCommand=${OPTARG};;
        a) afterBuildCommand=${OPTARG};;
    esac
done

rm -rf ../temp/$nameRepository
mkdir ../temp/$nameRepository

echo "Cloning '$nameRepository' repository..."
git clone https://${GITHUB_USER}:${GITHUB_PERSONAL_TOKEN}@$gitUrl ../temp/$nameRepository

cd ../temp/$nameRepository

echo "Executing beforeBuildCommand..."
eval $beforeBuildCommand

echo "Executing buildCommand..."
eval $buildCommand

echo "Moving files to destination folder..."
mv $buildPath $destinationPath

echo "Removing temp files..."
rm -rf ../temp/$nameRepository

cd $destinationPath/

echo "Executing afterBuildCommand..."
eval $afterBuildCommand
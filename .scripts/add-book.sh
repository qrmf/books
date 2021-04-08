#!/bin/sh

# Add all changes
git add .

# Commit new changes
git commit -m "book: Add $1"

# Add git log to /git history.txt
git --no-pager log > git\ history.txt

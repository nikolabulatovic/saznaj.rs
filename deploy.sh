git branch -D deploy
git checkout --orphan deploy
git commit -m "saznaj.rs whole website - first version"
git push -f deploy main
git checkout main
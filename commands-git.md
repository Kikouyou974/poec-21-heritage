# Commandes de base

- `git init` : permet de créer un dépôt git local

- `git status` : Montre l’état des fichier en montrant les changement qui sont en stage et ceux qui ne le sont pas encore.

- `git add <mon_du_fichier>` : Ajouter un fichier dans le stage

- `git add .` : AJouter tous les fichiers modifiés dans le stage

- `git commit -m"mon message"` : Créer un commit(version son code)

- `git commit --amend --no-edit` : Mettre à jour le commit existant

- `git commit --amend -m <message>` : Mettre à jour le message de l'actuel snapshot

- `git log` : Afficher l'historique des versions

- `git checkout <fichier>` : Se positionner dans la version du même fichier du dernier snapshot 

- `git log --oneline` : Afficher l'historique des versions en une ligne

- `git log -2` : Voir 2 lignes de log

- `git log -2 -p` : Voir ce qui a changé entre les 2 derniers `commits`

- `git revert HEAD` : Défaire les derniers changement.Ceci va créer un commit de `revert`

- `git remote add origin <url_depot_distant>` : Lier le dépôt local au dépôt distant

- `git remote set-url origin <url_depot_distant>` : Changer url pour le dépot distant

- `git push origin <nom_branch>` : Envoyer le code dans le dépôt distant

- `git checkout <nom_branch>` : Switcher d'une branche à une autre

- `git checkout -b <nouvellee_branche>` : Créer une branche, et se positionner dessus

- `git merge <nom_branch>` : Combiner la brach courant avec <nom_branch>

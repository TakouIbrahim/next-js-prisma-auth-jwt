
# Mini Projet Next.js : Authentification avec Prisma et Auth.js

Ce projet est une application **Next.js** pour la gestion de l'authentification des utilisateurs, en utilisant **Prisma** comme ORM et **Auth.js** pour la gestion des sessions.

---

## Prérequis

- **Node.js** : Assurez-vous d'avoir installé Node.js version 16 ou supérieure.
- **PostgreSQL** : Une instance PostgreSQL fonctionnelle pour la base de données.

---

## Installation du Projet

1. Clonez le dépôt sur votre machine locale.

2. Installez les dépendances nécessaires en exécutant :

 ```bash
npm install
```
   
3. Initialisez Prisma en utilisant la commande suivante :


```bash
npx prisma init
# pour initialiser prisma
```

4. Créez une base de données PostgreSQL et configurez les informations de connexion dans le fichier .env (généré par la commande précédente). Exemple de configuration :

``` DATABASE_URL="postgresql://postgres:admin@localhost:5432/next_prisma_auth?schema=public" ``` 



5. Ajoutez une variable d'environnement SECRET dans votre fichier .env, qui servira de clé pour signer les tokens de session. Exemple :

 ```example: SECRET="next2024" ```




## Gestion de la base de donnée

1. Appliquez le modèle Prisma à la base de données en exécutant la migration :

```bash
npx prisma migrate dev --name init
```

2. (Optionnel) Si vous souhaitez explorer la base de données ou vérifier les données insérées, utilisez Prisma Studio :

```bash
npx prisma studio
```


## Lancez l'application localement

Démarrez le serveur de développement en exécutant l'une des commandes suivantes :

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

L'application sera accessible à l'adresse http://localhost:3000.


## Fonctionnalités
- Inscription et Connexion : Gère l'inscription et la connexion des utilisateurs avec des mots de passe sécurisés.
- Sessions sécurisées : Utilise des tokens JWT signés avec la clé SECRET.
- ORM Prisma : Simplifie les interactions avec la base de données.
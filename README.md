

<div align="center">

## Un **starter Next.js** moderne et typé, conçu pour accélérer le développement de projets fullstack 
</div>


</br>


<div align="center">
<img src="https://media1.tenor.com/m/4D3DhzVOu-oAAAAC/press-any-key-any-key.gif" height="500" /> 
</div>

</br>

---

##  Stack 

-  **Next.js 16** — Framework React fullstack
-  **TypeScript** — Typage statique pour un code sûr et maintenable
- 🎨 **TailwindCSS 4** — Design rapide et réactif
-  **Drizzle ORM** — ORM moderne et typé
- 🐘 **PostgreSQL** — Base de données SQL puissante et fiable
- 🧪 **Vitest** — Tests unitaires rapides et intégrés
-  **Playwright** — Tests end-to-end performants
- 🐳 **Docker** — Environnement reproductible pour le dev
- 🧹 **ESLint & Prettier** — Style et qualité de code automatisés
-  **Concurrently** — Lancement simultané du serveur et de l’infra
-  **VSCode Settings** — Configuration de dev préintégrée

---

🚀 **Démarrage rapide**
</br>


**1 -- Cloner le projet**

</br>

**2 -- Installer les dépendances**
💡 Ce projet utilise pnpm. Si tu ne l’as pas encore :

npm install -g pnpm

pnpm install

</br>

**3 -- Lancer l’environnement complet** (Docker + Next.js)

pnpm dev

</br>

Cela lance :

🐳 les conteneurs Docker définis dans docker-compose.infra.yml (ex: PostgreSQL)

⚡ le serveur Next.js sur http://localhost:3000

🗄️ Base de données (PostgreSQL + Drizzle)

</br>

</br>

Ce starter inclut Drizzle ORM configuré avec PostgreSQL.
Les fichiers de configuration se trouvent dans le dossier drizzle/ et drizzle.config.ts.

</br>

**Commandes principales**

pnpm drizzle:generate # Génère les migrations à partir du schéma
pnpm drizzle:migrate # Exécute les migrations dans la base

</br>

💾 **La base PostgreSQL tourne via Docker (voir docker-compose.infra.yml).**

🧪 **Tests**
**Tests unitaires (Vitest)**

pnpm test

**Tests End-to-End (Playwright)**

pnpm e2e

Les configs correspondantes se trouvent dans :

vitest.config.mjs

playwright.config.ts

</br>

---

</br>


🧰 **Scripts disponibles**

**Commande avec descriptions**: 

pnpm dev	Lance Next.js + Docker en parallèle

pnpm build	Build pour la production

pnpm start	Démarre l’app buildée

pnpm format	Formate le code avec Prettier

pnpm lint	Vérifie la qualité du code

pnpm drizzle:generate	Génère les migrations Drizzle

pnpm drizzle:migrate	Applique les migrations Drizzle

pnpm env:start	Lance l’infrastructure (PostgreSQL, etc.)

pnpm env:end	Stoppe l’infrastructure Docker

pnpm test	Lance les tests unitaires (Vitest)

</br>


---

</br>


🧱 **Structure du projet**

.
├── .github/workflows/     # CI/CD GitHub Actions

├── .vscode/               # Configuration VSCode

├── drizzle/               # Migrations et schémas DB

├── e2e/                   # Tests end-to-end

├── public/                # Assets publics

├── src/                   # Code source principal

├── tests/                 # Tests unitaires

├── docker-compose.infra.yml

├── drizzle.config.ts

├── vitest.config.mjs

├── playwright.config.ts

└── package.json

</br>


---

</br>

🧑‍💻**Développement**

✏️ Édite librement dans le dossier src/

🧩 Ajoute tes routes API via src/app/api/

🧱 Crée tes modèles et schémas dans drizzle/

🧪 Ajoute tes tests dans tests/ ou e2e/ .

---


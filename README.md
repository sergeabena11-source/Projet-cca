# Tableau de Bord — Suivi des Commandes CCA

Application de suivi des commandes CCA pour AFRILUX SMART SOLUTIONS SA, de la
proforma au règlement final, conforme au Cahier des Charges
`DSI-CDC-TDB-CCA-2026-001`.

## Stack technique

- **Frontend / Backend** : Next.js 14 (App Router)
- **Base de données** : PostgreSQL managé sur [Neon](https://neon.tech)
- **ORM** : Prisma
- **Authentification** : NextAuth.js
- **Hébergement** : Vercel
- **Code source** : GitHub

## État d'avancement

- [x] Étape 1 — Squelette du projet
- [ ] Étape 2 — Schéma de base de données (7 objets métier)
- [ ] Étape 3 — Connexion Neon + migrations
- [ ] Étape 4 — Authentification et rôles
- [ ] Étape 5 — CRUD Proforma
- [ ] Étape 6 — Tableaux de bord par rôle
- [ ] Étape 7 — Workflow de transitions de statuts
- [ ] Étape 8 — Notifications (in-app + email)
- [ ] Étape 9 — KPI et exports

## Démarrage en local

### Prérequis

- Node.js 20+
- Un compte [Neon](https://neon.tech) (base PostgreSQL gratuite pour démarrer)
- Un compte [GitHub](https://github.com)
- Un compte [Vercel](https://vercel.com)

### Installation

```bash
npm install
cp .env.example .env
# Remplir .env avec vos identifiants Neon (voir section suivante)
npx prisma generate
npx prisma migrate dev --name init
npm run dev
```

L'application est alors accessible sur `http://localhost:3000`.

### Configuration de la base Neon

1. Créer un projet sur [neon.tech](https://neon.tech)
2. Dans **Connection Details**, copier :
   - la chaîne de connexion **Pooled connection** → variable `DATABASE_URL`
   - la chaîne de connexion **Direct connection** → variable `DIRECT_URL`
3. Coller ces deux valeurs dans votre fichier `.env`

### Déploiement sur Vercel

1. Pousser ce dépôt sur GitHub (voir plus bas)
2. Sur [vercel.com](https://vercel.com), cliquer sur **Add New → Project**
3. Importer le dépôt GitHub
4. Dans **Environment Variables**, ajouter `DATABASE_URL`, `DIRECT_URL`,
   `NEXTAUTH_SECRET`, `NEXTAUTH_URL` (avec l'URL de production)
5. Déployer

À chaque `git push` sur la branche `main`, Vercel redéploiera automatiquement.

## Structure du projet

```
cca-dashboard/
├── prisma/
│   └── schema.prisma       # Modèle de données
├── src/
│   ├── app/                # Pages et routes (App Router Next.js)
│   ├── components/         # Composants React réutilisables
│   └── lib/                # Utilitaires (client Prisma, auth, etc.)
├── .env.example             # Modèle de variables d'environnement
└── package.json
```

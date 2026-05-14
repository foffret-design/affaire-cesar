# L'Affaire César

Site web du larsa du siècle.

## Déployer sur Railway

1. Crée un compte sur [github.com](https://github.com)
2. Crée un nouveau repo (ex: `affaire-cesar`)
3. Upload les 3 fichiers : `index.html`, `package.json`, `server.js`
4. Va sur [railway.app](https://railway.app)
5. **New Project** → **Deploy from GitHub repo** → choisis ton repo
6. Railway installe et déploie tout seul
7. **Settings** → **Networking** → **Generate Domain** pour avoir une URL publique

## Déployer sur Netlify (plus simple, pour HTML pur)

1. Va sur [app.netlify.com/drop](https://app.netlify.com/drop)
2. Glisse juste `index.html` dessus
3. C'est en ligne

## Tester en local

```bash
npm install
npm start
```

Puis ouvre http://localhost:3000

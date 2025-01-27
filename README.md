# Logo React

Pour importer:

```bash
npm install github:ReactAcademyLive/logo
```

Il faut copier manuellement le fichier `model.gltf` vers `public`

```bash
cp node_modules/@react-academy-live/logo/model.gltf public/
```

Il faut modifier le fichier Azure `staticwebapp.config.json`:

```json
  "globalHeaders": {
    "content-security-policy": "default-src https: 'unsafe-eval' 'unsafe-inline'; object-src 'none' ; img-src *; connect-src 'self' data:"
  },
  "mimeTypes": {
    ".json": "text/json",
    ".gltf": "model/gltf+json"
  }
```

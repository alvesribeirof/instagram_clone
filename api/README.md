# api

API do projeto Instagram Clone.

## Execucao

```bash
npm install
node server.js
```

## Atualizacao de Seguranca e Dependencias (2026-03-13)

- Migracao de upload de `connect-multiparty` para `multer`.
- Atualizacao de dependencias para reduzir risco em runtime.
- Auditoria de producao (`npm audit --omit=dev`) sem vulnerabilidades.

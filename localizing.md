1. Fork activepieces repo
2. Generate .env (sh tools/deploy.sh)
3. Edit docker-compose.yml
    Ubah line:
        image: ghcr.io/activepieces/activepieces:0.63.1
    menjadi:
        build:
            context: .
            dockerfile: Dockerfile
        image: dexterap:0.1.0
4. Edit Dockerfile
    Ubah line:
        RUN cd dist/packages/server/api && npm install --production --force
    menjadi:
        RUN cd dist/packages/server/api && npm install pg --production --force

    dan tambahkan line:
        RUN cd /usr/src/app/dist/packages/server/api/ && \
            npm install pg --production --force
    setelah line:
        RUN cd /usr/src/app/dist/packages/server/api/ && npm install --production --force
5. Edit app.ts
    ganti url di line ini menjadi empty string:
        openapi: {
            servers: [
                {
                    url: 'https://cloud.activepieces.com/api',
                    description: 'Production Server',
                },
            ],..

    ganti url di line ini menjadi '#'
        externalDocs: {
                url: 'https://www.activepieces.com/docs',
                description: 'Find more info here',
            },...
6. Edit postgres-connection.ts
    komen line berikut (ada di dalam array commonMigration): AddAgentsLimitToPlatformPlan1749917984363
7. Edit license-keys-service.ts
    ganti url di line ini menjadi empty string:
        const secretManagerLicenseKeysRoute = 'https://secrets.activepieces.com/license-keys'
8. Edit system.ts
    ganti url di line ini menjadi empty string:
        [AppSystemProp.TEMPLATES_SOURCE_URL]:
            'https://cloud.activepieces.com/api/v1/flow-templates',
9. Edit piece-sync-service.ts
    ganti url di line ini menjadi empty string:
        const CLOUD_API_URL = 'https://cloud.activepieces.com/api/v1/pieces'
# Multi-stage production build for NestJS backend
FROM node:20-alpine AS builder

WORKDIR /app

# Install build dependencies
RUN apk add --no-cache python3 make g++

# Copy package manifests
COPY package*.json ./

# Install all dependencies for compiling typescript
RUN npm ci

# Copy application source
COPY . .

# Build application
RUN npm run build

# Production image
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Copy package files and install only production dependencies
COPY package*.json ./
RUN npm ci --omit=dev && npm cache clean --force

# Copy compiled application
COPY --from=builder /app/dist ./dist

# Copy required static data files from builder to dist/normalization/data
COPY --from=builder /app/src/normalization/data/icd11-full-diseases.json ./dist/normalization/data/
COPY --from=builder /app/src/normalization/data/SimpleTabulation-ICD-11-MMS-en.txt ./dist/normalization/data/

EXPOSE 4000

CMD ["node", "dist/main"]

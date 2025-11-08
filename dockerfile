# Stage 1 — Build the app
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Enable corepack (so pnpm is available)
RUN corepack enable

# Copy dependency files
COPY pnpm-lock.yaml package.json ./

# Install dependencies (frozen to ensure reproducibility)
RUN pnpm install --frozen-lockfile

# Copy all project files
COPY . .

# Build the app
RUN pnpm run build


# Stage 2 — Serve the built app using Nginx
FROM nginx:stable-alpine AS production

# Copy built assets from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Optional: copy custom nginx config if needed
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Run nginx
CMD ["nginx", "-g", "daemon off;"]

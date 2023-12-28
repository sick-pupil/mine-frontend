/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SYSTEM_NAME: string
  readonly VITE_SYSTEM_CONTEXT_PATH: string
  readonly VITE_SYSTEM_MODE: string
  readonly VITE_SYSTEM_IP: string
  readonly VITE_SYSTEM_PORT: number
  readonly VITE_SYSTEM_FRONTEND_ADMIN_USERNAME: string
  readonly VITE_SYSTEM_FRONTEND_ADMIN_PASSWORD: string
  readonly VITE_SYSTEM_BACKEND_IP_PORT: string
}
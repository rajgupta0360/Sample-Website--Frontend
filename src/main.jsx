import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { ClientProvider } from './context/clientContext'
import { FormProvider } from './context/formContext'
import { ProjectProvider } from './context/projectContext'
import { SubscribedProvider } from './context/subscribedContext'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClientProvider>
      <FormProvider>
        <ProjectProvider>
          <SubscribedProvider>
            <App />
            <Toaster/>
          </SubscribedProvider>
        </ProjectProvider>
      </FormProvider>
    </ClientProvider>
  </StrictMode>,
)

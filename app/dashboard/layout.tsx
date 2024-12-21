import { ClerkLoaded } from "@clerk/nextjs"
import Header from "@/components/Header"

function DashboardLayout({children}: { children: React.ReactNode }) {
  return (
    <ClerkLoaded>
        <div>
            <Header />
            
            {children}
        </div>
    </ClerkLoaded>   
  )
}

export default DashboardLayout
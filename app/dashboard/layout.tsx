<<<<<<< HEAD
import { ReactNode } from "react"
import SideBar from "./_components/SideBar"
import Header from "./_components/Header"

function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
        <div className="md:w-64 h-screen fixed">
            <SideBar />
        </div>
        <div className="md:ml-64">
          <Header />
          <div className="p-10">
              {children}
          </div>
        </div>

    </div>
    
=======
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
>>>>>>> 62785052cf75ed507755181a49a430ae1eb9c025
  )
}

export default DashboardLayout
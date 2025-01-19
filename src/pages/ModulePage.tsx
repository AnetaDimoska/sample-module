
import SideNav from '../components/SideNav'
import ModuleContent from '../components/ModuleContent'

export default function ModulePage() {
  return (
    <main className="flex min-h-screen pl-[20%]">
      <SideNav />
      <ModuleContent />
    </main>
  )
}



export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
     <div className="flex justify-center items-center h-full">
        {children}
     </div>
    )
  }
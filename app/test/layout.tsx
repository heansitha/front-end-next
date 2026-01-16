export default function Layout({
  children, f1, f2
}: Readonly<{
  children: React.ReactNode;
  f1: React.ReactNode;
  f2: React.ReactNode;
}>) {
  return (
   <div>
     {children}
        {f1}
        {f2}
   </div>  
  )
}

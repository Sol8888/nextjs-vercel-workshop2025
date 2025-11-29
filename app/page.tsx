import Image from "next/image";
import ProductTable from "@/components/ProductTable"
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  
  const session = await auth();

  // 2) Si NO hay sesión, mandar a la ruta de signin de Auth.js
  if (!session) {
    redirect("/api/auth/signin");
  }
 return (
  <main>
    Hello There
      <img
        src="https://media2.giphy.com/media/xTiIzJSKB4l7xTouE8/giphy.gif"
        alt="GIF animado"
        width={500}
        height={500}
      />
     <ProductTable />
  </main>
 );
}


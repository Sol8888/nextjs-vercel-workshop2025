import Image from "next/image";
import ProductTable from "@/components/ProductTable"
export default function Home() {
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

